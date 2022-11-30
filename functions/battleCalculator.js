const dbTypes = require("../dataBase/types");

// battleObject = { move, playerIsAttacking, gymBadges, statChanges }
module.exports = function battleCalculator(playersPokemon, opponentsPokemon, battleObject) {
  const { move, playerIsAttacking, statChanges } = battleObject;
  let { attackingMon, defendingMon } = getAttackingAndDefendingMon(
    playersPokemon,
    opponentsPokemon,
    playerIsAttacking,
    statChanges
  );
  let returnValue = { damage: 0, status: {}, message: "" };
  let isHitting = checkIfMoveHitts(move, attackingMon, defendingMon);
  if (!isHitting) {
    returnValue = { damage: 0, status: {}, message: "Attack missed" };
    return returnValue;
  }
  if (move.meta.damage_class === "status") {
    let res = useStatusAttack(move, playerIsAttacking);
    returnValue.status = res;
  } else {
    // move is a damege dealing move
    if (move.meta.stat_change === null) {
      let res = useDamageAttack(attackingMon, defendingMon, battleObject);
      returnValue.damage = res;
    } else {
      let damageVal = useDamageAttack(attackingMon, defendingMon, battleObject);
      let status = getAdditionalStatusChange(move, playerIsAttacking);
      returnValue.damage = damageVal;
      returnValue.status = status;
    }
  }
  // let message = getMessage(returnValue)
  // returnValue.message = message
  console.log(returnValue);
  return returnValue;
};
function getAttackingAndDefendingMon(playersPokemon, opponentsPokemon, playerIsAttacking, statChanges) {
  let attackingMon = {};
  let defendingMon = {};
  if (playerIsAttacking) {
    attackingMon = playersPokemon;
    defendingMon = opponentsPokemon;
    if (statChanges.length) {
      attackingMon.changedStats = statChanges.filter((el) => el.target == "player");
      defendingMon.changedStats = statChanges.filter((el) => el.target == "opponent");
    }
  } else {
    attackingMon = opponentsPokemon;
    defendingMon = playersPokemon;
    if (statChanges.length) {
      attackingMon.changedStats = statChanges.filter((el) => el.target === "opponent");
      defendingMon.changedStats = statChanges.filter((el) => el.target === "player");
    }
  }
  return { attackingMon, defendingMon };
}
/**
 * Status attacks includes moves that change stats & status
 * @param {{meta: {stat_change: {change: number, stat: string},target: string}}} move
 * @param {Boolean} playerIsAttacking
 * @returns {{change: number, stat: number, target: string}|{}} returns
 */
function useStatusAttack(move, playerIsAttacking) {
  const statChange = move.meta.stat_change;
  if (!statChange) {
    console.log("status attack");
    return {};
  }
  let target = "opponent";
  if (
    (playerIsAttacking === true && move.meta.target === "player") ||
    (playerIsAttacking === false && move.meta.target === "opponent")
  ) {
    target = "player";
  }
  let statChangeObj = {
    change: statChange.change,
    stat: statChange.stat,
    target: target,
  };
  return statChangeObj;
}
/**
 * used for moves that deel damage and have an additional stat change
 * @param {{meta: {stat_change: {}, effect_chance: number, target: string}}} move
 * @param {Boolean} playerIsAttacking
 * @returns {{change: number, stat: string, target: string}}
 */
function getAdditionalStatusChange(move, playerIsAttacking) {
  const statChange = move.meta.stat_change;
  const effectChance = move.meta.effect_chance;
  let random = generateRandomNumber(0, 100);
  let target = "opponent";
  if (playerIsAttacking === true && move.meta.target === "player") {
    target = "player";
  }
  if (playerIsAttacking === false && move.meta.target === "opponent") {
    target = "player";
  }
  let statChangeObj = {
    change: statChange.change,
    stat: statChange.stat,
    target: target,
  };
  if (random < effectChance) {
    return statChangeObj;
  } else {
    return {};
  }
}
/**
 * this function is for moves that only deel damage and do not have added effects
 * @param {{}} attackingMon
 * @param {{}} defendingMon
 * @param {{move: {}, playerIsAttacking: boolean, gymBadges: [], statChanges: []}} battleObject
 * @returns {Number} damage of move. Is rounded down and can not be below 1
 */
