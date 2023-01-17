const dbTypes = require("../../dataBase/types");
const specialMovesList = require("../../dataBase/nameLists/specialMoves");

// battleObject = { move, playerIsAttacking, gymBadges, statChanges }
module.exports = function battleCalculator(playersPokemon, opponentsPokemon, battleObject) {
  const { move, playerIsAttacking, statChanges } = battleObject;
  let returnValue = {
    damage: 0,
    status: { name: "", target: "" },
    statChange: { value: 0, target: "", stat: "" },
    addedEffects: [],
    message: "",
  };
  let { attackingMon, defendingMon } = getAttackingAndDefendingMon(
    playersPokemon,
    opponentsPokemon,
    playerIsAttacking,
    statChanges
  );
  let isHitting = checkIfMoveHitts(move, attackingMon, defendingMon);
  if (!isHitting) {
    returnValue.message = "Attack missed";
    return returnValue;
  }

  let typeOfMove = getTypeOfMove(move);

  let data = {
    attackingMon: attackingMon,
    defendingMon: defendingMon,
    battleObject: battleObject,
    typeOfMove: typeOfMove,
  };

  returnValue.damage = getDamage(data);
  returnValue.status = getStatus(data);
  returnValue.statChange = getStatChange(data);
  returnValue.addedEffects = getAddedEffects(data);
  // returnValue.message = getMessage(returnValue);

  // ---------
  // add a function for effects like poison
  // ---------

  // if (move.meta.damage_class === "status") {
  //   if (isSpecailMove(move)) {
  //     returnValue.status = useSpecailStatusAttack(move, playerIsAttacking);
  //   } else {
  //     returnValue.status = useStatusAttack(move, playerIsAttacking);
  //   }
  // } else {
  //   // move is a damege dealing move
  //   if (move.meta.stat_change === null) {
  //     let res = useDamageAttack(attackingMon, defendingMon, battleObject);
  //     returnValue.damage = res;
  //   } else {
  //     let damageVal = useDamageAttack(attackingMon, defendingMon, battleObject);
  //     let status = getAdditionalStatusChange(move, playerIsAttacking);
  //     returnValue.damage = damageVal;
  //     returnValue.status = status;
  //   }
  // }

  console.log("returnValue: ", returnValue);
  return returnValue;
};

/**
 * Used to categorice moves to make it easyer for customized functionality.
 * @returns {"psysical"|"psysical_stat_change"|"psysical_custom"|"special"|"special_stat_change"|"special_custom"|"status"|"status_stat_change"|"status_custom"} categorized by physical or specail damage, status or stat change & custom (meaning unique) or effect (meaning the move has an secondary effect)
 */
function getTypeOfMove(move) {
  let damage_class = move.meta.damage_class;
  let isSpecail = isSpecailMove(move);
  let stat_change = move.meta.stat_change;
  if (isSpecail) {
    return damage_class + "_custom";
  } else if (stat_change) {
    return damage_class + "_stat_change";
  } else return damage_class;
}
function isSpecailMove(move) {
  const name = move.name;
  if (specialMovesList.all.includes(name)) {
    return true;
  } else {
    return false;
  }
}
function getDamage(data) {
  const { attackingMon, defendingMon, battleObject, typeOfMove } = data;
  let moveBaseType = typeOfMove.split("_")[0];
  if (moveBaseType === "status") return 0;
  if (specialMovesList.all.includes(battleObject.move.name)) {
    console.log("this is a specail move from specialDamageMoves arr. No function jet");
  }
  let res = useDamageAttack(attackingMon, defendingMon, battleObject);
  return res;
}
function getStatus(data) {
  const { attackingMon, defendingMon, battleObject } = data;
  let name = battleObject.move.name;
  target = "opponent";
  // the following if stament is in order to exclude all the moves that inflict status to the user AKA rest.
  // later this if statment shuld be usable for moves like "thrash" and "petal-dance"
  // the move rest is unique cuz it removes prev status.
  if (name === "rest") {
    if (battleObject.playerIsAttacking) {
      target = "player";
    }
    return { name: "sleep", target: target };
  }

  if (battleObject.playerIsAttacking === false) {
    target = "player";
  }
  const nonReplacableStatus = ["sleep", "paralyze", "poison", "burn", "frozen"];
  if (
    (target === "opponent" && nonReplacableStatus.includes(defendingMon.status)) ||
    (target === "player" && nonReplacableStatus.includes(attackingMon.status))
  ) {
    return null;
  }
  if (specialMovesList.statusinflictingMoves.includes(name)) {
    let name = inflictStatus(battleObject.move);
    return { name: name, target: target };
  }
  if (specialMovesList.damageMovesWithStatusChange.includes(name)) {
    let chans = generateRandomNumber(1, 100);
    if (battleObject.move.meta.effect_chance < chans) {
      let name = inflictStatus(battleObject.move);
      let target = "opponent";
      return { name: name, target: target };
    }
  }
  return null;
}
function getStatChange(data) {
  const { battleObject, typeOfMove } = data;
  let statChange = {};
  let target = "opponent";
  let chanse = generateRandomNumber(1, 100);
  if (typeOfMove.includes("_stat_change") === false) return null;
  const moveStatChange = battleObject.move.meta.stat_change;
  const moveEffectChanse = battleObject.move.meta.effect_chance;
  if (
    (battleObject.playerIsAttacking === true && battleObject.move.meta.target === "player") ||
    (battleObject.playerIsAttacking === false && battleObject.move.meta.target === "opponent")
  ) {
    target = "player";
  }
  statChange = {
    change: moveStatChange.change,
    stat: moveStatChange.stat,
    target: target,
  };

  if (moveEffectChanse === null) return statChange;
  if (chanse < moveEffectChanse) {
    return statChange;
  } else {
    return false;
  }
}

