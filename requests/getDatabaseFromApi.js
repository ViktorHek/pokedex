const axios = require("axios")
const pokemonListOfNames = require("./pokemonListOfNames")

module.exports = function(app) {
    app.get('/importDb/:id', (req, res) => {
        importDb(req.params.id).then(data => {
            res.send(JSON.parse(JSON.stringify(data)))
        }).catch(err => {
            console.log('error in first funk')
            res.sendStatus(500);
        })
    });
}

async function importDb(id) {
    let name = pokemonListOfNames[id]
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
        if(el && el.is_hidden === false) {
            returnValue.push(el.ability.name)
        }
    })
    return returnValue
}

function getMoves(data) {
    let returnValue = []
    data.forEach((el) => {
        if(el.version_group_details[0].version_group.name === "red-blue") {
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
        if(el) {
            returnValue.push(el.type.name)
        }
    })

    return returnValue
}

