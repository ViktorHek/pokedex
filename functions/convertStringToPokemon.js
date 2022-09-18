const natures = require('../dataBase/natures');
const calculator = require('./calculator');
const pokemonDB = require('../dataBase/pokemons');
const allMoves = require('../dataBase/AllMovesArr');

module.exports = function(string) {
    let pokemonPartyArr = [];
    let localStorageStringsArray = string.split('&');
    for (let index = 0; index < localStorageStringsArray.length; index++) {
        const ls = localStorageStringsArray[index];
        const pokemonObject = {
            id: parseInt(ls.slice(0, 3)),
            level: parseInt(ls.slice(3, 5)),
            name: ls.slice(5, 15).replace(/@/g, ''),
            abilitie: parseInt(ls.slice(15, 16)),
            nature: getNatures(ls.slice(16, 17)),
            iv: parseInt(ls.slice(17, 19)),
            ev: parseInt(ls.slice(19, 21)),
            moves: getMoves(ls.slice(21, 26), ls.slice(26, 31), ls.slice(31, 36), ls.slice(36, 41)),
            dbData: getDbData(parseInt(ls.slice(0, 3))),
            stats: {},
            uid: ls
        };
        pokemonObject.stats = calculator(pokemonObject)
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
