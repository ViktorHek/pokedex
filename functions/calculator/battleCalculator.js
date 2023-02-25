const dbTypes = require("../../dataBase/types");
const specialMovesList = require("../../dataBase/nameLists/specialMoves");
// const calculator = require("./calculator.js");

module.exports = function battleCalculator(battleObj, move, playerIsAttacking) {
  const { battleId, playerMon, opponentMon, gymBadges, extra, opponentId } = battleObj;
  let attackingMon = {};
  let defendingMon = {};

  if (playerIsAttacking) {
    attackingMon = playerMon;
    defendingMon = opponentMon;
  } else {
    attackingMon = opponentMon;
    defendingMon = playerMon;
  }

  let returnValue = {
    damage: 0,
    status: { name: "", target: "" },
    statChange: { type: "", value: 0, target: "" },
    message: "",
    addedEffect: [],
  };
  let isHitting = checkIfMoveHitts(
    move,
    attackingMon.battleStats.accuracy,
    defendingMon.battleStats.evasion
  );
  if (!isHitting) {
    returnValue.message = "Attack missed";
    return returnValue;
  }

  let typeOfMove = getTypeOfMove(move);

  let data = {
    attackingMon: attackingMon,
    defendingMon: defendingMon,
    typeOfMove: typeOfMove,
    move: move,
    playerIsAttacking: playerIsAttacking,
  };

  returnValue.damage = getDamage(data);
  returnValue.status = getStatus(data);
  returnValue.statChange = getStatChange(data);
  returnValue.addedEffects = getAddedEffects(data);

  return returnValue;
};

/**
 * using attinging mons accuracy and defending mons evasion to calculate if the move hitts
 * @param {{accuracy: number|null}} move only used to check accuracy
 * @param {Number} accuracy attacking pokemons accuracy
 * @param {Number} evasion defending pokemons evasion
 * @returns {Boolean} if true the move hitts, if false the move miss
 */
function checkIfMoveHitts(move, attackingMonAccuracy, defendingMonEvasion) {
  if (move.accuracy === null) return true; // if accuracy is null then target is always opponent
  let moveAccuracy = move.accuracy / 100; // 0 - 1
  let random = generateRandomNumber(1, 255);
  let chance = moveAccuracy * 255 * attackingMonAccuracy * defendingMonEvasion;
  console.log('random: ', random)
  console.log('chance: ', chance)
  if (random < chance) {
    return true;
  } else {
    return false;
  }
}

/**
 * Used to categorice moves to make it easyer for customized functionality.
 * @returns {"psysical"|"psysical_stat_change"|"psysical_custom"|"special"|"special_stat_change"|"special_custom"|"status"|"status_stat_change"|"status_custom"} categorized by physical or specail damage, status or stat change & custom (meaning unique) or effect (meaning the move has an secondary effect)
 */
function getTypeOfMove(move) {
  let damageClass = move.meta.damage_class;
  let isSpecail = isSpecailMove(move);
  let stat_change = move.meta.stat_change;
  if (isSpecail) {
    return damageClass + "_custom";
  } else if (stat_change) {
    return damageClass + "_stat_change";
  } else return damageClass;
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
  let moveBaseType = data.typeOfMove.split("_")[0];
  if (moveBaseType === "status") return 0;
  if (specialMovesList.all.includes(data.move.name)) {
    console.log("this is a specail move from specialDamageMoves arr. No function jet");
  }
  let res = useDamageAttack(data);
  return res;
}

/**
 * ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random
 * this function is for moves that only deel damage and do not have added effects
 * @param {{}} attackingMon the attacking mon i only usede to get attack or special attack stats
 * @param {{}} defendingMon the defending mon i only usede to get defence or special defence stats
 * @param {{move: {}, playerIsAttacking: boolean, gymBadges: [], statChanges: []}} battleObject only uses gymBadges and move. where gym badges is only used for stat modification calc
 * @returns {Number} damage of move. Is rounded down and can not be below 1
 */
