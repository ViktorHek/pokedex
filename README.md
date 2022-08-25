

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
