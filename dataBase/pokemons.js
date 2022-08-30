// growth_rate: 1=slow, 2=medium-slow, 3=medium-fast, 4=fast
// IV range from 1-15

module.exports = [
    {
        id: 1,
        name: "bulbasaur",
        abilities: [
            "overgrow"
        ],
        base_experience: 64,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "vine-whip", level_learned_at: 13 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 1 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "leech-seed", level_learned_at: 7 },
            { name: "growth", level_learned_at: 34 },
            { name: "razor-leaf", level_learned_at: 27 },
            { name: "solar-beam", level_learned_at: 48 },
            { name: "poison-powder", level_learned_at: 20 },
            { name: "sleep-powder", level_learned_at: 41 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 45,
            attack: 49,
            defense: 49,
            speed: 45,
            special: 65
        },
        types: [
            "grass",
            "poison"
        ],
        weight: 69
    },
    {
        id: 2,
        name: "ivysaur",
        abilities: [
            "overgrow"
        ],
        base_experience: 141,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "vine-whip", level_learned_at: 13 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 1 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "leech-seed", level_learned_at: 1 },
            { name: "growth", level_learned_at: 38 },
            { name: "razor-leaf", level_learned_at: 30 },
            { name: "solar-beam", level_learned_at: 54 },
            { name: "poison-powder", level_learned_at: 22 },
            { name: "sleep-powder", level_learned_at: 46 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 62,
            defense: 63,
            special: 80,
            speed: 60
        },
        types: [
            "grass",
            "poison"
        ],
        weight: 130
    },
    {
        id: 3,
        name: "venusaur",
        abilities: [
            "overgrow"
        ],
        base_experience: 208,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "vine-whip", level_learned_at: 1 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "leech-seed", level_learned_at: 1 },
            { name: "growth", level_learned_at: 43 },
            { name: "razor-leaf", level_learned_at: 30 },
            { name: "solar-beam", level_learned_at: 65 },
            { name: "poison-powder", level_learned_at: 22 },
            { name: "sleep-powder", level_learned_at: 55 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 80,
            attack: 82,
            defense: 83,
            special: 100,
            speed: 80
        },
        types: [
            "grass",
            "poison"
        ],
        weight: 1000
    },
    {
        id: 4,
        name: "charmander",
        abilities: [
            "blaze"
        ],
        base_experience: 65,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            
            { name: "mega-punch", level_learned_at: 0 },
            { name: "scratch", level_learned_at: 1 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 15 },
            { name: "growl", level_learned_at: 1 },
            { name: "ember", level_learned_at: 9 },
            { name: "flamethrower", level_learned_at: 38 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "dragon-rage", level_learned_at: 0 },
            { name: "fire-spin", level_learned_at: 46 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 22 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 30 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special: 50,
            speed: 65
        },
        types: [
            "fire"
        ],
        weight: 85
    },
    {
        id: 5,
        name: "charmeleon",
        abilities: [
            "blaze"
        ],
        base_experience: 142,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            
            { name: "mega-punch", level_learned_at: 0 },
            { name: "scratch", level_learned_at: 1 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 15 },
            { name: "growl", level_learned_at: 1 },
            { name: "ember", level_learned_at: 1 },
            { name: "flamethrower", level_learned_at: 42 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "dragon-rage", level_learned_at: 0 },
            { name: "fire-spin", level_learned_at: 56 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 24 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 33 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 58,
            attack: 64,
            defense: 58,
            special: 65,
            speed: 80
        },
        types: [
            "fire"
        ],
        weight: 190
    },
    {
        id: 6,
        name: "charizard",
        abilities: [
            "blaze"
        ],
        base_experience: 209,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            
            { name: "mega-punch", level_learned_at: 0 },
            { name: "scratch", level_learned_at: 1 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "growl", level_learned_at: 1 },
            { name: "ember", level_learned_at: 1 },
            { name: "flamethrower", level_learned_at: 46 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "dragon-rage", level_learned_at: 0 },
            { name: "fire-spin", level_learned_at: 55 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 24 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 36 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 78,
            attack: 84,
            defense: 78,
            special: 85,
            speed: 100
        },
        types: [
            "fire",
            "flying"
        ],
        weight: 905
    },
    {
        id: 7,
        name: "squirtle",
        abilities: [
            "torrent"
        ],
        base_experience: 66,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "bite", level_learned_at: 22 },
            { name: "water-gun", level_learned_at: 15 },
            { name: "hydro-pump", level_learned_at: 42 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "withdraw", level_learned_at: 28 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 35 },
            { name: "bubble", level_learned_at: 8 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 44,
            attack: 48,
            defense: 65,
            special: 50,
            speed: 43
        },
        types: [
            "water"
        ],
        weight: 90
    },
    {
        id: 8,
        name: "wartortle",
        abilities: [
            "torrent"
        ],
        base_experience: 143,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "bite", level_learned_at: 24 },
            { name: "water-gun", level_learned_at: 15 },
            { name: "hydro-pump", level_learned_at: 47 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "withdraw", level_learned_at: 31 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 39 },
            { name: "bubble", level_learned_at: 1 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 59,
            attack: 63,
            defense: 80,
            special: 65,
            speed: 58
        },
        types: [
            "water"
        ],
        weight: 225
    },
    {
        id: 9,
        name: "blastoise",
        abilities: [
            "torrent"
        ],
        base_experience: 210,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "bite", level_learned_at: 24 },
            { name: "water-gun", level_learned_at: 1 },
            { name: "hydro-pump", level_learned_at: 52 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "withdraw", level_learned_at: 31 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 42 },
            { name: "bubble", level_learned_at: 1 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 79,
            attack: 83,
            defense: 100,
            special: 85,
            speed: 78
        },
        types: [
            "water"
        ],
        weight: 855
    },
    {
        id: 10,
        name: "caterpie",
        abilities: [
            "shield-dust"
        ],
        base_experience: 53,
        growth_rate: 3,
        catch_rate: 255,
        height: 88,
        moves: [
            
            { name: "tackle", level_learned_at: 1 },
            { name: "string-shot", level_learned_at: 1, move_learn_method: "level-up "}
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 45,
            attack: 30,
            defense: 35,
            special: 20,
            speed: 45
        },
        types: [
            "bug"
        ],
        weight: 29
    },
    {
        id: 11,
        name: "metapod",
        abilities: [
            "shed-skin"
        ],
        base_experience: 72,
        growth_rate: 3,
        catch_rate: 120,
        height: 88,
        moves: [
            
            { name: "harden", level_learned_at: 1, move_learn_method: "level-up "}
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 50,
            attack: 20,
            defense: 55,
            special: 25,
            speed: 30
        },
        types: [
            "bug"
        ],
        weight: 99
    },
    {
        id: 12,
        name: "butterfree",
        abilities: [
            "compound-eyes"
        ],
        base_experience: 160,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            
            { name: "razor-wind", level_learned_at: 0 },
            { name: "whirlwind", level_learned_at: 26 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "supersonic", level_learned_at: 21 },
            { name: "psybeam", level_learned_at: 32 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "poison-powder", level_learned_at: 15 },
            { name: "stun-spore", level_learned_at: 16 },
            { name: "sleep-powder", level_learned_at: 17 },
            { name: "toxic", level_learned_at: 0 },
            { name: "confusion", level_learned_at: 1 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 45,
            defense: 50,
            special: 80,
            speed: 70
        },
        types: [
            "bug",
            "flying"
        ],
        weight: 320
    },
    {
        id: 13,
        name: "weedle",
        abilities: [
            "shield-dust"
        ],
        base_experience: 52,
        growth_rate: 3,
        catch_rate: 255,
        height: 88,
        moves: [
            
            { name: "poison-sting", level_learned_at: 1 },
            { name: "string-shot", level_learned_at: 1, move_learn_method: "level-up "}
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 35,
            defense: 30,
            special: 20,
            speed: 50
        },
        types: [
            "bug",
            "poison"
        ],
        weight: 32
    },
    {
        id: 14,
        name: "kakuna",
        abilities: [
            "shed-skin"
        ],
        base_experience: 71,
        growth_rate: 3,
        catch_rate: 120,
        height: 88,
        moves: [
            { name: "harden", level_learned_at: 1, move_learn_method: "level-up "}
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 45,
            attack: 25,
            defense: 50,
            special: 25,
            speed: 35
        },
        types: [
            "bug",
            "poison"
        ],
        weight: 100
    },
    {
        id: 15,
        name: "beedrill",
        abilities: [
            "swarm"
        ],
        base_experience: 159,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "fury-attack", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "twineedle", level_learned_at: 20 },
            { name: "pin-missile", level_learned_at: 30 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 35 },
            { name: "rage", level_learned_at: 25 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 16 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 90,
            defense: 40,
            special: 45,
            speed: 75
        },
        types: [
            "bug",
            "poison"
        ],
        weight: 295
    },
    {
        id: 16,
        name: "pidgey",
        abilities: [
            "keen-eye",
            "tangled-feet"
        ],
        base_experience: 55,
        growth_rate: 2,
        catch_rate: 255,
        height: 88,
        moves: [
            
            { name: "razor-wind", level_learned_at: 0 },
            { name: "gust", level_learned_at: 1 },
            { name: "wing-attack", level_learned_at: 28 },
            { name: "whirlwind", level_learned_at: 19 },
            { name: "fly", level_learned_at: 0 },
            { name: "sand-attack", level_learned_at: 5 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 36 },
            { name: "quick-attack", level_learned_at: 12 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "mirror-move", level_learned_at: 44 },
            { name: "swift", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 45,
            defense: 40,
            special: 35,
            speed: 56
        },
        types: [
            "normal",
            "flying"
        ],
        weight: 18
    },
    {
        id: 17,
        name: "pidgeotto",
        abilities: [
            "keen-eye",
            "tangled-feet"
        ],
        base_experience: 113,
        growth_rate: 2,
        catch_rate: 120,
        height: 88,
        moves: [
            
            { name: "razor-wind", level_learned_at: 0 },
            { name: "gust", level_learned_at: 1 },
            { name: "wing-attack", level_learned_at: 31 },
            { name: "whirlwind", level_learned_at: 21 },
            { name: "fly", level_learned_at: 0 },
            { name: "sand-attack", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 40 },
            { name: "quick-attack", level_learned_at: 12 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "mirror-move", level_learned_at: 49 },
            { name: "swift", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 63,
            attack: 60,
            defense: 55,
            special: 50,
            speed: 71
        },
        types: [
            "normal",
            "flying"
        ],
        weight: 300
    },
    {
        id: 18,
        name: "pidgeot",
        abilities: [
            "keen-eye",
            "tangled-feet"
        ],
        base_experience: 172,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            
            { name: "razor-wind", level_learned_at: 0 },
            { name: "gust", level_learned_at: 1 },
            { name: "wing-attack", level_learned_at: 31 },
            { name: "whirlwind", level_learned_at: 21 },
            { name: "fly", level_learned_at: 0 },
            { name: "sand-attack", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 44 },
            { name: "quick-attack", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "mirror-move", level_learned_at: 54 },
            { name: "swift", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 83,
            attack: 80,
            defense: 75,
            special: 70,
            speed: 101
        },
        types: [
            "normal",
            "flying"
        ],
        weight: 395
    },
    {
        id: 19,
        name: "rattata",
        abilities: [
            "run-away",
            "guts"
        ],
        base_experience: 57,
        growth_rate: 3,
        catch_rate: 255,
        height: 88,
        moves: [
            
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "quick-attack", level_learned_at: 7 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 23 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "hyper-fang", level_learned_at: 14 },
            { name: "super-fang", level_learned_at: 34 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 30,
            attack: 56,
            defense: 35,
            special: 25,
            speed: 72
        },
        types: [
            "normal"
        ],
        weight: 35
    },
    {
        id: 20,
        name: "raticate",
        abilities: [
            "run-away",
            "guts"
        ],
        base_experience: 116,
        growth_rate: 3,
        catch_rate: 90,
        height: 88,
        moves: [
            
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "quick-attack", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 27 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "hyper-fang", level_learned_at: 14 },
            { name: "super-fang", level_learned_at: 41 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 55,
            attack: 81,
            defense: 60,
            special: 50,
            speed: 97
        },
        types: [
            "normal"
        ],
        weight: 185
    },
    {
        id: 21,
        name: "spearow",
        abilities: [
            "keen-eye"
        ],
        base_experience: 58,
        growth_rate: 3,
        catch_rate: 255,
        height: 88,
        moves: [
            
            { name: "razor-wind", level_learned_at: 0 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 },
            { name: "fury-attack", level_learned_at: 15 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 9 },
            { name: "growl", level_learned_at: 1 },
            { name: "peck", level_learned_at: 1 },
            { name: "drill-peck", level_learned_at: 29 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 36 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "mirror-move", level_learned_at: 22 },
            { name: "swift", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 60,
            defense: 30,
            special: 31,
            speed: 70
        },
        types: [
            "normal",
            "flying"
        ],
        weight: 20
    },
    {
        id: 22,
        name: "fearow",
        abilities: [
            "keen-eye"
        ],
        base_experience: 162,
        growth_rate: 3,
        catch_rate: 90,
        height: 88,
        moves: [
            
            { name: "razor-wind", level_learned_at: 0 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 },
            { name: "fury-attack", level_learned_at: 15 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "growl", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "peck", level_learned_at: 1 },
            { name: "drill-peck", level_learned_at: 34 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 43 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "mirror-move", level_learned_at: 25 },
            { name: "swift", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 90,
            defense: 65,
            special: 61,
            speed: 100
        },
        types: [
            "normal",
            "flying"
        ],
        weight: 380
    },
    {
        id: 23,
        name: "ekans",
        abilities: [
            "intimidate",
            "shed-skin"
        ],
        base_experience: 62,
        growth_rate: 3,
        catch_rate: 255,
        height: 88,
        moves: [
            
            { name: "body-slam", level_learned_at: 0 },
            { name: "wrap", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "poison-sting", level_learned_at: 10 },
            { name: "leer", level_learned_at: 1 },
            { name: "bite", level_learned_at: 17 },
            { name: "acid", level_learned_at: 38 },
            { name: "strength", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 31 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "glare", level_learned_at: 24 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 35,
            attack: 60,
            defense: 44,
            special: 40,
            speed: 55
        },
        types: [
            "poison"
        ],
        weight: 69
    },
    {
        id: 24,
        name: "arbok",
        abilities: [
            "intimidate",
            "shed-skin"
        ],
        base_experience: 147,
        growth_rate: 3,
        catch_rate: 90,
        height: 88,
        moves: [
            
            { name: "body-slam", level_learned_at: 0 },
            { name: "wrap", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "poison-sting", level_learned_at: 1 },
            { name: "leer", level_learned_at: 1 },
            { name: "bite", level_learned_at: 17 },
            { name: "acid", level_learned_at: 47 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 36 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "glare", level_learned_at: 27 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 95,
            defense: 69,
            special: 65,
            speed: 80
        },
        types: [
            "poison"
        ],
        weight: 650
    },
    {
        id: 25,
        name: "pikachu",
        abilities: [
            "static"
        ],
        base_experience: 82,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 1 },
            { name: "surf", level_learned_at: 0, move_learn_method: "stadium-surfing-pikachu"},
            { name: "submission", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "thunder-shock", level_learned_at: 1 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 9 },
            { name: "thunder", level_learned_at: 43 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 33 },
            { name: "quick-attack", level_learned_at: 16 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 26 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 35,
            attack: 55,
            defense: 40,
            special: 50,
            speed: 90
        },
        types: [
            "electric"
        ],
        weight: 60
    },
    {
        id: 26,
        name: "raichu",
        abilities: [
            "static"
        ],
        base_experience: 122,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "thunder-shock", level_learned_at: 1 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 1 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 90,
            defense: 55,
            special: 90,
            speed: 110
        },
        types: [
            "electric"
        ],
        weight: 300
    },
    {
        id: 27,
        name: "sandshrew",
        abilities: [
            "sand-veil"
        ],
        base_experience: 93,
        growth_rate: 3,
        catch_rate: 255,
        height: 88,
        moves: [
            
            { name: "scratch", level_learned_at: 1 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "sand-attack", level_learned_at: 10 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "poison-sting", level_learned_at: 24 },
            { name: "submission", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 31 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "fury-swipes", level_learned_at: 38 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "slash", level_learned_at: 17 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 50,
            attack: 75,
            defense: 85,
            special: 30,
            speed: 40
        },
        types: [
            "ground"
        ],
        weight: 120
    },
    {
        id: 28,
        name: "sandslash",
        abilities: [
            "sand-veil"
        ],
        base_experience: 163,
        growth_rate: 3,
        catch_rate: 90,
        height: 88,
        moves: [
            
            { name: "scratch", level_learned_at: 1 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "sand-attack", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "poison-sting", level_learned_at: 27 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 36 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "fury-swipes", level_learned_at: 47 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "slash", level_learned_at: 17 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 75,
            attack: 100,
            defense: 110,
            special: 55,
            speed: 65
        },
        types: [
            "ground"
        ],
        weight: 295
    },
    {
        id: 29,
        name: "nidoran-f",
        abilities: [
            "poison-point",
            "rivalry"
        ],
        base_experience: 59,
        growth_rate: 2,
        catch_rate: 235,
        height: 88,
        moves: [
            
            { name: "scratch", level_learned_at: 8 },
            { name: "double-kick", level_learned_at: 43 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 21 },
            { name: "poison-sting", level_learned_at: 14 },
            { name: "bite", level_learned_at: 29 },
            { name: "growl", level_learned_at: 1 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "fury-swipes", level_learned_at: 36 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 55,
            attack: 47,
            defense: 52,
            special: 40,
            speed: 41
        },
        types: [
            "poison"
        ],
        weight: 70
    },
    {
        id: 30,
        name: "nidorina",
        abilities: [
            "poison-point",
            "rivalry"
        ],
        base_experience: 117,
        growth_rate: 2,
        catch_rate: 120,
        height: 88,
        moves: [
            
            { name: "scratch", level_learned_at: 1 },
            { name: "double-kick", level_learned_at: 50 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 23 },
            { name: "poison-sting", level_learned_at: 14 },
            { name: "bite", level_learned_at: 32 },
            { name: "growl", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "fury-swipes", level_learned_at: 41 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 70,
            attack: 62,
            defense: 67,
            special: 55,
            speed: 56
        },
        types: [
            "poison"
        ],
        weight: 200
    },
    {
        id: 31,
        name: "nidoqueen",
        abilities: [
            "poison-point",
            "rivalry"
        ],
        base_experience: 194,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            
            { name: "mega-punch", level_learned_at: 0 }, 
            { name: "pay-day", level_learned_at: 0 },
            { name: "scratch", level_learned_at: 1 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "poison-sting", level_learned_at: 14 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 90,
            attack: 92,
            defense: 87,
            special: 75,
            speed: 76
        },
        types: [
            "poison",
            "ground"
        ],
        weight: 600
    },
    {
        id: 32,
        name: "nidoran-m",
        abilities: [
            "poison-point",
            "rivalry"
        ],
        base_experience: 60,
        growth_rate: 2,
        catch_rate: 235,
        height: 88,
        moves: [
            
            { name: "double-kick", level_learned_at: 43 },
            { name: "horn-attack", level_learned_at: 8 },
            { name: "fury-attack", level_learned_at: 29 },
            { name: "horn-drill", level_learned_at: 36 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "poison-sting", level_learned_at: 14 },
            { name: "leer", level_learned_at: 1 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 21 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 46,
            attack: 57,
            defense: 40,
            special: 40,
            speed: 50
        },
        types: [
            "poison"
        ],
        weight: 90
    },
    {
        id: 33,
        name: "nidorino",
        abilities: [
            "poison-point",
            "rivalry"
        ],
        base_experience: 117,
        growth_rate: 2,
        catch_rate: 120,
        height: 88,
        moves: [
            { name: "double-kick", level_learned_at: 50 },
            { name: "horn-attack", level_learned_at: 1 },
            { name: "fury-attack", level_learned_at: 32 },
            { name: "horn-drill", level_learned_at: 41 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "poison-sting", level_learned_at: 14 },
            { name: "leer", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 23 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 61,
            attack: 72,
            defense: 57,
            special: 55,
            speed: 65
        },
        types: [
            "poison"
        ],
        weight: 195
    },
    {
        id: 34,
        name: "nidoking",
        abilities: [
            "poison-point",
            "rivalry"
        ],
        base_experience: 195,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "horn-attack", level_learned_at: 1 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "thrash", level_learned_at: 1 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "poison-sting", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 81,
            attack: 102,
            defense: 77,
            special: 75,
            speed: 85
        },
        types: [
            "poison",
            "ground"
        ],
        weight: 620
    },
    {
        id: 35,
        name: "clefairy",
        abilities: [
            "cute-charm",
            "magic-guard"
        ],
        base_experience: 68,
        growth_rate: 4,
        catch_rate: 150,
        height: 88,
        moves: [
            { name: "pound", level_learned_at: 1 },
            { name: "double-slap", level_learned_at: 18 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 1 },
            { name: "sing", level_learned_at: 13 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "minimize", level_learned_at: 24 },
            { name: "defense-curl", level_learned_at: 39 },
            { name: "light-screen", level_learned_at: 48 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 31 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0  }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 70,
            attack: 45,
            defense: 48,
            special: 60,
            speed: 35
        },
        types: [
            "normal"
        ],
        weight: 75
    },
    {
        id: 36,
        name: "clefable",
        abilities: [
            "cute-charm",
            "magic-guard"
        ],
        base_experience: 129,
        growth_rate: 4,
        catch_rate: 25,
        height: 88,
        moves: [
            { name: "double-slap", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "sing", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "minimize", level_learned_at: 1 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 1 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0  }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 95,
            attack: 70,
            defense: 73,
            special: 85,
            speed: 60
        },
        types: [
            "normal"
        ],
        weight: 400
    },
    {
        id: 37,
        name: "vulpix",
        abilities: [
            "flash-fire"
        ],
        base_experience: 63,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "roar", level_learned_at: 21 },
            { name: "ember", level_learned_at: 1 },
            { name: "flamethrower", level_learned_at: 35 },
            { name: "fire-spin", level_learned_at: 42 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "quick-attack", level_learned_at: 16 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "confuse-ray", level_learned_at: 28 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 38,
            attack: 41,
            defense: 40,
            special: 65,
            speed: 65
        },
        types: [
            "fire"
        ],
        weight: 99
    },
    {
        id: 38,
        name: "ninetales",
        abilities: [
            "flash-fire"
        ],
        base_experience: 178,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "roar", level_learned_at: 1 },
            { name: "ember", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "quick-attack", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 73,
            attack: 76,
            defense: 75,
            special: 100,
            speed: 100
        },
        types: [
            "fire"
        ],
        weight: 199
    },
    {
        id: 39,
        name: "jigglypuff",
        abilities: [
            "cute-charm",
            "competitive"
        ],
        base_experience: 76,
        growth_rate: 4,
        catch_rate: 170,
        height: 88,
        moves: [
            { name: "pound", level_learned_at: 9 },
            { name: "double-slap", level_learned_at: 24 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 34 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 39 },
            { name: "sing", level_learned_at: 1 },
            { name: "disable", level_learned_at: 14 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "defense-curl", level_learned_at: 19 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 29 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0  }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 115,
            attack: 45,
            defense: 20,
            special: 25,
            speed: 20
        },
        types: [
            "normal"
        ],
        weight: 55
    },
    {
        id: 40,
        name: "wigglytuff",
        abilities: [
            "cute-charm",
            "competitive"
        ],
        base_experience: 109,
        growth_rate: 4,
        catch_rate: 50,
        height: 88,
        moves: [
            { name: "double-slap", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "sing", level_learned_at: 1 },
            { name: "disable", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "defense-curl", level_learned_at: 1 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0  }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 140,
            attack: 70,
            defense: 45,
            special: 50,
            speed: 45
        },
        types: [
            "normal"
        ],
        weight: 120
    },
    {
        id: 41,
        name: "zubat",
        abilities: [
            "inner-focus"
        ],
        base_experience: 54,
        growth_rate: 3,
        catch_rate: 255,
        height: 88,
        moves: [
            { name: "razor-wind", level_learned_at: 0 },
            { name: "wing-attack", level_learned_at: 28 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "bite", level_learned_at: 15 },
            { name: "supersonic", level_learned_at: 10 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "confuse-ray", level_learned_at: 21 },
            { name: "haze", level_learned_at: 36 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "leech-life", level_learned_at: 1 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 45,
            defense: 35,
            special: 40,
            speed: 55
        },
        types: [
            "poison",
            "flying"
        ],
        weight: 75
    },
    {
        id: 42,
        name: "golbat",
        abilities: [
            "inner-focus"
        ],
        base_experience: 171,
        growth_rate: 3,
        catch_rate: 90,
        height: 88,
        moves: [
            { name: "razor-wind", level_learned_at: 0 },
            { name: "wing-attack", level_learned_at: 32 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "bite", level_learned_at: 1 },
            { name: "supersonic", level_learned_at: 10 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 1 },
            { name: "double-team", level_learned_at: 0 },
            { name: "confuse-ray", level_learned_at: 21 },
            { name: "haze", level_learned_at: 43 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "leech-life", level_learned_at: 1 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 75,
            attack: 80,
            defense: 70,
            special: 75,
            speed: 90
        },
        types: [
            "poison",
            "flying"
        ],
        weight: 550
    },
    {
        id: 43,
        name: "oddish",
        abilities: [
            "chlorophyll"
        ],
        base_experience: 78,
        growth_rate: 2,
        catch_rate: 255,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "acid", level_learned_at: 24 },
            { name: "absorb", level_learned_at: 1 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 46 },
            { name: "poison-powder", level_learned_at: 15 },
            { name: "stun-spore", level_learned_at: 17 },
            { name: "sleep-powder", level_learned_at: 19 },
            { name: "petal-dance", level_learned_at: 33 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 45,
            attack: 50,
            defense: 55,
            special: 75,
            speed: 30
        },
        types: [
            "grass",
            "poison"
        ],
        weight: 54
    },
    {
        id: 44,
        name: "gloom",
        abilities: [
            "chlorophyll"
        ],
        base_experience: 132,
        growth_rate: 2,
        catch_rate: 120,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "acid", level_learned_at: 28 },
            { name: "absorb", level_learned_at: 1 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 52 },
            { name: "poison-powder", level_learned_at: 1 },
            { name: "stun-spore", level_learned_at: 1 },
            { name: "sleep-powder", level_learned_at: 19 },
            { name: "petal-dance", level_learned_at: 38 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 65,
            defense: 70,
            special: 85,
            speed: 40
        },
        types: [
            "grass",
            "poison"
        ],
        weight: 86
    },
    {
        id: 45,
        name: "vileplume",
        abilities: [
            "chlorophyll"
        ],
        base_experience: 184,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "acid", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "poison-powder", level_learned_at: 15 },
            { name: "stun-spore", level_learned_at: 1 },
            { name: "sleep-powder", level_learned_at: 1 },
            { name: "petal-dance", level_learned_at: 1 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 75,
            attack: 80,
            defense: 85,
            special: 100,
            speed: 50
        },
        types: [
            "grass",
            "poison"
        ],
        weight: 186
    },
    {
        id: 46,
        name: "paras",
        abilities: [
            "effect-spore",
            "dry-skin"
        ],
        base_experience: 70,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "scratch", level_learned_at: 1 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "growth", level_learned_at: 41 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "stun-spore", level_learned_at: 13 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "leech-life", level_learned_at: 20 },
            { name: "spore", level_learned_at: 27 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 34 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 35,
            attack: 70,
            defense: 55,
            special: 55,
            speed: 25
        },
        types: [
            "bug",
            "grass"
        ],
        weight: 54
    },
    {
        id: 47,
        name: "parasect",
        abilities: [
            "effect-spore",
            "dry-skin"
        ],
        base_experience: 128,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "scratch", level_learned_at: 1 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "growth", level_learned_at: 48 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "stun-spore", level_learned_at: 1 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "leech-life", level_learned_at: 1 },
            { name: "spore", level_learned_at: 30 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 39 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 95,
            defense: 80,
            special: 80,
            speed: 30
        },
        types: [
            "bug",
            "grass"
        ],
        weight: 295
    },
    {
        id: 48,
        name: "venonat",
        abilities: [
            "compound-eyes",
            "tinted-lens"
        ],
        base_experience: 75,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "disable", level_learned_at: 1 },
            { name: "psybeam", level_learned_at: 35 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "poison-powder", level_learned_at: 24 },
            { name: "stun-spore", level_learned_at: 30 },
            { name: "sleep-powder", level_learned_at: 38 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 43 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "leech-life", level_learned_at: 27 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 55,
            defense: 50,
            special: 40,
            speed: 45
        },
        types: [
            "bug",
            "poison"
        ],
        weight: 300
    },
    {
        id: 49,
        name: "venomoth",
        abilities: [
            "shield-dust",
            "tinted-lens"
        ],
        base_experience: 138,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "razor-wind", level_learned_at: 0 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "disable", level_learned_at: 1 },
            { name: "psybeam", level_learned_at: 38 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "poison-powder", level_learned_at: 1 },
            { name: "stun-spore", level_learned_at: 30 },
            { name: "sleep-powder", level_learned_at: 43 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 50 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "leech-life", level_learned_at: 1 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 70,
            attack: 65,
            defense: 60,
            special: 90,
            speed: 90
        },
        types: [
            "bug",
            "poison"
        ],
        weight: 125
    },
    {
        id: 50,
        name: "diglett",
        abilities: [
            "sand-veil",
            "arena-trap"
        ],
        base_experience: 81,
        growth_rate: 3,
        catch_rate: 255,
        height: 88,
        moves: [
            { name: "scratch", level_learned_at: 1 },
            { name: "sand-attack", level_learned_at: 24 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 15 },
            { name: "earthquake", level_learned_at: 40 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 19 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "slash", level_learned_at: 31 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 10,
            attack: 55,
            defense: 25,
            special: 45,
            speed: 95
        },
        types: [
            "ground"
        ],
        weight: 8
    },
    {
        id: 51,
        name: "dugtrio",
        abilities: [
            "sand-veil",
            "arena-trap"
        ],
        base_experience: 153,
        growth_rate: 3,
        catch_rate: 50,
        height: 88,
        moves: [
            { name: "scratch", level_learned_at: 1 },
            { name: "sand-attack", level_learned_at: 24 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 47 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 1 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "slash", level_learned_at: 35 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 35,
            attack: 100,
            defense: 50,
            special: 70,
            speed: 120
        },
        types: [
            "ground"
        ],
        weight: 333
    },
    {
        id: 52,
        name: "meowth",
        abilities: [
            "pickup",
            "technician"
        ],
        base_experience: 69,
        growth_rate: 3,
        catch_rate: 255,
        height: 88,
        moves: [
            { name: "pay-day", level_learned_at: 17 },
            { name: "scratch", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "bite", level_learned_at: 12 },
            { name: "growl", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 24 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "fury-swipes", level_learned_at: 33 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 44 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 45,
            defense: 35,
            special: 40,
            speed: 90
        },
        types: [
            "normal"
        ],
        weight: 42
    },
    {
        id: 53,
        name: "persian",
        abilities: [
            "limber",
            "technician"
        ],
        base_experience: 148,
        growth_rate: 3,
        catch_rate: 90,
        height: 88,
        moves: [
            { name: "pay-day", level_learned_at: 17 },
            { name: "scratch", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "bite", level_learned_at: 1 },
            { name: "growl", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 1 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "fury-swipes", level_learned_at: 37 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 51 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 70,
            defense: 60,
            special: 65,
            speed: 115
        },
        types: [
            "normal"
        ],
        weight: 320
    },
    {
        id: 54,
        name: "psyduck",
        abilities: [
            "damp",
            "cloud-nine"
        ],
        base_experience: 80,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "scratch", level_learned_at: 1 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 28 },
            { name: "disable", level_learned_at: 31 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "hydro-pump", level_learned_at: 52 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "confusion", level_learned_at: 36 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "fury-swipes", level_learned_at: 43 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 50,
            attack: 52,
            defense: 48,
            special: 50,
            speed: 55
        },
        types: [
            "water"
        ],
        weight: 196
    },
    {
        id: 55,
        name: "golduck",
        abilities: [
            "damp",
            "cloud-nine"
        ],
        base_experience: 174,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "scratch", level_learned_at: 1 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "disable", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "hydro-pump", level_learned_at: 59 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "confusion", level_learned_at: 39 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "fury-swipes", level_learned_at: 48 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 80,
            attack: 82,
            defense: 78,
            special: 80,
            speed: 85
        },
        types: [
            "water"
        ],
        weight: 766
    },
    {
        id: 56,
        name: "mankey",
        abilities: [
            "vital-spirit",
            "anger-point"
        ],
        base_experience: 74,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "karate-chop", level_learned_at: 15 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "scratch", level_learned_at: 1 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "thrash", level_learned_at: 39 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 33 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 27 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "fury-swipes", level_learned_at: 21 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 80,
            defense: 35,
            special: 35,
            speed: 70
        },
        types: [
            "fighting"
        ],
        weight: 280
    },
    {
        id: 57,
        name: "primeape",
        abilities: [
            "vital-spirit",
            "anger-point"
        ],
        base_experience: 149,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "karate-chop", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "scratch", level_learned_at: 1 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "thrash", level_learned_at: 46 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 37 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 27 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "fury-swipes", level_learned_at: 1 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 105,
            defense: 60,
            special: 60,
            speed: 95
        },
        types: [
            "fighting"
        ],
        weight: 320
    },
    {
        id: 58,
        name: "growlithe",
        abilities: [
            "intimidate",
            "flash-fire"
        ],
        base_experience: 91,
        growth_rate: 1,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 30 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 23 },
            { name: "bite", level_learned_at: 1 },
            { name: "roar", level_learned_at: 1 },
            { name: "ember", level_learned_at: 18 },
            { name: "flamethrower", level_learned_at: 50 },
            { name: "dragon-rage", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 39 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 55,
            attack: 70,
            defense: 45,
            special: 50,
            speed: 60
        },
        types: [
            "fire"
        ],
        weight: 190
    },
    {
        id: 59,
        name: "arcanine",
        abilities: [
            "intimidate",
            "flash-fire"
        ],
        base_experience: 213,
        growth_rate: 1,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 1 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "roar", level_learned_at: 1 },
            { name: "ember", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "dragon-rage", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 90,
            attack: 110,
            defense: 80,
            special: 80,
            speed: 95
        },
        types: [
            "fire"
        ],
        weight: 1550
    },
    {
        id: 60,
        name: "poliwag",
        abilities: [
            "water-absorb",
            "damp"
        ],
        base_experience: 77,
        growth_rate: 2,
        catch_rate: 255,
        height: 88,
        moves: [
            { name: "double-slap", level_learned_at: 25 },
            { name: "body-slam", level_learned_at: 31 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "water-gun", level_learned_at: 19 },
            { name: "hydro-pump", level_learned_at: 45 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "hypnosis", level_learned_at: 16 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "amnesia", level_learned_at: 38 },
            { name: "bubble", level_learned_at: 1 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 50,
            defense: 40,
            special: 40,
            speed: 90
        },
        types: [
            "water"
        ],
        weight: 124
    },
    {
        id: 61,
        name: "poliwhirl",
        abilities: [
            "water-absorb",
            "damp"
        ],
        base_experience: 131,
        growth_rate: 2,
        catch_rate: 120,
        height: 88,
        moves: [
            { name: "double-slap", level_learned_at: 26 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 33 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "water-gun", level_learned_at: 1 },
            { name: "hydro-pump", level_learned_at: 49 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "hypnosis", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "amnesia", level_learned_at: 41 },
            { name: "bubble", level_learned_at: 1 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 65,
            defense: 65,
            special: 50,
            speed: 90
        },
        types: [
            "water"
        ],
        weight: 200
    },
    {
        id: 62,
        name: "poliwrath",
        abilities: [
            "water-absorb",
            "damp"
        ],
        base_experience: 185,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "double-slap", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "water-gun", level_learned_at: 1 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "hypnosis", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 90,
            attack: 85,
            defense: 95,
            special: 70,
            speed: 70
        },
        types: [
            "water",
            "fighting"
        ],
        weight: 540
    },
    {
        id: 63,
        name: "abra",
        abilities: [
            "synchronize",
            "inner-focus"
        ],
        base_experience: 73,
        growth_rate: 2,
        catch_rate: 200,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 1 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 25,
            attack: 20,
            defense: 15,
            special: 105,
            speed: 90
        },
        types: [
            "psychic"
        ],
        weight: 195
    },
    {
        id: 64,
        name: "kadabra",
        abilities: [
            "synchronize",
            "inner-focus"
        ],
        base_experience: 145,
        growth_rate: 2,
        catch_rate: 100,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "disable", level_learned_at: 1 },
            { name: "psybeam", level_learned_at: 27 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "confusion", level_learned_at: 1 },
            { name: "psychic", level_learned_at: 38 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 1 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "recover", level_learned_at: 31 },
            { name: "reflect", level_learned_at: 42 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 35,
            defense: 30,
            special: 120,
            speed: 105
        },
        types: [
            "psychic"
        ],
        weight: 565
    },
    {
        id: 65,
        name: "alakazam",
        abilities: [
            "synchronize",
            "inner-focus"
        ],
        base_experience: 186,
        growth_rate: 2,
        catch_rate: 50,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "disable", level_learned_at: 1 },
            { name: "psybeam", level_learned_at: 27 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "confusion", level_learned_at: 1 },
            { name: "psychic", level_learned_at: 38 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 1 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "recover", level_learned_at: 31 },
            { name: "reflect", level_learned_at: 42 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 55,
            attack: 50,
            defense: 45,
            special: 135,
            speed: 120
        },
        types: [
            "psychic"
        ],
        weight: 480
    },
    {
        id: 66,
        name: "machop",
        abilities: [
            "guts",
            "no-guard"
        ],
        base_experience: 88,
        growth_rate: 2,
        catch_rate: 180,
        height: 88,
        moves: [
            { name: "karate-chop", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 25 },
            { name: "submission", level_learned_at: 46 },
            { name: "low-kick", level_learned_at: 20 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 39 },
            { name: "strength", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 32 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 70,
            attack: 80,
            defense: 50,
            special: 35,
            speed: 35
        },
        types: [
            "fighting"
        ],
        weight: 195
    },
    {
        id: 67,
        name: "machoke",
        abilities: [
            "guts",
            "no-guard"
        ],
        base_experience: 146,
        growth_rate: 2,
        catch_rate: 90,
        height: 88,
        moves: [
            { name: "karate-chop", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "submission", level_learned_at: 52 },
            { name: "low-kick", level_learned_at: 1 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 44 },
            { name: "strength", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 36 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 80,
            attack: 100,
            defense: 70,
            special: 50,
            speed: 45
        },
        types: [
            "fighting"
        ],
        weight: 705
    },
    {
        id: 68,
        name: "machamp",
        abilities: [
            "guts",
            "no-guard"
        ],
        base_experience: 193,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "karate-chop", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 52 },
            { name: "low-kick", level_learned_at: 1 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 44 },
            { name: "strength", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 36 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 90,
            attack: 130,
            defense: 80,
            special: 65,
            speed: 55
        },
        types: [
            "fighting"
        ],
        weight: 1300
    },
    {
        id: 69,
        name: "bellsprout",
        abilities: [
            "chlorophyll"
        ],
        base_experience: 84,
        growth_rate: 2,
        catch_rate: 255,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "slam", level_learned_at: 42 },
            { name: "vine-whip", level_learned_at: 1 },
            { name: "wrap", level_learned_at: 13 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "acid", level_learned_at: 26 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "growth", level_learned_at: 1 },
            { name: "razor-leaf", level_learned_at: 33 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "poison-powder", level_learned_at: 15 },
            { name: "stun-spore", level_learned_at: 21 },
            { name: "sleep-powder", level_learned_at: 18 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 50,
            attack: 75,
            defense: 35,
            special: 70,
            speed: 40
        },
        types: [
            "grass",
            "poison"
        ],
        weight: 40
    },
    {
        id: 70,
        name: "weepinbell",
        abilities: [
            "chlorophyll"
        ],
        base_experience: 151,
        growth_rate: 2,
        catch_rate: 120,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "slam", level_learned_at: 49 },
            { name: "vine-whip", level_learned_at: 1 },
            { name: "wrap", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "acid", level_learned_at: 29 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "growth", level_learned_at: 1 },
            { name: "razor-leaf", level_learned_at: 38 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "poison-powder", level_learned_at: 15 },
            { name: "stun-spore", level_learned_at: 23 },
            { name: "sleep-powder", level_learned_at: 18 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 90,
            defense: 50,
            special: 85,
            speed: 55
        },
        types: [
            "grass",
            "poison"
        ],
        weight: 64
    },
    {
        id: 71,
        name: "victreebel",
        abilities: [
            "chlorophyll"
        ],
        base_experience: 191,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "wrap", level_learned_at: 13 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "acid", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "razor-leaf", level_learned_at: 1 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "poison-powder", level_learned_at: 15 },
            { name: "stun-spore", level_learned_at: 1 },
            { name: "sleep-powder", level_learned_at: 1 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 80,
            attack: 105,
            defense: 65,
            special: 100,
            speed: 70
        },
        types: [
            "grass",
            "poison"
        ],
        weight: 155
    },
    {
        id: 72,
        name: "tentacool",
        abilities: [
            "clear-body",
            "liquid-ooze"
        ],
        base_experience: 105,
        growth_rate: 1,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "wrap", level_learned_at: 13 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "poison-sting", level_learned_at: 18 },
            { name: "supersonic", level_learned_at: 7 },
            { name: "acid", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 22 },
            { name: "hydro-pump", level_learned_at: 48 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 40 },
            { name: "double-team", level_learned_at: 0 },
            { name: "barrier", level_learned_at: 33 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "constrict", level_learned_at: 27 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 40,
            defense: 35,
            special: 100,
            speed: 70
        },
        types: [
            "water",
            "poison"
        ],
        weight: 455
    },
    {
        id: 73,
        name: "tentacruel",
        abilities: [
            "clear-body",
            "liquid-ooze"
        ],
        base_experience: 205,
        growth_rate: 1,
        catch_rate: 60,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "wrap", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "poison-sting", level_learned_at: 18 },
            { name: "supersonic", level_learned_at: 1 },
            { name: "acid", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 22 },
            { name: "hydro-pump", level_learned_at: 50 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 43 },
            { name: "double-team", level_learned_at: 0 },
            { name: "barrier", level_learned_at: 35 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "constrict", level_learned_at: 27 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 80,
            attack: 70,
            defense: 65,
            special: 120,
            speed: 100
        },
        types: [
            "water",
            "poison"
        ],
        weight: 550
    },
    {
        id: 74,
        name: "geodude",
        abilities: [
            "rock-head",
            "sturdy"
        ],
        base_experience: 86,
        growth_rate: 2,
        catch_rate: 255,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "rock-throw", level_learned_at: 16 },
            { name: "earthquake", level_learned_at: 31 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 26 },
            { name: "defense-curl", level_learned_at: 11 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 21 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 36 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 80,
            defense: 100,
            special: 30,
            speed: 20
        },
        types: [
            "rock",
            "ground"
        ],
        weight: 200
    },
    {
        id: 75,
        name: "graveler",
        abilities: [
            "rock-head",
            "sturdy"
        ],
        base_experience: 134,
        growth_rate: 2,
        catch_rate: 120,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "rock-throw", level_learned_at: 16 },
            { name: "earthquake", level_learned_at: 36 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 29 },
            { name: "defense-curl", level_learned_at: 1 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 21 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 43 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 55,
            attack: 95,
            defense: 115,
            special: 45,
            speed: 35
        },
        types: [
            "rock",
            "ground"
        ],
        weight: 1050
    },
    {
        id: 76,
        name: "golem",
        abilities: [
            "rock-head",
            "sturdy"
        ],
        base_experience: 177,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "rock-throw", level_learned_at: 16 },
            { name: "earthquake", level_learned_at: 36 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 29 },
            { name: "defense-curl", level_learned_at: 1 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 21 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 43 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 80,
            attack: 120,
            defense: 130,
            special: 55,
            speed: 45
        },
        types: [
            "rock",
            "ground"
        ],
        weight: 3000
    },
    {
        id: 77,
        name: "ponyta",
        abilities: [
            "run-away",
            "flash-fire"
        ],
        base_experience: 152,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "stomp", level_learned_at: 32 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 43 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 30 },
            { name: "growl", level_learned_at: 35 },
            { name: "ember", level_learned_at: 1 },
            { name: "fire-spin", level_learned_at: 39 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 48 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 50,
            attack: 85,
            defense: 55,
            special: 65,
            speed: 90
        },
        types: [
            "fire"
        ],
        weight: 300
    },
    {
        id: 78,
        name: "rapidash",
        abilities: [
            "run-away",
            "flash-fire"
        ],
        base_experience: 192,
        growth_rate: 3,
        catch_rate: 60,
        height: 88,
        moves: [
            { name: "stomp", level_learned_at: 1 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 47 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "growl", level_learned_at: 1 },
            { name: "ember", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "fire-spin", level_learned_at: 39 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 55 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 100,
            defense: 70,
            special: 80,
            speed: 105
        },
        types: [
            "fire"
        ],
        weight: 950
    },
    {
        id: 79,
        name: "slowpoke",
        abilities: [
            "oblivious",
            "own-tempo"
        ],
        base_experience: 99,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "pay-day", level_learned_at: 0 },
            { name: "headbutt", level_learned_at: 22 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 27 },
            { name: "disable", level_learned_at: 18 },
            { name: "water-gun", level_learned_at: 33 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "confusion", level_learned_at: 1 },
            { name: "psychic", level_learned_at: 48 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "amnesia", level_learned_at: 40 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 90,
            attack: 65,
            defense: 65,
            special: 40,
            speed: 15
        },
        types: [
            "water",
            "psychic"
        ],
        weight: 360
    },
    {
        id: 80,
        name: "slowbro",
        abilities: [
            "oblivious",
            "own-tempo"
        ],
        base_experience: 164,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "headbutt", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 27 },
            { name: "disable", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 33 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "confusion", level_learned_at: 1 },
            { name: "psychic", level_learned_at: 55 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "withdraw", level_learned_at: 37 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "amnesia", level_learned_at: 44 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 95,
            attack: 75,
            defense: 110,
            special: 80,
            speed: 30
        },
        types: [
            "water",
            "psychic"
        ],
        weight: 785
    },
    {
        id: 81,
        name: "magnemite",
        abilities: [
            "magnet-pull",
            "sturdy"
        ],
        base_experience: 89,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "supersonic", level_learned_at: 29 },
            { name: "sonic-boom", level_learned_at: 21 },
            { name: "thunder-shock", level_learned_at: 25 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 35 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 47 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 41 },
            { name: "flash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0  }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 25,
            attack: 35,
            defense: 70,
            special: 95,
            speed: 45
        },
        types: [
            "electric"
        ],
        weight: 60
    },
    {
        id: 82,
        name: "magneton",
        abilities: [
            "magnet-pull",
            "sturdy"
        ],
        base_experience: 161,
        growth_rate: 3,
        catch_rate: 60,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "supersonic", level_learned_at: 29 },
            { name: "sonic-boom", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "thunder-shock", level_learned_at: 1 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 38 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 54 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 46 },
            { name: "flash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0  }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 50,
            attack: 60,
            defense: 95,
            special: 120,
            speed: 70
        },
        types: [
            "electric"
        ],
        weight: 600
    },
    {
        id: 83,
        name: "farfetchd",
        abilities: [
            "keen-eye",
            "inner-focus"
        ],
        base_experience: 94,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "razor-wind", level_learned_at: 0 },
            { name: "swords-dance", level_learned_at: 23 },
            { name: "cut", level_learned_at: 0 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 },
            { name: "sand-attack", level_learned_at: 1 },
            { name: "fury-attack", level_learned_at: 15 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 7 },
            { name: "peck", level_learned_at: 1 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 31 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 39 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 52,
            attack: 65,
            defense: 55,
            special: 58,
            speed: 60
        },
        types: [
            "normal",
            "flying"
        ],
        weight: 150
    },
    {
        id: 84,
        name: "doduo",
        abilities: [
            "run-away",
            "early-bird"
        ],
        base_experience: 96,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "whirlwind", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 },
            { name: "fury-attack", level_learned_at: 24 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 20 },
            { name: "peck", level_learned_at: 1 },
            { name: "drill-peck", level_learned_at: 30 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 44 },
            { name: "rage", level_learned_at: 36 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 40 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 35,
            attack: 85,
            defense: 45,
            special: 35,
            speed: 75
        },
        types: [
            "normal",
            "flying"
        ],
        weight: 392
    },
    {
        id: 85,
        name: "dodrio",
        abilities: [
            "run-away",
            "early-bird"
        ],
        base_experience: 158,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "whirlwind", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 },
            { name: "fury-attack", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "peck", level_learned_at: 1 },
            { name: "drill-peck", level_learned_at: 30 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 51 },
            { name: "rage", level_learned_at: 39 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 45 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 110,
            defense: 70,
            special: 60,
            speed: 100
        },
        types: [
            "normal",
            "flying"
        ],
        weight: 852
    },
    {
        id: 86,
        name: "seel",
        abilities: [
            "thick-fat",
            "hydration"
        ],
        base_experience: 100,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "pay-day", level_learned_at: 0 },
            { name: "headbutt", level_learned_at: 1 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 45 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 30 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 50 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "aurora-beam", level_learned_at: 35 },
            { name: "strength", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 40 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 45,
            defense: 55,
            special: 70,
            speed: 45
        },
        types: [
            "water"
        ],
        weight: 900
    },
    {
        id: 87,
        name: "dewgong",
        abilities: [
            "thick-fat",
            "hydration"
        ],
        base_experience: 176,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "pay-day", level_learned_at: 0 },
            { name: "headbutt", level_learned_at: 1 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 50 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 56 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "aurora-beam", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 44 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 90,
            attack: 70,
            defense: 80,
            special: 95,
            speed: 70
        },
        types: [
            "water",
            "ice"
        ],
        weight: 1200
    },
    {
        id: 88,
        name: "grimer",
        abilities: [
            "stench",
            "sticky-hold"
        ],
        base_experience: 90,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "pound", level_learned_at: 1 },
            { name: "disable", level_learned_at: 1 },
            { name: "poison-gas", level_learned_at: 30 },
            { name: "minimize", level_learned_at: 33 },
            { name: "sludge", level_learned_at: 37 },
            { name: "harden", level_learned_at: 42 },
            { name: "screech", level_learned_at: 48 },
            { name: "acid-armor", level_learned_at: 55 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 80,
            attack: 80,
            defense: 50,
            special: 40,
            speed: 25
        },
        types: [
            "poison"
        ],
        weight: 300
    },
    {
        id: 89,
        name: "muk",
        abilities: [
            "stench",
            "sticky-hold"
        ],
        base_experience: 157,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "pound", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "disable", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 53 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 45 },
            { name: "minimize", level_learned_at: 33 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "sludge", level_learned_at: 37 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "poison-gas", level_learned_at: 1 },
            { name: "acid-armor", level_learned_at: 60 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 105,
            attack: 105,
            defense: 75,
            special: 65,
            speed: 50
        },
        types: [
            "poison"
        ],
        weight: 300
    },
    {
        id: 90,
        name: "shellder",
        abilities: [
            "shell-armor",
            "skill-link"
        ],
        base_experience: 97,
        growth_rate: 1,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 39 },
            { name: "supersonic", level_learned_at: 18 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 50 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "aurora-beam", level_learned_at: 30 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "withdraw", level_learned_at: 1 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "clamp", level_learned_at: 23 },
            { name: "swift", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 30,
            attack: 65,
            defense: 100,
            special: 45,
            speed: 40
        },
        types: [
            "water"
        ],
        weight: 40
    },
    {
        id: 91,
        name: "cloyster",
        abilities: [
            "shell-armor",
            "skill-link"
        ],
        base_experience: 203,
        growth_rate: 1,
        catch_rate: 60,
        height: 88,
        moves: [
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "supersonic", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "aurora-beam", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "withdraw", level_learned_at: 1 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "clamp", level_learned_at: 1 },
            { name: "swift", level_learned_at: 0 },
            { name: "spike-cannon", level_learned_at: 50 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 50,
            attack: 95,
            defense: 180,
            special: 85,
            speed: 70
        },
        types: [
            "water",
            "ice"
        ],
        weight: 1325
    },
    {
        id: 92,
        name: "gastly",
        abilities: [
            "levitate"
        ],
        base_experience: 95,
        growth_rate: 2,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "mega-drain", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "hypnosis", level_learned_at: 27 },
            { name: "rage", level_learned_at: 0 },
            { name: "night-shade", level_learned_at: 1 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "confuse-ray", level_learned_at: 1 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "lick", level_learned_at: 1 },
            { name: "dream-eater", level_learned_at: 35 },
            { name: "psywave", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 30,
            attack: 35,
            defense: 30,
            special: 100,
            speed: 80
        },
        types: [
            "ghost",
            "poison"
        ],
        weight: 1
    },
    {
        id: 93,
        name: "haunter",
        abilities: [
            "levitate"
        ],
        base_experience: 126,
        growth_rate: 2,
        catch_rate: 90,
        height: 88,
        moves: [
            { name: "mega-drain", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "hypnosis", level_learned_at: 29 },
            { name: "rage", level_learned_at: 0 },
            { name: "night-shade", level_learned_at: 1 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "confuse-ray", level_learned_at: 1 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "lick", level_learned_at: 1 },
            { name: "dream-eater", level_learned_at: 38 },
            { name: "psywave", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 45,
            attack: 50,
            defense: 45,
            special: 115,
            speed: 95
        },
        types: [
            "ghost",
            "poison"
        ],
        weight: 1
    },
    {
        id: 94,
        name: "gengar",
        abilities: [
            "cursed-body"
        ],
        base_experience: 190,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "hypnosis", level_learned_at: 29 },
            { name: "rage", level_learned_at: 0 },
            { name: "night-shade", level_learned_at: 1 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "confuse-ray", level_learned_at: 1 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "lick", level_learned_at: 1 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "dream-eater", level_learned_at: 38 },
            { name: "psywave", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 65,
            defense: 60,
            special: 130,
            speed: 110
        },
        types: [
            "ghost",
            "poison"
        ],
        weight: 405
    },
    {
        id: 95,
        name: "onix",
        abilities: [
            "rock-head",
            "sturdy"
        ],
        base_experience: 108,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "bind", level_learned_at: 15 },
            { name: "slam", level_learned_at: 33 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "rock-throw", level_learned_at: 19 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 25 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 1 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 43 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 35,
            attack: 45,
            defense: 160,
            special: 30,
            speed: 70
        },
        types: [
            "rock",
            "ground"
        ],
        weight: 2100
    },
    {
        id: 96,
        name: "drowzee",
        abilities: [
            "insomnia",
            "forewarn"
        ],
        base_experience: 102,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "pound", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "headbutt", level_learned_at: 24 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "disable", level_learned_at: 12 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "confusion", level_learned_at: 17 },
            { name: "psychic", level_learned_at: 32 },
            { name: "hypnosis", level_learned_at: 1 },
            { name: "meditate", level_learned_at: 37 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "dream-eater", level_learned_at: 0 },
            { name: "poison-gas", level_learned_at: 29 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 48,
            defense: 45,
            special: 90,
            speed: 42
        },
        types: [
            "psychic"
        ],
        weight: 324
    },
    {
        id: 97,
        name: "hypno",
        abilities: [
            "insomnia",
            "forewarn"
        ],
        base_experience: 165,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "pound", level_learned_at: 1 },
            { name: "disable", level_learned_at: 1 },
            { name: "confusion", level_learned_at: 1 },
            { name: "hypnosis", level_learned_at: 1 },
            { name: "headbutt", level_learned_at: 24 },
            { name: "psychic", level_learned_at: 37 },
            { name: "poison-gas", level_learned_at: 33 },
            { name: "meditate", level_learned_at: 43 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "dream-eater", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 85,
            attack: 73,
            defense: 70,
            special: 115,
            speed: 67
        },
        types: [
            "psychic"
        ],
        weight: 756
    },
    {
        id: 98,
        name: "krabby",
        abilities: [
            "hyper-cutter",
            "shell-armor"
        ],
        base_experience: 115,
        growth_rate: 3,
        catch_rate: 225,
        height: 88,
        moves: [
            { name: "vice-grip", level_learned_at: 20 },
            { name: "guillotine", level_learned_at: 25 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "stomp", level_learned_at: 30 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 40 },
            { name: "bide", level_learned_at: 0 },
            { name: "bubble", level_learned_at: 1 },
            { name: "crabhammer", level_learned_at: 35 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 30,
            attack: 105,
            defense: 90,
            special: 25,
            speed: 50
        },
        types: [
            "water"
        ],
        weight: 65
    },
    {
        id: 99,
        name: "kingler",
        abilities: [
            "hyper-cutter",
            "shell-armor"
        ],
        base_experience: 206,
        growth_rate: 3,
        catch_rate: 60,
        height: 88,
        moves: [
            { name: "vice-grip", level_learned_at: 1 },
            { name: "leer", level_learned_at: 1 },
            { name: "bubble", level_learned_at: 1 },
            { name: "guillotine", level_learned_at: 25 },
            { name: "stomp", level_learned_at: 34 },
            { name: "crabhammer", level_learned_at: 42 },
            { name: "harden", level_learned_at: 49 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 55,
            attack: 130,
            defense: 115,
            special: 50,
            speed: 75
        },
        types: [
            "water"
        ],
        weight: 600
    },
    {
        id: 100,
        name: "voltorb",
        abilities: [
            "soundproof",
            "static"
        ],
        base_experience: 103,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "screech", level_learned_at: 1 },
            { name: "sonic-boom", level_learned_at: 17 },
            { name: "self-destruct", level_learned_at: 22 },
            { name: "light-screen", level_learned_at: 29 },
            { name: "swift", level_learned_at: 36 },
            { name: "explosion", level_learned_at: 43 },
            { name: "take-down", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 30,
            defense: 50,
            special: 55,
            speed: 100
        },
        types: [
            "electric"
        ],
        weight: 104
    },
    {
        id: 101,
        name: "electrode",
        abilities: [
            "soundproof",
            "static"
        ],
        base_experience: 150,
        growth_rate: 3,
        catch_rate: 60,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "sonic-boom", level_learned_at: 1 },
            { name: "screech", level_learned_at: 1 },
            { name: "self-destruct", level_learned_at: 22 },
            { name: "light-screen", level_learned_at: 29 },
            { name: "swift", level_learned_at: 40 },
            { name: "explosion", level_learned_at: 50 },
            { name: "take-down", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 50,
            defense: 70,
            special: 80,
            speed: 140
        },
        types: [
            "electric"
        ],
        weight: 666
    },
    {
        id: 102,
        name: "exeggcute",
        abilities: [
            "chlorophyll"
        ],
        base_experience: 98,
        growth_rate: 1,
        catch_rate: 90,
        height: 88,
        moves: [
            { name: "hypnosis", level_learned_at: 1 },
            { name: "barrage", level_learned_at: 1 },
            { name: "leech-seed", level_learned_at: 28 },
            { name: "reflect", level_learned_at: 25 },
            { name: "stun-spore", level_learned_at: 32 },
            { name: "poison-powder", level_learned_at: 37 },
            { name: "solar-beam", level_learned_at: 42 },
            { name: "sleep-powder", level_learned_at: 48 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "egg-bomb", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 40,
            defense: 80,
            special: 60,
            speed: 40
        },
        types: [
            "grass",
            "psychic"
        ],
        weight: 25
    },
    {
        id: 103,
        name: "exeggutor",
        abilities: [
            "chlorophyll"
        ],
        base_experience: 212,
        growth_rate: 1,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "hypnosis", level_learned_at: 1 },
            { name: "barrage", level_learned_at: 1 },
            { name: "stomp", level_learned_at: 28 },
            { name: "egg-bomb", level_learned_at: 50 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 95,
            attack: 95,
            defense: 85,
            special: 125,
            speed: 55
        },
        types: [
            "grass",
            "psychic"
        ],
        weight: 1200
    },
    {
        id: 104,
        name: "cubone",
        abilities: [
            "rock-head",
            "lightning-rod"
        ],
        base_experience: 87,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "growl", level_learned_at: 1 },
            { name: "bone-club", level_learned_at: 1 },
            { name: "leer", level_learned_at: 25 },
            { name: "focus-energy", level_learned_at: 31 },
            { name: "thrash", level_learned_at: 38 },
            { name: "bonemerang", level_learned_at: 43 },
            { name: "rage", level_learned_at: 46 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 50,
            attack: 50,
            defense: 95,
            special: 40,
            speed: 35
        },
        types: [
            "ground"
        ],
        weight: 65
    },
    {
        id: 105,
        name: "marowak",
        abilities: [
            "rock-head",
            "lightning-rod"
        ],
        base_experience: 124,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "thrash", level_learned_at: 41 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "growl", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 55 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 1 },
            { name: "bide", level_learned_at: 0 },
            { name: "bone-club", level_learned_at: 1 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "bonemerang", level_learned_at: 48 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 80,
            defense: 110,
            special: 50,
            speed: 45
        },
        types: [
            "ground"
        ],
        weight: 450
    },
    {
        id: 106,
        name: "hitmonlee",
        abilities: [
            "limber",
            "reckless"
        ],
        base_experience: 139,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "double-kick", level_learned_at: 1 },
            { name: "mega-kick", level_learned_at: 53 },
            { name: "jump-kick", level_learned_at: 38 },
            { name: "rolling-kick", level_learned_at: 33 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "meditate", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "focus-energy", level_learned_at: 43 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "high-jump-kick", level_learned_at: 48 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 50,
            attack: 120,
            defense: 53,
            special: 35,
            speed: 87
        },
        types: [
            "fighting"
        ],
        weight: 498
    },
    {
        id: 107,
        name: "hitmonchan",
        abilities: [
            "keen-eye",
            "iron-fist"
        ],
        base_experience: 140,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "comet-punch", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 48 },
            { name: "fire-punch", level_learned_at: 33 },
            { name: "ice-punch", level_learned_at: 38 },
            { name: "thunder-punch", level_learned_at: 43 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 53 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 50,
            attack: 105,
            defense: 79,
            special: 35,
            speed: 76
        },
        types: [
            "fighting"
        ],
        weight: 502
    },
    {
        id: 108,
        name: "lickitung",
        abilities: [
            "own-tempo",
            "oblivious"
        ],
        base_experience: 127,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "slam", level_learned_at: 31 },
            { name: "stomp", level_learned_at: 7 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "wrap", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "supersonic", level_learned_at: 1 },
            { name: "disable", level_learned_at: 15 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 39 },
            { name: "double-team", level_learned_at: 0 },
            { name: "defense-curl", level_learned_at: 23 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 90,
            attack: 55,
            defense: 75,
            special: 60,
            speed: 30
        },
        types: [
            "normal"
        ],
        weight: 655
    },
    {
        id: 109,
        name: "koffing",
        abilities: [
            "levitate",
            "neutralizing-gas"
        ],
        base_experience: 114,
        growth_rate: 3,
        catch_rate: 190,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "smokescreen", level_learned_at: 37 },
            { name: "haze", level_learned_at: 45 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 40 },
            { name: "smog", level_learned_at: 1 },
            { name: "sludge", level_learned_at: 32 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 48 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 65,
            defense: 95,
            special: 60,
            speed: 35
        },
        types: [
            "poison"
        ],
        weight: 10
    },
    {
        id: 110,
        name: "weezing",
        abilities: [
            "levitate",
            "neutralizing-gas"
        ],
        base_experience: 173,
        growth_rate: 3,
        catch_rate: 60,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "smokescreen", level_learned_at: 39 },
            { name: "haze", level_learned_at: 49 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 43 },
            { name: "smog", level_learned_at: 1 },
            { name: "sludge", level_learned_at: 1 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 53 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 90,
            defense: 120,
            special: 85,
            speed: 60
        },
        types: [
            "poison"
        ],
        weight: 95
    },
    {
        id: 111,
        name: "rhyhorn",
        abilities: [
            "lightning-rod",
            "rock-head"
        ],
        base_experience: 135,
        growth_rate: 1,
        catch_rate: 120,
        height: 88,
        moves: [
            { name: "stomp", level_learned_at: 30 },
            { name: "horn-attack", level_learned_at: 1 },
            { name: "fury-attack", level_learned_at: 40 },
            { name: "horn-drill", level_learned_at: 45 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 55 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 35 },
            { name: "leer", level_learned_at: 50 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 80,
            attack: 85,
            defense: 95,
            special: 30,
            speed: 25
        },
        types: [
            "ground",
            "rock"
        ],
        weight: 1150
    },
    {
        id: 112,
        name: "rhydon",
        abilities: [
            "lightning-rod",
            "rock-head"
        ],
        base_experience: 204,
        growth_rate: 1,
        catch_rate: 60,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "stomp", level_learned_at: 1 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "horn-attack", level_learned_at: 1 },
            { name: "fury-attack", level_learned_at: 1 },
            { name: "horn-drill", level_learned_at: 48 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 64 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "leer", level_learned_at: 55 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 105,
            attack: 130,
            defense: 120,
            special: 45,
            speed: 40
        },
        types: [
            "ground",
            "rock"
        ],
        weight: 1200
    },
    {
        id: 113,
        name: "chansey",
        abilities: [
            "natural-cure",
            "serene-grace"
        ],
        base_experience: 255,
        growth_rate: 4,
        catch_rate: 30,
        height: 88,
        moves: [
            { name: "pound", level_learned_at: 1 },
            { name: "double-slap", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 54 },
            { name: "growl", level_learned_at: 30 },
            { name: "sing", level_learned_at: 24 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "minimize", level_learned_at: 38 },
            { name: "defense-curl", level_learned_at: 44 },
            { name: "light-screen", level_learned_at: 48 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "egg-bomb", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "soft-boiled", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 250,
            attack: 5,
            defense: 5,
            special: 105,
            speed: 50
        },
        types: [
            "normal"
        ],
        weight: 346
    },
    {
        id: 114,
        name: "tangela",
        abilities: [
            "chlorophyll",
            "leaf-guard"
        ],
        base_experience: 166,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "bind", level_learned_at: 1 },
            { name: "slam", level_learned_at: 45 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "absorb", level_learned_at: 29 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "growth", level_learned_at: 49 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "poison-powder", level_learned_at: 32 },
            { name: "stun-spore", level_learned_at: 36 },
            { name: "sleep-powder", level_learned_at: 39 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "constrict", level_learned_at: 1 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 55,
            defense: 115,
            special: 100,
            speed: 60
        },
        types: [
            "grass"
        ],
        weight: 350
    },
    {
        id: 115,
        name: "kangaskhan",
        abilities: [
            "early-bird",
            "scrappy"
        ],
        base_experience: 175,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "comet-punch", level_learned_at: 1 },
            { name: "mega-punch", level_learned_at: 36 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 31 },
            { name: "leer", level_learned_at: 41 },
            { name: "bite", level_learned_at: 26 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 1 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "dizzy-punch", level_learned_at: 46 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 105,
            attack: 95,
            defense: 80,
            special: 40,
            speed: 90
        },
        types: [
            "normal"
        ],
        weight: 800
    },
    {
        id: 116,
        name: "horsea",
        abilities: [
            "swift-swim",
            "sniper"
        ],
        base_experience: 83,
        growth_rate: 3,
        catch_rate: 225,
        height: 88,
        moves: [
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 24 },
            { name: "water-gun", level_learned_at: 30 },
            { name: "hydro-pump", level_learned_at: 45 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 37 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "smokescreen", level_learned_at: 19 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "bubble", level_learned_at: 1 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 30,
            attack: 40,
            defense: 70,
            special: 70,
            speed: 60
        },
        types: [
            "water"
        ],
        weight: 80
    },
    {
        id: 117,
        name: "seadra",
        abilities: [
            "poison-point",
            "sniper"
        ],
        base_experience: 155,
        growth_rate: 3,
        catch_rate: 75,
        height: 88,
        moves: [
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 24 },
            { name: "water-gun", level_learned_at: 30 },
            { name: "hydro-pump", level_learned_at: 52 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 41 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "smokescreen", level_learned_at: 1 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "bubble", level_learned_at: 1 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 55,
            attack: 65,
            defense: 95,
            special: 95,
            speed: 85
        },
        types: [
            "water"
        ],
        weight: 250
    },
    {
        id: 118,
        name: "goldeen",
        abilities: [
            "swift-swim",
            "water-veil"
        ],
        base_experience: 111,
        growth_rate: 3,
        catch_rate: 225,
        height: 88,
        moves: [
            { name: "horn-attack", level_learned_at: 24 },
            { name: "fury-attack", level_learned_at: 30 },
            { name: "horn-drill", level_learned_at: 45 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "supersonic", level_learned_at: 19 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "peck", level_learned_at: 1 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 54 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "waterfall", level_learned_at: 37 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 45,
            attack: 67,
            defense: 60,
            special: 50,
            speed: 63
        },
        types: [
            "water"
        ],
        weight: 150
    },
    {
        id: 119,
        name: "seaking",
        abilities: [
            "swift-swim",
            "water-veil"
        ],
        base_experience: 170,
        growth_rate: 3,
        catch_rate: 60,
        height: 88,
        moves: [
            { name: "horn-attack", level_learned_at: 24 },
            { name: "fury-attack", level_learned_at: 30 },
            { name: "horn-drill", level_learned_at: 48 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 1 },
            { name: "supersonic", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "peck", level_learned_at: 1 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 54 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "waterfall", level_learned_at: 39 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 80,
            attack: 92,
            defense: 65,
            special: 80,
            speed: 68
        },
        types: [
            "water"
        ],
        weight: 390
    },
    {
        id: 120,
        name: "staryu",
        abilities: [
            "illuminate",
            "natural-cure"
        ],
        base_experience: 106,
        growth_rate: 1,
        catch_rate: 225,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "water-gun", level_learned_at: 17 },
            { name: "hydro-pump", level_learned_at: 47 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "recover", level_learned_at: 27 },
            { name: "harden", level_learned_at: 22 },
            { name: "minimize", level_learned_at: 37 },
            { name: "light-screen", level_learned_at: 42 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 32 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 30,
            attack: 45,
            defense: 55,
            special: 70,
            speed: 85
        },
        types: [
            "water"
        ],
        weight: 345
    },
    {
        id: 121,
        name: "starmie",
        abilities: [
            "illuminate",
            "natural-cure"
        ],
        base_experience: 207,
        growth_rate: 1,
        catch_rate: 60,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "water-gun", level_learned_at: 1 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 1 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 75,
            defense: 85,
            special: 100,
            speed: 115
        },
        types: [
            "water",
            "psychic"
        ],
        weight: 800
    },
    {
        id: 122,
        name: "mr-mime",
        abilities: [
            "soundproof",
            "filter"
        ],
        base_experience: 136,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "double-slap", level_learned_at: 31 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "confusion", level_learned_at: 1 },
            { name: "psychic", level_learned_at: 0 },
            { name: "meditate", level_learned_at: 39 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "barrier", level_learned_at: 1 },
            { name: "light-screen", level_learned_at: 23 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 47  }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 40,
            attack: 45,
            defense: 65,
            special: 100,
            speed: 90
        },
        types: [
            "psychic"
        ],
        weight: 545
    },
    {
        id: 123,
        name: "scyther",
        abilities: [
            "swarm",
            "technician"
        ],
        base_experience: 187,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "swords-dance", level_learned_at: 35 },
            { name: "cut", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 17 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 42 },
            { name: "quick-attack", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 24 },
            { name: "focus-energy", level_learned_at: 20 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 29 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 70,
            attack: 110,
            defense: 80,
            special: 55,
            speed: 105
        },
        types: [
            "bug",
            "flying"
        ],
        weight: 560
    },
    {
        id: 124,
        name: "jynx",
        abilities: [
            "oblivious",
            "forewarn"
        ],
        base_experience: 137,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "pound", level_learned_at: 1 },
            { name: "double-slap", level_learned_at: 23 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "ice-punch", level_learned_at: 31 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 39 },
            { name: "take-down", level_learned_at: 0 },
            { name: "thrash", level_learned_at: 47 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 58 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "lick", level_learned_at: 18 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "lovely-kiss", level_learned_at: 1 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 50,
            defense: 35,
            special: 95,
            speed: 95
        },
        types: [
            "ice",
            "psychic"
        ],
        weight: 406
    },
    {
        id: 125,
        name: "electabuzz",
        abilities: [
            "static"
        ],
        base_experience: 156,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "thunder-punch", level_learned_at: 42 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunder-shock", level_learned_at: 34 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 54 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "quick-attack", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "screech", level_learned_at: 37 },
            { name: "double-team", level_learned_at: 0 },
            { name: "light-screen", level_learned_at: 49 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 83,
            defense: 57,
            special: 85,
            speed: 105
        },
        types: [
            "electric"
        ],
        weight: 300
    },
    {
        id: 126,
        name: "magmar",
        abilities: [
            "flame-body"
        ],
        base_experience: 167,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "fire-punch", level_learned_at: 43 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 36 },
            { name: "ember", level_learned_at: 1 },
            { name: "flamethrower", level_learned_at: 55 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "smokescreen", level_learned_at: 48 },
            { name: "confuse-ray", level_learned_at: 39 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "smog", level_learned_at: 52 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 95,
            defense: 57,
            special: 85,
            speed: 93
        },
        types: [
            "fire"
        ],
        weight: 445
    },
    {
        id: 127,
        name: "pinsir",
        abilities: [
            "hyper-cutter",
            "mold-breaker"
        ],
        base_experience: 200,
        growth_rate: 1,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "vice-grip", level_learned_at: 1 },
            { name: "guillotine", level_learned_at: 30 },
            { name: "swords-dance", level_learned_at: 54 },
            { name: "cut", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 25 },
            { name: "strength", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 43 },
            { name: "focus-energy", level_learned_at: 36 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 49 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 125,
            defense: 100,
            special: 55,
            speed: 85
        },
        types: [
            "bug"
        ],
        weight: 550
    },
    {
        id: 128,
        name: "tauros",
        abilities: [
            "intimidate",
            "anger-point"
        ],
        base_experience: 211,
        growth_rate: 1,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "stomp", level_learned_at: 21 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 51 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 28 },
            { name: "leer", level_learned_at: 35 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 44 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 75,
            attack: 100,
            defense: 95,
            special: 70,
            speed: 110
        },
        types: [
            "normal"
        ],
        weight: 884
    },
    {
        id: 129,
        name: "magikarp",
        abilities: [
            "swift-swim"
        ],
        base_experience: 20,
        growth_rate: 1,
        catch_rate: 255,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 15 },
            { name: "splash", level_learned_at: 1, move_learn_method: "level-up "}
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 20,
            attack: 10,
            defense: 55,
            special: 20,
            speed: 80
        },
        types: [
            "water"
        ],
        weight: 100
    },
    {
        id: 130,
        name: "gyarados",
        abilities: [
            "intimidate"
        ],
        base_experience: 214,
        growth_rate: 1,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "bite", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "hydro-pump", level_learned_at: 1 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 52 },
            { name: "strength", level_learned_at: 0 },
            { name: "dragon-rage", level_learned_at: 1 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 95,
            attack: 125,
            defense: 79,
            special: 100,
            speed: 81
        },
        types: [
            "water",
            "flying"
        ],
        weight: 2350
    },
    {
        id: 131,
        name: "lapras",
        abilities: [
            "water-absorb",
            "shell-armor"
        ],
        base_experience: 219,
        growth_rate: 1,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "horn-drill", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 25 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "growl", level_learned_at: 1 },
            { name: "sing", level_learned_at: 16 },
            { name: "mist", level_learned_at: 20 },
            { name: "water-gun", level_learned_at: 1 },
            { name: "hydro-pump", level_learned_at: 46 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 38 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "dragon-rage", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "confuse-ray", level_learned_at: 31 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 130,
            attack: 85,
            defense: 80,
            special: 95,
            speed: 60
        },
        types: [
            "water",
            "ice"
        ],
        weight: 2200
    },
    {
        id: 132,
        name: "ditto",
        abilities: [
            "limber"
        ],
        base_experience: 61,
        growth_rate: 3,
        catch_rate: 35,
        height: 88,
        moves: [
            { name: "transform", level_learned_at: 1, move_learn_method: "level-up "}
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 48,
            attack: 48,
            defense: 48,
            special: 48,
            speed: 48
        },
        types: [
            "normal"
        ],
        weight: 40
    },
    {
        id: 133,
        name: "eevee",
        abilities: [
            "run-away",
            "adaptability"
        ],
        base_experience: 92,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "sand-attack", level_learned_at: 1 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 45 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 31 },
            { name: "bite", level_learned_at: 37 },
            { name: "toxic", level_learned_at: 0 },
            { name: "quick-attack", level_learned_at: 27 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 55,
            attack: 55,
            defense: 50,
            special: 65,
            speed: 55
        },
        types: [
            "normal"
        ],
        weight: 65
    },
    {
        id: 134,
        name: "vaporeon",
        abilities: [
            "water-absorb"
        ],
        base_experience: 196,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "sand-attack", level_learned_at: 1 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 37 },
            { name: "bite", level_learned_at: 40 },
            { name: "mist", level_learned_at: 48 },
            { name: "water-gun", level_learned_at: 1 },
            { name: "hydro-pump", level_learned_at: 54 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "quick-attack", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "haze", level_learned_at: 44 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "acid-armor", level_learned_at: 42 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 130,
            attack: 65,
            defense: 60,
            special: 110,
            speed: 65
        },
        types: [
            "water"
        ],
        weight: 290
    },
    {
        id: 135,
        name: "jolteon",
        abilities: [
            "volt-absorb"
        ],
        base_experience: 197,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "double-kick", level_learned_at: 42 },
            { name: "sand-attack", level_learned_at: 1 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 37 },
            { name: "pin-missile", level_learned_at: 48 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "thunder-shock", level_learned_at: 1 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 40 },
            { name: "thunder", level_learned_at: 54 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 44 },
            { name: "quick-attack", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 65,
            defense: 60,
            special: 110,
            speed: 130
        },
        types: [
            "electric"
        ],
        weight: 245
    },
    {
        id: 136,
        name: "flareon",
        abilities: [
            "flash-fire"
        ],
        base_experience: 198,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "sand-attack", level_learned_at: 1 },
            { name: "tackle", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "tail-whip", level_learned_at: 37 },
            { name: "leer", level_learned_at: 42 },
            { name: "bite", level_learned_at: 40 },
            { name: "ember", level_learned_at: 1 },
            { name: "flamethrower", level_learned_at: 54 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "fire-spin", level_learned_at: 44 },
            { name: "toxic", level_learned_at: 0 },
            { name: "quick-attack", level_learned_at: 1 },
            { name: "rage", level_learned_at: 48 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 130,
            defense: 60,
            special: 110,
            speed: 65
        },
        types: [
            "fire"
        ],
        weight: 250
    },
    {
        id: 137,
        name: "porygon",
        abilities: [
            "trace",
            "download"
        ],
        base_experience: 130,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "tackle", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "psybeam", level_learned_at: 23 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 35 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "recover", level_learned_at: 28 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "sharpen", level_learned_at: 1 },
            { name: "conversion", level_learned_at: 1 },
            { name: "tri-attack", level_learned_at: 42 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 65,
            attack: 60,
            defense: 70,
            special: 75,
            speed: 40
        },
        types: [
            "normal"
        ],
        weight: 365
    },
    {
        id: 138,
        name: "omanyte",
        abilities: [
            "swift-swim",
            "shell-armor"
        ],
        base_experience: 120,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "horn-attack", level_learned_at: 34 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 39 },
            { name: "water-gun", level_learned_at: 1 },
            { name: "hydro-pump", level_learned_at: 53 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "withdraw", level_learned_at: 1 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "spike-cannon", level_learned_at: 46 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 35,
            attack: 40,
            defense: 100,
            special: 90,
            speed: 35
        },
        types: [
            "rock",
            "water"
        ],
        weight: 75
    },
    {
        id: 139,
        name: "omastar",
        abilities: [
            "swift-swim",
            "shell-armor"
        ],
        base_experience: 199,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "horn-attack", level_learned_at: 1 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 39 },
            { name: "water-gun", level_learned_at: 1 },
            { name: "hydro-pump", level_learned_at: 49 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "withdraw", level_learned_at: 1 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "spike-cannon", level_learned_at: 44 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 70,
            attack: 60,
            defense: 125,
            special: 115,
            speed: 55
        },
        types: [
            "rock",
            "water"
        ],
        weight: 350
    },
    {
        id: 140,
        name: "kabuto",
        abilities: [
            "swift-swim",
            "battle-armor"
        ],
        base_experience: 119,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "scratch", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 44 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "hydro-pump", level_learned_at: 49 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "absorb", level_learned_at: 34 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 1 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 39 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 30,
            attack: 80,
            defense: 90,
            special: 45,
            speed: 55
        },
        types: [
            "rock",
            "water"
        ],
        weight: 115
    },
    {
        id: 141,
        name: "kabutops",
        abilities: [
            "swift-swim",
            "battle-armor"
        ],
        base_experience: 201,
        growth_rate: 3,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "scratch", level_learned_at: 1 },
            { name: "razor-wind", level_learned_at: 0 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 46 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "hydro-pump", level_learned_at: 53 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "absorb", level_learned_at: 1 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 1 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "slash", level_learned_at: 39 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 60,
            attack: 115,
            defense: 105,
            special: 70,
            speed: 80
        },
        types: [
            "rock",
            "water"
        ],
        weight: 405
    },
    {
        id: 142,
        name: "aerodactyl",
        abilities: [
            "rock-head",
            "pressure"
        ],
        base_experience: 202,
        growth_rate: 1,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "razor-wind", level_learned_at: 0 },
            { name: "wing-attack", level_learned_at: 1 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 45 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "bite", level_learned_at: 38 },
            { name: "supersonic", level_learned_at: 33 },
            { name: "hyper-beam", level_learned_at: 54 },
            { name: "dragon-rage", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 80,
            attack: 105,
            defense: 65,
            special: 60,
            speed: 130
        },
        types: [
            "rock",
            "flying"
        ],
        weight: 590
    },
    {
        id: 143,
        name: "snorlax",
        abilities: [
            "immunity",
            "thick-fat"
        ],
        base_experience: 154,
        growth_rate: 1,
        catch_rate: 25,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "headbutt", level_learned_at: 1 },
            { name: "body-slam", level_learned_at: 35 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 48 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 56 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "harden", level_learned_at: 41 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "amnesia", level_learned_at: 1 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 1 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 160,
            attack: 110,
            defense: 65,
            special: 65,
            speed: 30
        },
        types: [
            "normal"
        ],
        weight: 4600
    },
    {
        id: 144,
        name: "articuno",
        abilities: [
            "pressure"
        ],
        base_experience: 215,
        growth_rate: 1,
        catch_rate: 3,
        height: 88,
        moves: [
            { name: "razor-wind", level_learned_at: 0 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "mist", level_learned_at: 60 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 1 },
            { name: "blizzard", level_learned_at: 51 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "peck", level_learned_at: 1 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 55 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 90,
            attack: 85,
            defense: 100,
            special: 125,
            speed: 85
        },
        types: [
            "ice",
            "flying"
        ],
        weight: 554
    },
    {
        id: 145,
        name: "zapdos",
        abilities: [
            "pressure"
        ],
        base_experience: 216,
        growth_rate: 1,
        catch_rate: 3,
        height: 88,
        moves: [
            { name: "razor-wind", level_learned_at: 0 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "drill-peck", level_learned_at: 1 },
            { name: "thunder-shock", level_learned_at: 1 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 51 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 55 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "light-screen", level_learned_at: 60 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 90,
            attack: 90,
            defense: 85,
            special: 125,
            speed: 100
        },
        types: [
            "electric",
            "flying"
        ],
        weight: 526
    },
    {
        id: 146,
        name: "moltres",
        abilities: [
            "pressure"
        ],
        base_experience: 217,
        growth_rate: 1,
        catch_rate: 3,
        height: 88,
        moves: [
            { name: "razor-wind", level_learned_at: 0 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 51 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "peck", level_learned_at: 1 },
            { name: "fire-spin", level_learned_at: 1 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 55 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 60 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 90,
            attack: 100,
            defense: 90,
            special: 125,
            speed: 90
        },
        types: [
            "fire",
            "flying"
        ],
        weight: 600
    },
    {
        id: 147,
        name: "dratini",
        abilities: [
            "shed-skin"
        ],
        base_experience: 67,
        growth_rate: 1,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "slam", level_learned_at: 30 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "wrap", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 50 },
            { name: "dragon-rage", level_learned_at: 40 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 10 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 20 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 41,
            attack: 64,
            defense: 45,
            special: 50,
            speed: 50
        },
        types: [
            "dragon"
        ],
        weight: 33
    },
    {
        id: 148,
        name: "dragonair",
        abilities: [
            "shed-skin"
        ],
        base_experience: 144,
        growth_rate: 1,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "slam", level_learned_at: 35 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "wrap", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 55 },
            { name: "dragon-rage", level_learned_at: 45 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 1 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 20 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 61,
            attack: 84,
            defense: 65,
            special: 70,
            speed: 70
        },
        types: [
            "dragon"
        ],
        weight: 165
    },
    {
        id: 149,
        name: "dragonite",
        abilities: [
            "inner-focus"
        ],
        base_experience: 218,
        growth_rate: 1,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "razor-wind", level_learned_at: 0 },
            { name: "slam", level_learned_at: 35 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "wrap", level_learned_at: 1 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "leer", level_learned_at: 1 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 60 },
            { name: "strength", level_learned_at: 0 },
            { name: "dragon-rage", level_learned_at: 45 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 1 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "agility", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 91,
            attack: 134,
            defense: 95,
            special: 100,
            speed: 80
        },
        types: [
            "dragon",
            "flying"
        ],
        weight: 2100
    },
    {
        id: 150,
        name: "mewtwo",
        abilities: [
            "pressure"
        ],
        base_experience: 220,
        growth_rate: 1,
        catch_rate: 3,
        height: 88,
        moves: [
            { name: "mega-punch", level_learned_at: 0 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "disable", level_learned_at: 1 },
            { name: "mist", level_learned_at: 75 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "confusion", level_learned_at: 1 },
            { name: "psychic", level_learned_at: 1 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "recover", level_learned_at: 70 },
            { name: "barrier", level_learned_at: 63 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "metronome", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 1 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "amnesia", level_learned_at: 81 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 106,
            attack: 110,
            defense: 90,
            special: 154,
            speed: 130
        },
        types: [
            "psychic"
        ],
        weight: 1220
    },
    {
        id: 151,
        name: "mew",
        abilities: [
            "synchronize"
        ],
        base_experience: 64,
        growth_rate: 2,
        catch_rate: 45,
        height: 88,
        moves: [
            { name: "pound", level_learned_at: 1 },
            { name: "transform", level_learned_at: 10 },
            { name: "mega-punch", level_learned_at: 20 },
            { name: "metronome", level_learned_at: 30 },
            { name: "psychic", level_learned_at: 40 },
            { name: "pay-day", level_learned_at: 0 },
            { name: "razor-wind", level_learned_at: 0 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "cut", level_learned_at: 0 },
            { name: "whirlwind", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "horn-drill", level_learned_at: 0 },
            { name: "body-slam", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "water-gun", level_learned_at: 0 },
            { name: "surf", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "hyper-beam", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "counter", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "strength", level_learned_at: 0 },
            { name: "mega-drain", level_learned_at: 0 },
            { name: "solar-beam", level_learned_at: 0 },
            { name: "dragon-rage", level_learned_at: 0 },
            { name: "thunderbolt", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "dig", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "mimic", level_learned_at: 0 },
            { name: "double-team", level_learned_at: 0 },
            { name: "reflect", level_learned_at: 0 },
            { name: "bide", level_learned_at: 0 },
            { name: "self-destruct", level_learned_at: 0 },
            { name: "egg-bomb", level_learned_at: 0 },
            { name: "fire-blast", level_learned_at: 0 },
            { name: "swift", level_learned_at: 0 },
            { name: "skull-bash", level_learned_at: 0 },
            { name: "soft-boiled", level_learned_at: 0 },
            { name: "dream-eater", level_learned_at: 0 },
            { name: "sky-attack", level_learned_at: 0 },
            { name: "flash", level_learned_at: 0 },
            { name: "psywave", level_learned_at: 0 },
            { name: "explosion", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "rock-slide", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0  }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 100,
            attack: 100,
            defense: 100,
            special: 100,
            speed: 100
        },
        types: [
            "psychic"
        ],
        weight: 40
    },
    {
        id: 152,
        name: "MissingNo.",
        abilities: [
            "glitched"
        ],
        base_experience: 77,
        growth_rate: 2,
        catch_rate: 45,
        height: 10,
        moves: [
            { name: "water-gun", level_learned_at: 1 },
            { name: "sky-attack", level_learned_at: 10 },
            { name: "mega-punch", level_learned_at: 0 },
            { name: "razor-wind", level_learned_at: 0 },
            { name: "swords-dance", level_learned_at: 0 },
            { name: "mega-kick", level_learned_at: 0 },
            { name: "toxic", level_learned_at: 0 },
            { name: "take-down", level_learned_at: 0 },
            { name: "double-edge", level_learned_at: 0 },
            { name: "bubble-beam", level_learned_at: 0 },
            { name: "ice-beam", level_learned_at: 0 },
            { name: "blizzard", level_learned_at: 0 },
            { name: "submission", level_learned_at: 0 },
            { name: "seismic-toss", level_learned_at: 0 },
            { name: "rage", level_learned_at: 0 },
            { name: "thunder", level_learned_at: 0 },
            { name: "earthquake", level_learned_at: 0 },
            { name: "fissure", level_learned_at: 0 },
            { name: "psychic", level_learned_at: 0 },
            { name: "teleport", level_learned_at: 0 },
            { name: "rest", level_learned_at: 0 },
            { name: "thunder-wave", level_learned_at: 0 },
            { name: "tri-attack", level_learned_at: 0 },
            { name: "substitute", level_learned_at: 0  },
            { name: "cut", level_learned_at: 0 },
            { name: "fly", level_learned_at: 0 }
        ],
        sprites: {
            defaultSprite: {
                height: 100,
                width: 100,
                x: 0,
                y: 0
            }
        },
        stats: {
            hp: 33,
            attack: 136,
            defense: 1,
            special: 6,
            speed: 29
        },
        types: [
            "flying",
            "normal"
        ],
        weight: 1
    }
]