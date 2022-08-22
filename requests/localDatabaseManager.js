// localDatabaseManager
const pokemonDB = require("../dataBase/pokemons")

getAllPokemonsFormDB = async function getAllPokemonsFormDB() {
	return pokemonDB
}

getPokemonWithId = async function getPokemonWithId(id) {
    console.log('getting to funk')
    let returnObj = {}
    pokemonDB.forEach((el) => {
        if(el.id === parseInt(id)) {
            console.log('match', el.name)
            returnObj = el
        }
    })
    return returnObj
}

getPokemonAndStats = async function getPokemonAndStats(id) {
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

getPokemonAndMoves = async function getPokemonAndMoves(id) {
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

module.exports = {
    getAllPokemonsFormDB,
    getPokemonWithId,
    getPokemonAndStats,
    getPokemonAndMoves
}