const natures = require('../dataBase/natures');
const calculator = require('./calculator');
const pokemonDB = require('../dataBase/pokemons');
const allMoves = require('../dataBase/AllMovesArr');

// 15140viktor@@@@0s153502605094050030500405&04030jenny@@@@@0a021003411103100501004910
// [080, 40, 1, 's', 143, 'viktor', 15, 35000, 02635, 09435, 00335, 00435]

// [080, 40, 1, 's', 143, 'viktor', 15, [35000, 35000, 35000, 35000, 35000], 26, 35, 94, 35, 3, 35, 4, 35]
// '[80,40,1,"s",143,"viktor",15,35000,35000,35000,35000,35000,2635,9435,335,435]'

module.exports = function(pokemonStrings) {
    const pokemonArr = JSON.parse(pokemonStrings)
    let pokemonPartyArr = [];
    // let localStorageStringsArray = string.split('&');
    for (let index = 0; index < pokemonArr.length; index++) {
        const pokemon = pokemonArr[index];
        const pokemonObject = {
            id: parseInt(pokemon[0]),
            level: getLevel(pokemon[1]),
            abilitie: parseInt(pokemon[2]),
            nature: getNatures(pokemon[3]),
            currentHp: parseInt(pokemon[4]),
            name: pokemon[5],
            // iv: parseInt(pokemon[6]),
            iv: {
                hp: parseInt(pokemon[6][0]),
                attack: parseInt(pokemon[6][1]),
                defense: parseInt(pokemon[6][2]),
                special: parseInt(pokemon[6][3]),
                speed: parseInt(pokemon[6][4]),
            },
            ev: {
                hp: parseInt(pokemon[7][0]),
                attack: parseInt(pokemon[7][1]),
                defense: parseInt(pokemon[7][2]),
                special: parseInt(pokemon[7][3]),
                speed: parseInt(pokemon[7][4]),
            },
            moves: getMoves(pokemon),
            dbData: getDbData(parseInt(pokemon[0])),
            stats: {},
            status: 'fine',
            statChanges: [],
            // statChanges: {
            //     attack: {change: 0, val: null},
            //     defense: {change: 0, val: null},
            //     special: {change: 0, val: null},
            //     speed: {change: 0, val: null},
            //     accuracy: {change: 0, val: null},
            //     evasion: {change: 0, val: null},
            //     badgeBoost: {change: 0, val: null}
            // },
            uid: pokemonStrings
        };
        pokemonObject.stats = calculator.getPokemonStats(pokemonObject)
        console.log('full', pokemonObject)
        pokemonPartyArr.push(pokemonObject);
    };
    return pokemonPartyArr;
}

// [80, 40, 1, 's', 143, 'viktor', 15, [35000, 35000, 35000, 35000, 35000], 26, 35, 94, 35, 3, 35, 4, 35]

function getMoves(pokemonArr) {
    let returnArr = [];
    let formatedArr = [
        {id: parseInt(pokemonArr[8]), pp:parseInt(pokemonArr[9])},
        {id: parseInt(pokemonArr[10]), pp:parseInt(pokemonArr[11])},
        {id: parseInt(pokemonArr[12]), pp:parseInt(pokemonArr[13])},
        {id: parseInt(pokemonArr[14]), pp:parseInt(pokemonArr[15])},
    ]
    formatedArr.forEach((myMove) => {
        allMoves.forEach((el) => {
            if (myMove.id === el.id) {
                returnArr.push({
                    name: el.name,
                    id: el.id,
                    power: el.power,
                    accuracy: el.accuracy,
                    pp: myMove.pp,
                    type: el.type,
                    meta: el.meta                                    
                })
            }
        })
    })
    return returnArr
}

function getLevel(level) {
    if (level === "0" || level === 0) {
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