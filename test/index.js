const calculator = require('../functions/calculator')
const moves = require('../dataBase/AllMovesArr')
const convert = require('../functions/convertStringToPokemon')
const testMon = require('./pokemons')

const battleObj = {
    playerIsAttacking: true,
    items: [],
    weather: null,
    statChanges: [],
    move: 1
}

const runAllTests = function runAllTests() {
    runBattleTest()
}

const runBattleTest = function runBattleTest() {
    console.log('move is: ', moves[13].name)

    const testString = testMon.pokemonObjString
    let moddedPokiArr = convert(testString)
    let calc = calculator.damageCalc(moddedPokiArr[0],moddedPokiArr[0],moves[13])
    console.log('calc: ',calc)
}

const tests = {
    runAllTests,
    runBattleTest
}

module.exports = tests;
