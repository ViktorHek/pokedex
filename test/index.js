const calculator = require("../functions/calculator/battleCalculator");
const moves = require("../dataBase/AllMovesArr");
const convert = require("../functions/convertStringToPokemon");
const testMon = require("./pokemons");

const battleObject = {
  move: moves[93],
  playerIsAttacking: true,
  gymBadges: [true, true, true, true],
  statChanges: [
    {
      change: 1,
      stat: "attack",
      target: "player",
    }
  ],
};

const runAllTests = function runAllTests() {
  runBattleTest();
};

const runBattleTest = function runBattleTest() {
  console.log("move is: ", battleObject.move.name);

//   const testString = testMon.pokemonObjString;
//   let moddedPokiArr = convert(testString);
  let calc = calculator(testMon.pokemonObjArr[0], testMon.pokemonObjArr[0], battleObject);
  console.log("calc: ", calc);
};

const tests = {
  runAllTests,
  runBattleTest,
};

module.exports = tests;
