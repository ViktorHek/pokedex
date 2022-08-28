

## Read me


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
