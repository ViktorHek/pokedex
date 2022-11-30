// localDatabaseManager
const pokemonDB = require("../dataBase/pokemons");
const allMovesArr = require("../dataBase/AllMovesArr");
const convertStringToPokemon = require("../functions/convertStringToPokemon");
const calculator = require("../functions/calculator");
const battleCalculator = require("../functions/battleCalculator");

getAllPokemonsFormDB = function getAllPokemonsFormDB() {
  return pokemonDB;
};

getPokemonIdFromName = function getPokemonIdFromName(name) {
  let returnValue = null;
  pokemonDB.forEach((el) => {
    if (el.name == name) {
      returnValue = el.index;
    }
  });
  return returnValue;
};

getPokemonNameFromId = function getPokemonNameFromId(id) {
  let returnValue = null;
  pokemonDB.forEach((el) => {
    if (el.index == id) {
      returnValue = el.name;
    }
  });
  return returnValue;
};

getPokemonObject = function getPokemonObject(value, type) {
  let returnValue = null;
  pokemonDB.forEach((el) => {
    if (value == (type === "string" ? el.name : el.id)) {
      returnValue = el;
    }
  });
  return returnValue;
};

getPokemonWithId = function getPokemonWithId(id) {
  let returnObj = {};
  pokemonDB.forEach((el) => {
    if (el.id === parseInt(id)) {
      returnObj = el;
    }
  });
  return returnObj;
};

getPokemonAndStats = function getPokemonAndStats(id) {
  let pokemonWithStats = {
    identifyer: 1337,
    hp: 1,
    attack: 1,
    defense: 1,
    special: 1,
    speed: 1,
  };
  pokemonDB.forEach((el) => {
    if (el.id === parseInt(id)) {
      pokemonWithStats = {
        identifyer: parseInt(id),
        hp: el.stats.hp,
        attack: el.stats.attack,
        defense: el.stats.defense,
        special: el.stats.special,
        speed: el.stats.speed,
      };
    }
  });
  return pokemonWithStats;
};

getPokemonAndMoves = function getPokemonAndMoves(id) {
  let pokemonWithMoves = {
    identifyer: 1337,
    moves: [],
  };
  pokemonDB.forEach((el) => {
    if (el.id === parseInt(id)) {
      pokemonWithMoves = {
        identifyer: parseInt(id),
        moves: el.moves,
      };
    }
  });
  return pokemonWithMoves;
};

generateList = function generateList() {
  let arr = [];
  allMovesArr.forEach((el) => {
    if (el.meta.stat_change) {
      if (el.meta.stat_change[1]) {
        arr.push(el.name);
      }
    }
  });
  // console.log(arr)
};

isMoveLearnableForPokemon = function isMoveLearnableForPokemon(movename) {
  let returnValue = [];

  pokemonDB.forEach((pokemon) => {
    pokemon.moves.forEach((move) => {
      if (move.name == movename) {
        returnValue.push(pokemon.name);
      }
    });
  });
  return returnValue;
};

getMyPokemonsFromString = function getMyPokemonsFromString(arrayString) {
  let pokelist = convertStringToPokemon(arrayString);
  return pokelist;
};

getMultibleMoves = function getMultibleMoves(dataArray) {
  // dataArray syntax example 12&56&2
  let returnArr = [];
  let splitArr = dataArray.split("&");
  splitArr.forEach((myMoveId) => {
    allMovesArr.forEach((move) => {
      if (parseInt(myMoveId) === move.id) {
        returnArr.push(move);
      }
    });
  });
  return returnArr;
};

getMoveFromId = function getMoveFromId(id) {
  let moveObj = {};
  allMovesArr.forEach((move) => {
    if (parseInt(id) === move.id) {
      moveObj = move;
    }
  });
  return moveObj;
};

getMultiblePokemons = function getMultiblePokemons(dataArray) {
  // dataArray syntax = id1&id2&id3 example 12&56&2
  let returnArr = [];
  let splitArr = dataArray.split("&");
  splitArr.forEach((myPokemonId) => {
    pokemonDB.forEach((mon) => {
      if (parseInt(myPokemonId) === mon.id) {
        returnArr.push(mon);
      }
    });
  });
  return returnArr;
};

getbattleCalc = function getbattleCalc(data) {
  const { playersPokemon, opponentsPokemon, gymBadges, statChanges } = data;
  let message = "not implemented";
  let playerAttacksFirst = calculator.playerAttacksFirst(playersPokemon, opponentsPokemon, gymBadges, statChanges);
  const { playerAttackCalcDamage, opponentAttackingCalcDamage, statChangesAfterCalc } = getBothPlayersDamageCalc(data);
  let returnObj = {
    playerAttack: playerAttackCalcDamage,
    opponentAttack: opponentAttackingCalcDamage,
    playerIsAttackingFirst: playerAttacksFirst,
    statChanges: statChangesAfterCalc,
    message: message,
  };
  return returnObj;
};

function getBothPlayersDamageCalc(data, playerAttacksFirst) {
  const { playersPokemon, opponentsPokemon, moveId, gymBadges, statChanges } = data;
  let playerAttackingObj = {
    move: getMoveFromId(moveId),
    playerIsAttacking: true,
    gymBadges: gymBadges,
    statChanges: statChanges,
  };
  let opponentAttackingObj = {
    move: getOpponentsMove(data),
    playerIsAttacking: false,
    gymBadges: [],
    statChanges: statChanges,
  };
  let playerAttackingCalc = {};
  let opponentAttackingCalc = {};
  let statChangesReturnList = statChanges;

  if (playerAttacksFirst) {
    playerAttackingCalc = battleCalculator(playersPokemon, opponentsPokemon, playerAttackingObj);
    if (playerAttackingCalc.status !== {}) {
      opponentAttackingObj.statChanges.push(playerAttackingCalc.status);
      statChangesReturnList.push(playerAttackingCalc.status);
    }
    opponentAttackingCalc = battleCalculator(playersPokemon, opponentsPokemon, opponentAttackingObj);
  } else {
    opponentAttackingCalc = battleCalculator(playersPokemon, opponentsPokemon, opponentAttackingObj);
    if (playerAttackingCalc.status !== {}) {
      opponentAttackingObj.statChanges.push(opponentAttackingCalc.status);
      statChangesReturnList.push(opponentAttackingCalc.status);
    }
    playerAttackingCalc = battleCalculator(playersPokemon, opponentsPokemon, playerAttackingObj);
  }
  return {
    playerAttackCalcDamage: playerAttackingCalc.damage,
    opponentAttackingCalcDamage: opponentAttackingCalc.damage,
    statChangesAfterCalc: statChangesReturnList,
  };
}

function getOpponentsMove(data) {
  const { playersPokemon, opponentsPokemon, moveId, gymBadges, statChanges } = data;
  return getMoveFromId(moveId)
}

module.exports = {
  getAllPokemonsFormDB,
  getPokemonWithId,
  getPokemonAndStats,
  getPokemonAndMoves,
  generateList,
  isMoveLearnableForPokemon,
  getPokemonObject,
  getMyPokemonsFromString,
  getMultiblePokemons,
  getMultibleMoves,
  getbattleCalc,
};
