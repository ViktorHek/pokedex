// localDatabaseManager
const pokemonDB = require("../dataBase/pokemons")
const allMovesArr = require("../dataBase/AllMovesArr")

getAllPokemonsFormDB = function getAllPokemonsFormDB() {
	return pokemonDB
}

getPokemonIdFromName = function getPokemonIdFromName(name) {
    let returnValue = null
    pokemonDB.forEach((el) => {
        if(el.name == name) {
            returnValue = el.index
        }
    })
    return returnValue
}

getPokemonNameFromId = function getPokemonNameFromId(id) {
    let returnValue = null
    pokemonDB.forEach((el) => {
        if(el.index == id) {
            returnValue = el.name
        }
    })
    return returnValue
}

getPokemonObject = function getPokemonObject(value, type) {
    let returnValue = null
    pokemonDB.forEach((el) => {
        if(value == (type === 'string' ? el.name : el.id)) {
            returnValue = el
        }
    })
    return returnValue
}

getPokemonWithId = function getPokemonWithId(id) {
    let returnObj = {}
    pokemonDB.forEach((el) => {
        if(el.id === parseInt(id)) {
            returnObj = el
        }
    })
    return returnObj
}

getPokemonAndStats = function getPokemonAndStats(id) {
    let pokemonWithStats = {
        identifyer: 1337,
        hp: 1,
        attack: 1,
        defense: 1,
        specialAttack: 1,
        specialDefense: 1,
        speed: 1
    }
    pokemonDB.forEach((el) => {
        if(el.id === parseInt(id)) {
            pokemonWithStats = {
                identifyer: parseInt(id),
                hp: el.stats.hp,
                attack: el.stats.attack,
                defense: el.stats.defense,
                specialAttack: el.stats.specialAttack,
                specialDefense: el.stats.specialDefense,
                speed: el.stats.speed,
            }
        }
    })
    return pokemonWithStats
}

getPokemonAndMoves = function getPokemonAndMoves(id) {
    let pokemonWithMoves = {
        identifyer: 1337,
        moves: []
    }
    pokemonDB.forEach((el) => {
        if(el.id === parseInt(id)) {
            pokemonWithMoves = {
                identifyer: parseInt(id),
                moves: el.moves
            }
        }
    })
    return pokemonWithMoves
}

generateList = function generateList() {
    let arr = []
    allMovesArr.forEach((el) => {
        if(el.meta.stat_changes) {
            if(el.meta.stat_changes[1]) {
                arr.push(el.name)
            }
        }
    })
    console.log(arr)
}

isMoveLearnableForPokemon = function isMoveLearnableForPokemon(movename) {
    let returnValue = []

    pokemonDB.forEach((pokemon) => {
        pokemon.moves.forEach((move) => {
            if (move.name == movename) {
                returnValue.push(pokemon.name)
            }
        })
    })
    console.log(returnValue)
    return returnValue
}

getMultiblePokemons = function getMultiblePokemons(idArr) {
    let returnArr = []
    pokemonDB.forEach((mon) => {
        if(idArr.includes(mon.id)) {
            returnArr.push(mon.name)
        }
    })
    console.log(returnArr)
}

module.exports = {
    getAllPokemonsFormDB,
    getPokemonWithId,
    getPokemonAndStats,
    getPokemonAndMoves,
    generateList,
    isMoveLearnableForPokemon,
    getPokemonObject,
    getMultiblePokemons
}