const calculator = require('../functions/calculator')
const moves = require('../dataBase/AllMovesArr')
const convert = require('../functions/convertStringToPokemon')
const testMon = require('./pokemons')

const runAllTests = function runAllTests() {
    runBattleTest()
}

const runBattleTest = function runBattleTest() {
    const testString = testMon.pokemonObjString
    let moddedPokiArr = convert(testString)
    let calc = calculator.damageCalc(moddedPokiArr[0],moddedPokiArr[0],moves[93])
    console.log('calc: ',calc)
    console.log('move is: ', moves[93].name)
}

const tests = {
    runAllTests,
    runBattleTest
}

module.exports = tests;