function useDamageAttack(data) {
  // damage = ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random
  const { attackingMon, defendingMon, move } = data;
  let isCrit = calculateIfCrit(attackingMon.battleStats.speed, move); // is crit = 2, is not crit = 1
  let AD = getattackDefenseDifferance(attackingMon, defendingMon, isCrit, move);
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
 * @param {{stats: {defense: number, special: number}}} defendingMon
 * @param {1|2} isCrit
 * @param {"physical"|"special"} move
 * @returns {Number}
 */
function getattackDefenseDifferance(attackingMon, defendingMon, isCrit, move) {
  const attack = attackingMon.unBuffedStats.attack;
  const attackSpecial = attackingMon.unBuffedStats.special;
  const buffedAttack = attackingMon.battleStats.attack;
  const buffedAttackSpecial = attackingMon.battleStats.special;
  const defense = defendingMon.unBuffedStats.defense;
  const defenseSpecial = defendingMon.unBuffedStats.special;
  const buffedDefense = defendingMon.battleStats.defense;
  const buffedDefenseSpecial = defendingMon.battleStats.special;
  const moveDamgageClass = move.meta.damage_class;

  if (isCrit) {
    if (moveDamgageClass === "physical") {
      return attack / defense;
    } else {
      return attackSpecial / defenseSpecial;
    }
  } else {
    if (moveDamgageClass === "physical") {
      return buffedAttack / buffedDefense;
    } else {
      return buffedAttackSpecial / buffedDefenseSpecial;
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

function getStatus(data) {
  const { attackingMon, defendingMon, typeOfMove, move, playerIsAttacking } = data;
  let target = "opponent";
  const nonReplacableStatus = ["sleep", "paralyze", "poison", "burn", "frozen"];
  // the following if stament is in order to exclude all the moves that inflict status to the user AKA rest.
  // later this if statment shuld be usable for moves like "thrash" and "petal-dance"
  // the move rest is unique cuz it removes prev status.
  if (move.name === "rest") {
    if (playerIsAttacking) {
      target = "player";
    }
    return { name: "sleep", target: target };
  }
  if (playerIsAttacking === false) {
    target = "player";
  }
  if (
    (target === "opponent" && nonReplacableStatus.includes(defendingMon.status)) ||
    (target === "player" && nonReplacableStatus.includes(attackingMon.status))
  ) {
    return null;
  }
  if (specialMovesList.statusinflictingMoves.includes(move.name)) {
    return { name: move.meta.status, target: target };
  }
  if (specialMovesList.damageMovesWithStatusChange.includes(move.name)) {
    let chans = generateRandomNumber(1, 100);
    if (battleObject.move.meta.effect_chance < chans) {
      let name = move.meta.status;
      if (move.name === "tri-attack") {
        let random = generateRandomNumber(1, 3);
        if (random === 1) {
          name = "paralyze";
        } else if (random === 2) {
          name = "burn";
        } else {
          name = "freeze";
        }
      }
      return { name: name, target: "opponent" };
    }
  }
  return null;
}

function getStatChange(data) {
  const { typeOfMove, move, playerIsAttacking } = data;
  if (typeOfMove.includes("_stat_change") === false) return null;
  let chanse = generateRandomNumber(1, 100);
  let statChange = {
    change: move.meta.stat_change.change,
    stat: move.meta.stat_change.stat,
    target: "opponent",
  };
  if (
    (playerIsAttacking === true && move.meta.target === "user") ||
    (playerIsAttacking === false && move.meta.target === "opponent")
  ) {
    statChange.target = "player";
  }

  if (move.meta.effect_chance === null) return statChange;
  if (chanse < move.meta.effect_chance) {
    return statChange;
  } else {
    return false;
  }
}

function getAddedEffects(data) {
  const moveName = data.move.name;
  let target = "opponent";
  let type = "";
  switch (moveName) {
    case "disable": // need acces to the last move used by the opponent
    case "mist": // needs a counter for number of turns active
    case "mimic": // need acces to the last move used by the opponent
    case "light-screen": // need to add variable in damageCalc aka calc/2
    case "reflect": // need to add variable in damageCalc aka calc/2
    case "focus-energy": // not sure where to put this
    case "transform": // fuck this
    case "conversion": // fuck this
    case "substitute": // need to acces users current HP and store this for other calc
      console.log("this move have a added effect - ", moveName);
      return null;
    default:
      return null;
  }
}