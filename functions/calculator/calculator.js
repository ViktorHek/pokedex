const dbTypes = require("../../dataBase/types");

const battleDataArray = [];

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
  let mainCalc = ((baseHpAndIv * 2 + rootEv) * pokiObj.level) / 100 + pokiObj.level + 10;
  return Math.floor(mainCalc);
}

function calculatingNonHpStats(baseStat, ivStat, evStat, level) {
  let baseStatAndIv = baseStat + ivStat;
  let rootEv = Math.sqrt(evStat) / 4;
  let mainCalc = ((baseStatAndIv * 2 + rootEv) * level) / 100 + 5;
  return Math.floor(mainCalc);
}

const generateRandomNumber = function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

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

function playerAttacksFirst(data) {
  const { playersPokemon, opponentsPokemon, gymBadges, statChanges } = data;

  let playerSpeed = applyStatChangesForSpecificStat(
    playersPokemon.stats.speed,
    gymBadges.speed,
    statChanges,
    "speed",
    "player"
  );
  let opponentSpeed = applyStatChangesForSpecificStat(
    opponentsPokemon.stats.speed,
    false,
    statChanges,
    "speed",
    "opponent"
  );

  playerSpeed = Math.floor(playerSpeed);
  opponentSpeed = Math.floor(opponentSpeed);
  if (playerSpeed === opponentSpeed && Math.random() < 0.5) {
    return true;
  }
  if (playerSpeed > opponentSpeed) {
    return true;
  } else {
    return false;
  }
}

function applyStatChangesForSpecificStat(playerSpeed, gymBadge, statChanges, type, applyStatsFor) {
  let returnValue = playerSpeed;
  let gymBadgeBoost = gymBadge ? 1 : 1.125;
  // if (gymBadge) gymBadgeBoost = 1.125;
  if (!statChanges.length) return returnValue * gymBadgeBoost;
  let changedStats = statChanges.filter((el) => el.stat === type);
  let speedChange = changedStats.filter((el) => el.target === applyStatsFor);
  for (let index = 0; index < speedChange.length; index++) {
    returnValue = returnValue * statChangesEffectPercent(speedChange[index].change) * gymBadgeBoost;
  }
  return returnValue;
}

const calculator = {
  getPokemonStats,
  generateRandomNumber,
  playerAttacksFirst,
  battleDataArray,
};

module.exports = calculator;