function useDamageAttack(attackingMon, defendingMon, battleObject) {
  const { gymBadges, move } = battleObject;
  let boostedStatsAttackingMon = applyStatChanges(attackingMon, gymBadges);
  let boostedStatsdeffendingMon = applyStatChanges(defendingMon, gymBadges);
  // damage = ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random
  let isCrit = calculateIfCrit(boostedStatsAttackingMon.speed, move); // is crit = 2, is not crit = 1
  let AD = getattackDefenseDifferance(
    attackingMon,
    boostedStatsAttackingMon,
    defendingMon,
    boostedStatsdeffendingMon,
    isCrit,
    move
  );
  let STAB = getStab(attackingMon, move);
  let typingCalc = getTypingCalc(move, defendingMon);
  let random = getRandomDamage();
  let firstCalc = 2 * attackingMon.level * isCrit;
  let secondCalc = firstCalc / 5 + 2;
  let thirdCalc = secondCalc * move.power * AD;
  let fourthCalc = thirdCalc / 50 + 2;
  let fifthCalc = fourthCalc * STAB * typingCalc * random;
  // console.log("useDamageAttack isCrit and random: ", isCrit, random);
  if (Math.floor(fifthCalc) < 1) {
    return 1;
  } else {
    return Math.floor(fifthCalc);
  }
}
/**
 * applying all the stat changes to a pokemon. including gym bage boost
 * @param {{stats: {attack: number, defense: number, special: number, speed: number}, statChanges: [{stat: string, change: number}]}} pokemon
 * @param {Array} gymBadges containing 4 booleans, is true if player beet the gym, false if not
 * @returns {{stats: {attack: number, defense: number, special: number, speed: number}}} note that accuracy and evasion is not icluded
 */
function applyStatChanges(pokemon, gymBadges) {
  let statChanges = pokemon.changedStats;
  // console.log('statChanges: ',statChanges)
  let stats = {
    attack: pokemon.stats.attack,
    defense: pokemon.stats.defense,
    special: pokemon.stats.special,
    speed: pokemon.stats.speed,
  };
  if (!statChanges) return stats;
  for (let index = 0; index < statChanges.length; index++) {
    const el = statChanges[index];
    stats[el.stat] = stats[el.stat] * statChangesEffectPercent(el.change);
    for (const x in gymBadges) {
      if (gymBadges[x] === true) {
        stats[x] = stats[x] * 1.125;
      }
    }
  }
  return stats;
}
/**
 * gives a number between -6 to 6 for one specific stat defined in the statName
 * @param {{changedStats: [stat: string, change: ...number]}} pokemon
 * @param {String} statName "accuracy" || "evasion"
 * @returns {Number} between -6 to 6
 */
function getChangeForSpecificStat(pokemon, statName) {
  let returnValue = 0;
  if (pokemon.changedStats) {
    let StatChageList = pokemon.changedStats.filter((el) => el.stat === statName);
    StatChageList.forEach((el) => {
      returnValue = returnValue + el.change;
    });
  }
  if (returnValue > 6) {
    returnValue = 6;
  }
  if (returnValue < -6) {
    returnValue = -6;
  }
  return returnValue;
}
/**
 * using attinging mons accuracy and defending mons evasion to calculate if the move hitts
 * @param {{accuracy: number|null}} move only used to check accuracy
 * @param {Number} accuracy attacking pokemons accuracy
 * @param {Number} evasion defending pokemons evasion
 * @returns {Boolean} if true the move hitts, if false the move miss
 */
