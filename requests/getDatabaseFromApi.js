const axios = require("axios")
const pokemonListOfNames = require("../dataBase/pokemonListOfNames.json")
const listOfMoves = require('../dataBase/moves.json')

module.exports = function (app) {

    app.get('/importDb/:id', (req, res) => {
        importDb(req.params.id).then(data => {
            res.send(data)
        }).catch(err => {
            console.log('error in first funk')
            res.sendStatus(500);
        })
    });

    app.get('/importDbMoves/:id', (req, res) => {
        importDbMoves(req.params.id).then(data => {
            res.send(data)
        }).catch(err => {
            console.log('error in second funk')
            res.sendStatus(500);
        })
    });
}

async function importDb(id) {
    let name = 'onix'
    if (pokemonListOfNames[id]) { name = pokemonListOfNames[id] };

    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        return modifyResponce(response.data, id)
    } catch (error) {
        console.log('error in catch')
    }
}

function modifyResponce(data, id) {
    let modifiedPokemon = {
        id: (parseInt(id) + 1),
        name: data.name,
        abilities: getAbilities(data.abilities),
        base_experience: 77,
        real_game_index: data.game_indices[0].game_index,
        height: 88,
        moves: getMoves(data.moves),
        past_types: data.past_types,
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            },
            // shinySprites: {
            //     front: data.sprites.versions.generation-ii.crystal.front_shiny_transparent,
            //     back: data.sprites.versions.generation-ii.crystal.back_shiny_transparent
            // }
        },
        stats: {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
        },
        types: getTypes(data.types),
        weight: data.weight
    }

    return modifiedPokemon
}

function getAbilities(abilities) {
    let returnValue = []
    abilities.forEach((el) => {
        if (el && el.is_hidden === false) {
            returnValue.push(el.ability.name)
        }
    })
    return returnValue
}

function getMoves(data) {
    let returnValue = []
    data.forEach((el) => {
        if (el.version_group_details[0].version_group.name === "red-blue") {
            var moveObject = {
                name: el.move.name,
                level_learned_at: el.version_group_details[0].level_learned_at,
                move_learn_method: el.version_group_details[0].move_learn_method.name
            }
            returnValue.push(moveObject)
        }
    })
    return returnValue
}

function getTypes(data) {
    let returnValue = []
    data.forEach((el) => {
        if (el) {
            returnValue.push(el.type.name)
        }
    })

    return returnValue
}

async function importDbMoves(index) {
    // total moves = 165

    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/move/${listOfMoves[index]}`)
        return orderMoves(response.data, index)
    } catch (error) {
        console.log('error in catch')
    }
}

function orderMoves(data, index) {
    let moveObj = {
        id: data.id,
        name: data.name,
        accuracy: checkPastAccuracy(data),
        power: checkPastPower(data),
        type: checkPastType(data),
        meta: {
            pp: checkPastPP(data),
            damage_class: getDamageClassFromType(data),
            effect_chance: getPastEffectChance(data),
            effect_entries: data.effect_entries[0].effect,
            priority: data.priority,
            crit_rate: data.meta.crit_rate,
            drain: data.meta.drain,
            flinch_chance: data.meta.flinch_chance,
            healing: data.meta.healing,
            max_hits: data.meta.max_hits,
            max_turns: data.meta.max_turns,
            min_hits: data.meta.min_hits,
            min_turns: data.meta.min_turns,
            stat_chance: data.stat_chance,
            stat_changes: getStatChanges(data.stat_changes),
            target: data.target.name,
            index: index
        }
    };
    return moveObj;
};

function getStatChanges(statChangesArr) {
    let returnValue = [];
    for (let index = 0; index < statChangesArr.length; index++) {
        const element = statChangesArr[index];
        returnValue.push({ change: element.change, stat: element.stat.name });
    };
    return returnValue;
}


function checkPastAccuracy(data) {
    let pastValues = checkPast(data.past_values)
    let { accuracy } = pastValues
    if (accuracy) {
        return accuracy
    } else {
        return data.accuracy
    }
}
function checkPastPower(data) {
    let pastValues = checkPast(data.past_values)
    let { power } = pastValues
    if (power) {
        return power
    } else {
        return data.power
    }
}
function checkPastPP(data) {
    let pastValues = checkPast(data.past_values)
    let { pp } = pastValues
    if (pp) {
        return pp
    } else {
        return data.pp
    }
}
function checkPastType(data) {
    let pastValues = checkPast(data.past_values)
    let { type } = pastValues
    if (type) {
        return type
    } else {
        return data.type.name
    }
}
function getPastEffectChance(data) {
    let pastValues = checkPast(data.past_values)
    let { effect_chance } = pastValues
    if (effect_chance) {
        return effect_chance
    } else {
        return data.effect_chance
    }
}

function checkPast(pastVal) {
    let returnValue = false
    if (pastVal[0]) {
        if (pastVal[0] === 'red-blue' || pastVal[0] === 'gold-silver') {
            returnValue = pastVal
        }
    }
    return returnValue
}

function getDamageClassFromType(data) {
    let damageClass = data.damage_class.name;
    if (damageClass === 'status') { return damageClass };

    let type = checkPastType(data)
    switch (type) {
        case 'normal':
        case 'ground':
        case 'fighting':
        case 'poison':
        case 'flying':
        case 'bug':
        case 'rock':
        case 'steel':
            return 'physical'
        default:
            return 'special'
    }
}
