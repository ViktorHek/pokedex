const dbTypes = require("../dataBase/types");

// statsCalc start
const getPokemonStats = function getPokemonStats(pokiObj) {
  const { iv, ev, level } = pokiObj;
  const base = pokiObj.dbData.stats;
  let calculatedStats = {
    hp: calculatingHp(pokiObj),
    attack: calculatingNonHpStats(base.attack, iv.attack, ev.attack, level),
    defense: calculatingNonHpStats(base.defense, iv.defense, ev.defense, level),
    special: calculatingNonHpStats(base.special, iv.special, ev.special, level),
    speed: calculatingNonHpStats(base.speed, iv.speed, ev.speed, level),
  };
  return calculatedStats;
};
function calculatingHp(pokiObj) {
  let baseHpAndIv = pokiObj.dbData.stats.hp + pokiObj.iv.hp;
  let rootEv = Math.sqrt(pokiObj.ev.hp) / 4;
  let mainCalc =
    ((baseHpAndIv * 2 + rootEv) * pokiObj.level) / 100 + pokiObj.level + 10;
  return Math.floor(mainCalc);
}
function calculatingNonHpStats(baseStat, ivStat, evStat, level) {
  let baseStatAndIv = baseStat + ivStat;
  let rootEv = Math.sqrt(evStat) / 4;
  let mainCalc = ((baseStatAndIv * 2 + rootEv) * level) / 100 + 5;
  return Math.floor(mainCalc);
}
// statsCalc stop

// stats types level

// damageCalc start
const damageCalc = function damageCalc(
  attackingPokemon,
  defendingPokemon,
  move
) {
  const playerIsAttacking = true;
  const gymBadges = { attack: true, defense: true, special: true, speed: true };
  // damage = ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random
  let returnValue = { damage: 0, status: {}, message: "" };
  // let attackingBattleStats = {
  //     attack: attackingPokemon.battleStats.attack,
  //     defense: attackingPokemon.battleStats.defense,
  //     special: attackingPokemon.battleStats.special,
  //     speed: attackingPokemon.battleStats.speed,
  //     activeChanges: []
  // }
  let isHitting = getAccuracyCalc(attackingPokemon, defendingPokemon, move);
  if (!isHitting) {
    returnValue.message = "attack missed";
    return returnValue;
  }
  let moveStatChanges = getStatChange(move, playerIsAttacking);
  attackingPokemon.statChanges.push(moveStatChanges);

  if (attackingPokemon.statChanges.length) {
    let playerStatsWithStatChange = getStatsWithStatChange(
      attackingPokemon,
      gymBadges
    );
    console.log("playerStatsWithStatChange", playerStatsWithStatChange);
  }

  //   if (
  //     move.meta.damage_class === "physical" ||
  //     move.meta.damage_class === "special"
  //   ) {
  //     var attackDamageCalc = getAttackDamageCalc(
  //       attackingPokemon,
  //       defendingPokemon,
  //       move
  //     );
  //     returnValue.damage = attackDamageCalc;
  //   }

  return returnValue;
};

function getAttackDamageCalc(attackingPokemon, defendingPokemon, move) {
  let isCrit = calculateIfCrit(attackingPokemon, move); // is crit = 2, is not crit = 1
  let AD = getattackDefenseDifferance(
    attackingPokemon,
    defendingPokemon,
    isCrit,
    move
  );
  let STAB = getStab(attackingPokemon, move);
  let typingCalc = getTypingCalc(move, defendingPokemon);
  let random = getRandomDamage(attackingPokemon, defendingPokemon, move);
  let firstCalc = 2 * attackingPokemon.level * isCrit;
  let secondCalc = firstCalc / 5 + 2;
  let thirdCalc = secondCalc * move.power * AD;
  let fourthCalc = thirdCalc / 50 + 2;
  let fifthCalc = fourthCalc * STAB * typingCalc * random;

  // console.log("damage crit and random: ", isCrit, random);
  if (Math.floor(fifthCalc) < 1) {
    return 1;
  } else {
    return Math.floor(fifthCalc);
  }
}