function checkIfMoveHitts(move, attackingMon, defendingMon) {
  if (move.accuracy === null) return true; // if accuracy is null then target is always opponent
  let accuracy = getChangeForSpecificStat(attackingMon, "accuracy");
  let evasion = getChangeForSpecificStat(defendingMon, "evasion");
  let accuracyVal = 1 * statChangesEffectPercent(accuracy);
  let evasionVal = 1 * statChangesEffectPercent(evasion);
  let moveAccuracy = move.accuracy / 100; // 0 - 1
  let random = generateRandomNumber(1, 255);
  let chance = moveAccuracy * 255 * accuracyVal * evasionVal;
  if (random < chance) {
    return true;
  } else {
    return false;
  }
}
/**
 * does not jet include a check if player uses focus energy or Dire Hit
 * @param {Number} speedStat speed stat of the pokemon after stat boosts
 * @param {{meta: {crit_rate: 1|null}}} move only used for moves with high crit rate
 * @returns {1|2} 2 if crit, 1 if normal hit
 */
function calculateIfCrit(speedStat, move) {
  let random = generateRandomNumber(0, 255);
  let threshold = speedStat / 2;
  if (move.meta.crit_rate === 1) {
    threshold = threshold * 8;
  }
  if (threshold > 255) {
    threshold = 255;
  }
  if (random < threshold) {
    return 2;
  } else {
    return 1;
  }
}
/**
 * function that returns attacking pokemons attackpower / defending pokemons defence power.
 * @param {{stats: {attack: number, special: number}}} attackingMon
 * @param {{attack: number, special: number}} boostedStatsAttackingMon
 * @param {{stats: {defense: number, special: number}}} defendingMon
 * @param {{defense: number, special: number}} boostedStatsdeffendingMon
 * @param {1|2} isCrit
 * @param {"physical"|"special"} move
 * @returns {Number}
 */
function getattackDefenseDifferance(
  attackingMon,
  boostedStatsAttackingMon,
  defendingMon,
  boostedStatsdeffendingMon,
  isCrit,
  move
) {
  const attack = attackingMon.stats.attack;
  const attackSpecial = attackingMon.stats.special;
  const defense = defendingMon.stats.defense;
  const defenseSpecial = defendingMon.stats.special;
  const moveDamgageClass = move.meta.damage_class;
  if (isCrit) {
    if (moveDamgageClass === "physical") {
      return attack / defense;
    } else {
      return attackSpecial / defenseSpecial;
    }
  } else {
    if (moveDamgageClass === "physical") {
      return boostedStatsAttackingMon.attack / boostedStatsdeffendingMon.defense;
    } else {
      return boostedStatsAttackingMon.special / boostedStatsdeffendingMon.special;
    }
  }
}
function getStab(attackingMon, move) {
  if (attackingMon.types.includes(move.type)) {
    return 1.5;
  } else {
    return 1;
  }
}
function getTypingCalc(move, opponentMon) {
  let firstTyping = calcTyping(move.type, opponentMon.types[0]);
  let secondTyping = 1;
  if (opponentMon.types[1]) {
    secondTyping = calcTyping(move.type, opponentMon.types[1]);
  }
  return firstTyping * secondTyping;
}
function calcTyping(moveType, targetType) {
  let moveTypeObj = {};
  dbTypes.forEach((el) => {
    if (el.name === moveType) {
      moveTypeObj = el;
    }
  });
  if (moveTypeObj.superEffective.includes(targetType)) {
    return 2;
  } else if (moveTypeObj.notEffective.includes(targetType)) {
    return 0.5;
  } else {
    return 1;
  }
}
function getRandomDamage() {
  let randomNumber = generateRandomNumber(217, 255);
  return randomNumber / 255;
}
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Converting the number of stat boosts to percent
 * @param {Number} statChanges between -6 & 6
 * @returns {Number} between 0.25 & 4
 */
function statChangesEffectPercent(statChanges) {
  switch (statChanges) {
    case -6:
      return 0.25;
    case -5:
      return 0.28;
    case -4:
      return 0.33;
    case -3:
      return 0.4;
    case -2:
      return 0.5;
    case -1:
      return 0.66;
    case 0:
      return 1;
    case 1:
      return 1.5;
    case 2:
      return 1.2;
    case 3:
      return 2;
    case 4:
      return 3;
    case 5:
      return 3.5;
    case 6:
      return 4;
    default:
      console.log("no switch match in statChangesEffectPercent()", statChanges);
      return 1;
  }
}