function getAddedEffects(data) {
  const { playersPokemon, opponentMon, battleObject, typeOfMove } = data;
  const moveName = battleObject.move.name;
  let target = "opponent";
  let type = "";
  switch (moveName) {
    case "disable":
      // need acces to the last move used by the opponent
      let random = generateRandomNumber(0, 3); // replace this random number with the index number of whatever move the other pokemon used last
      if (battleObject.playerIsAttacking === false) {
        target = "player";
        type = `disable_${playersPokemon.moves[random]}`;
      } else {
        type = `disable_${opponentMon.moves[random]}`;
      }
      return { type: type, target: target };
    case "mist":
    case "mimic":
    case "light-screen":
    case "reflect":
    case "focus-energy":
    case "transform":
    case "conversion":
    case "substitute":
      // do shit
      console.log("this move have a added effect - ", moveName);
      return null;
    default:
      return null;
  }
}

function getAttackingAndDefendingMon(playersPokemon, opponentsPokemon, playerIsAttacking, statChanges) {
  let attackingMon = {};
  let defendingMon = {};
  if (playerIsAttacking) {
    attackingMon = playersPokemon;
    defendingMon = opponentsPokemon;
    if (statChanges.length || statChanges[0] === null) {
      attackingMon.changedStats = statChanges.filter((el) => el.target == "player");
      defendingMon.changedStats = statChanges.filter((el) => el.target == "opponent");
    }
  } else {
    attackingMon = opponentsPokemon;
    defendingMon = playersPokemon;
    if (statChanges.length || statChanges[0] === null) {
      attackingMon.changedStats = statChanges.filter((el) => el.target === "opponent");
      defendingMon.changedStats = statChanges.filter((el) => el.target === "player");
    }
  }
  return { attackingMon, defendingMon };
}
/**
 *
 * @param {{name: string}} move only the name is used
 * @returns {"sleep"|"paralyze"|"poison"|"badly poison"|"burn"|"confusion"|"frozen"}
 */
function inflictStatus(move) {
  let status = "";
  if (move.name === "tri-attack") {
    let random = generateRandomNumber(1, 3);
    if (random === 1) return "paralyze";
    if (random === 2) return "burn";
    return "frozen";
  }
  switch (move.name) {
    case "sing":
    case "sleep-powder":
    case "hypnosis":
    case "spore":
    case "rest":
      status = "sleep";
      break;
    case "stun-powder":
    case "thunder-wava":
    case "glare":
    case "body-slam":
    case "thunder-shock":
    case "thunderbolt":
    case "thunder":
    case "lick":
      status = "paralyze";
      break;
    case "poison-powder":
    case "poison-gas":
    case "poison-sting":
    case "twineedle":
    case "smog":
    case "sludge":
    case "toxic":
      status = "poison";
      break;
    case "toxic":
      status = "badly poison";
      break;
    case "ember":
    case "flamethrower":
    case "fire-blast":
      status = "burn";
      break;
    case "supersonic":
    case "confuse-ray":
    case "lovely-kiss":
    case "psybeam":
    case "confusion":
      status = "confusion";
      break;
    case "ice-beam":
    case "blizzard":
      status = "frozen";
      break;
    case "leech-seed":
      status = "seeded";
      break;
    default:
      console.log("error in inflictStatus function, ", move.name);
      break;
  }
  return status;
}
/**
 * ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random       
 * this function is for moves that only deel damage and do not have added effects
 * @param {{}} attackingMon the attacking mon i only usede to get attack or special attack stats
 * @param {{}} defendingMon the defending mon i only usede to get defence or special defence stats
 * @param {{move: {}, playerIsAttacking: boolean, gymBadges: [], statChanges: []}} battleObject only uses gymBadges and move. where gym badges is only used for stat modification calc
 * @returns {Number} damage of move. Is rounded down and can not be below 1
 */
function useDamageAttack(attackingMon, defendingMon, battleObject) {
  // damage = ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random
  const { gymBadges, move } = battleObject;
  let boostedStatsAttackingMon = applyStatChanges(attackingMon, gymBadges);
  let boostedStatsdeffendingMon = applyStatChanges(defendingMon, gymBadges);
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
  console.log("useDamageAttack isCrit and random: ", isCrit, random);
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
