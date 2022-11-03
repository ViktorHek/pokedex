const calculator = require('../functions/battleCalculator')
const moves = require('../dataBase/AllMovesArr')
const convert = require('../functions/convertStringToPokemon')
const testMon = require('./pokemons')

const battleObj = {
    playerIsAttacking: true,
    items: [],
    statChanges: [],
    move: 1
}

const runAllTests = function runAllTests() {
    runBattleTest()
}

const runBattleTest = function runBattleTest() {
    console.log('move is: ', moves[93].name)

    const testString = testMon.pokemonObjString
    let moddedPokiArr = convert(testString)
    battleObject = { move: moves[93], playerIsAttacking: true, gymBadges: [true, true, true, true], statChanges: {} }
    let calc = calculator(moddedPokiArr[0],moddedPokiArr[0],battleObject)
    console.log('calc: ',calc)
}

const tests = {
    runAllTests,
    runBattleTest
}

module.exports = tests;
