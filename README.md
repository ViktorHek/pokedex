

# Read me

## Data collection
* trainer list is from pokemon green witch is taken from https://gamefaqs.gamespot.com/gameboy/924467-pokemon-green/faqs/12776 
* pokemons are taken from https://pokeapi.co/ and then manualy modifyed when nessesary

## changes from OG game
* the plan is to not have regular IV or EV to save storage space
    - Insted have a vslue between 1-5 where 1 = worst IV and 5 = perfect IV
    - EV will start at 0, after defeeting (maybe) 10 pokemon it will increes by 1. Where 1 EV = 100 EV point on ALL stats. 
* things like EV progression and EXP progression will resett when closing. aka, if you level up or EV up and save, it will be saved. But if you deffeat 9 pokemons without level/EV up and save, you have to deffeat 9 pokemons again to have the same progression. 

## Ides and plans 

* there are 324 trainers in total. 
    - alternative 1: have a 324 char long list of 0 or 1. 1 = deffeated, 0 = undeffeated
    - alternative 2: group all trainers by area. aka when you exit 'mr moon' all trainers in 'mr moob' will be checked at deffeated. But if you deffeat one trainer and escape rope out, you will have to deffeat that same triner again.

### Pokemon Object 

const object = {
    id: number,
    name: string,
    abilities: [
        string
    ], // lenght < 3
    base_experience: number,
    real_game_index: number,
    height: number,
    moves: [
        {
            name: string, 
            level_learned_at: number, 
            move_learn_method: "machine" || level-up
        }
    ],
    past_types: [
        null
    ], // always empty
    sprites: {
        defaultSprite: {
            height: number,
            width: number,
            x: number,
            y: number
        }
    },
    stats: {
        hp: number,
        attack: number,
        defense: number,
        specialAttack: number,
        specialDefense: number,
        speed: number
    },
    types: [
        string
    ], // lenght < 3
    weight: number
}


### Pokemon Move

    const object = { 
        id: number, 
        name: string, 
        accuracy: number, 
        power: number, 
        type: number, 
        meta: { 
            damage_class: string, 
            effect_chance: number || null, 
            effect_entries: string, 
            priority: number || null, 
            crit_rate: number || null, 
            drain: number || null, 
            flinch_chance: number || null, 
            healing: number || null, 
            max_hits: number || null, 
            max_turns: number || null, 
            mix_hits: number || null, 
            mix_turns: number || null, 
            stat_changes: [
                { 
                    change: number || null, 
                    stat: string || null 
                }
            ],
            target: sting, 
            index: number
        } 
    },