function getStatsWithStatChange(pokemon, gymBadges) {
  const { statChanges } = pokemon;
  const stats = {
    attack: pokemon.stats.attack,
    defense: pokemon.stats.defense,
    special: pokemon.stats.special,
    speed: pokemon.stats.speed,
  };
  console.log("stats: ", stats);
  console.log("statChanges: ", pokemon.statChanges);
  for (let index = 0; index < statChanges.length; index++) {
    const change = statChanges[index];
    stats[change.stat] =
      stats[change.stat] * statChangesEffectPercent(change.change);
    for (const x in gymBadges) {
      if (gymBadges[x] === true) {
        stats[x] = stats[x] * 1.125;
      }
    }
  }
  console.log("new stats: ", stats);
}

function getAccuracyCalc(attackingPokemon, defendingPokemon, move) {
  if (move.accuracy === null) return true;
  // const accuracy = attackingPokemon.statChanges.accuracy
  // const evasion = defendingPokemon.statChanges.evasion
  let accuracyVal = 1;
  let evasionVal = 1;
  let moveAccuracy = move.accuracy / 100; // 0 - 1
  let random = generateRandomNumber(1, 255);

  // if (accuracy) {
  //     accuracyVal = statChangesEffectPercent(accuracy)
  // }
  // if (evasion) {
  //     evasionVal = statChangesEffectPercent(evasion)
  // }
  let chance = moveAccuracy * 255 * accuracyVal * evasionVal;
  if (random < chance) {
    return true;
  } else {
    return false;
  }
}

function getStatChange(move, playerIsAttacking) {
  const statChange = move.meta.stat_changes;
  const effectChance = move.meta.effect_chance;
  if (!statChange) return false;
  if (generateRandomNumber(0, 100) < effectChance === true) return false;
  let statChangeObj = {
    change: statChange.change,
    stat: statChange.stat,
    target: getTarget(move, playerIsAttacking),
  };
  return statChangeObj;
}

function getTarget(move, playerIsAttacking) {
  if (playerIsAttacking === true) {
    if (move.meta.target === "opponent") {
      return "opponent";
    } else {
      return "player";
    }
  } else {
    if (move.meta.target === "opponent") {
      return "player";
    } else {
      return "opponent";
    }
  }
}

function getRandomDamage() {
  let randomNumber = generateRandomNumber(217, 255);
  return randomNumber / 255;
}

function getTypingCalc(move, defendingPokemon) {
  let firstTyping = calcTyping(move.type, defendingPokemon.dbData.types[0]);
  let secondTyping = 1;
  if (defendingPokemon.dbData.types[1]) {
    secondTyping = calcTyping(move.type, defendingPokemon.dbData.types[1]);
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

const generateRandomNumber = function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function calculateIfCrit(pokemon, move) {
  let random = generateRandomNumber(0, 255);
  let threshold = pokemon.stats.speed / 2;

  // or pokemon uses focus energy or player uses Dire Hit
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

function getStab(attackingPokemon, move) {
  if (attackingPokemon.dbData.types.includes(move.type)) {
    return 1.5;
  } else {
    return 1;
  }
}

function getattackDefenseDifferance(
  attackingPokemon,
  defendingPokemon,
  isCrit,
  move
) {
  const attack = attackingPokemon.stats.attack;
  const defense = defendingPokemon.stats.defense;
  const attackingSpecial = attackingPokemon.stats.special;
  const defendingSpecial = defendingPokemon.stats.special;
  const attackAfterstatChanges =
    attack *
    statChangesEffectPercent(attackingPokemon.statChanges.attack.change);
  const defenceAfterstatChanges =
    attack *
    statChangesEffectPercent(defendingPokemon.statChanges.defense.change);
  const attackingSpecailAfterstatChanges =
    attackingSpecial *
    statChangesEffectPercent(attackingPokemon.statChanges.special.change);
  const defendingSpecialAfterstatChanges =
    defendingSpecial *
    statChangesEffectPercent(defendingPokemon.statChanges.special.change);
  const moveDamgageClass = move.meta.damage_class;
  const badgeBoost = 1;
  // add function to check for bageBoost

  if (isCrit) {
    if (moveDamgageClass === "physical") {
      return attack / defense;
    } else {
      return attackingSpecial / defendingSpecial;
    }
  } else {
    if (moveDamgageClass === "physical") {
      return attackAfterstatChanges / defenceAfterstatChanges;
    } else {
      return (
        attackingSpecailAfterstatChanges / defendingSpecialAfterstatChanges
      );
    }
  }
}

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

const calculator = {
  getPokemonStats,
  damageCalc,
  generateRandomNumber,
};

module.exports = calculator;
