const natures = require('../dataBase/natures');
const calculator = require('./calculator');
const pokemonDB = require('../dataBase/pokemons');
const allMoves = require('../dataBase/AllMovesArr');

// 15140viktor@@@@0s153502605094050030500405&04030jenny@@@@@0a021003411103100501004910

module.exports = function(string) {
    let pokemonPartyArr = [];
    let localStorageStringsArray = string.split('&');
    for (let index = 0; index < localStorageStringsArray.length; index++) {
        const ls = localStorageStringsArray[index];
        const pokemonObject = {
            id: parseInt(ls.slice(0, 3)),
            level: getLevel(ls.slice(3, 5)),
            name: getName(ls),
            abilitie: parseInt(ls.slice(15, 16)),
            nature: getNatures(ls.slice(16, 17)),
            iv: parseInt(ls.slice(17, 19)),
            ev: parseInt(ls.slice(19, 21)),
            moves: getMoves(ls.slice(21, 26), ls.slice(26, 31), ls.slice(31, 36), ls.slice(36, 41)),
            dbData: getDbData(parseInt(ls.slice(0, 3))),
            stats: {},
            statChanges: {
                attack: null,
                defense: null,
                special: null,
                speed: null,
                accuracy: null,
                evasion: null
            },
            uid: ls
        };
        pokemonObject.stats = calculator.getPokemonStats(pokemonObject)
        pokemonPartyArr.push(pokemonObject);
    };
    return pokemonPartyArr;
}

function getMoves(move1, move2, move3, move4) {
    let returnArr = [];
    let moveStrings = [move1, move2, move3, move4]
    moveStrings.forEach((myMove) => {
        allMoves.forEach((el) => {
            if (parseInt(myMove.slice(0, 3)) === el.id) {
                returnArr.push({
                    name: el.name,
                    id: el.id,
                    power: el.power,
                    accuracy: el.accuracy,
                    pp: parseInt(myMove.slice(3, 5)),
                    type: el.type,
                    meta: el.meta                                    
                })
            }
        })
    })
    return returnArr
}

function getLevel(level) {
    if (level === "00") {
        return 100
    }
    return parseInt(level)
}

function getNatures(letter) {
    let key = letter.toLowerCase()
    let returnValue = {}
    natures.forEach((el) => {
        if (el.identifyer === key) {
            returnValue = el
        }
    })
    return returnValue
}

function getDbData(id) {
    let returnValue = {}
    pokemonDB.forEach(element => {
        if (element.id === id) {
            returnValue = element
        }
    });
    return returnValue
}

function getName(val) {
    let name = val.slice(5, 15).replace(/@/g, '')
    if (name === "") {
        pokemonDB.forEach((mon) => {
            if(mon.id === parseInt(val.slice(0, 3))) {
                name = mon.name
            }
        })
    }
    return name
}