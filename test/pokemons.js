
// object 1 = "08040viktor@@@@0s153502605094050030500405"
// object 2 = "04030jenny@@@@@0a021003411103100501004910"

const pokemonObjString = '[[80, 40, 1, "s", 143, "viktor", [15, 15, 15, 15, 15], [35000, 35000, 35000, 35000, 35000], 133, 35, 94, 35, 34, 35, 86, 35]]'
const pokemonObjArr = [
  {
    abilitie: 0,
    dbData: {
      id: 80,
      name: "slowbro",
      abilities: ["oblivious", "own-tempo"],
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
        { name: "substitute", level_learned_at: 0 },
      ],
      sprites: {
        defaultSprite: {
          height: 100,
          width: 100,
          x: 0,
          y: 0,
        },
      },
      stats: {
        hp: 95,
        attack: 75,
        defense: 110,
        special: 80,
        speed: 30,
      },
      types: ["water", "psychic"],
      weight: 785,
    },
    ev: 35,
    id: 80,
    iv: 15,
    level: 40,
    moves: [
      {
        id: 133,
        name: "amnesia",
        accuracy: null,
        power: null,
        type: "psychic",
        meta: {
          damage_class: "status",
          effect_chance: null,
          effect_entries: "Raises the user's Special Defense by two stages.",
          priority: null,
          crit_rate: null,
          drain: null,
          flinch_chance: null,
          healing: null,
          max_hits: null,
          max_turns: null,
          mix_hits: null,
          mix_turns: null,
          stat_change: null,
          stat_change: [{ change: 2, stat: "special" }],
          target: "user",
          index: 4,
        },
      },
      {
        id: 94,
        name: "psychic",
        accuracy: 100,
        power: 90,
        type: "psychic",
        meta: {
          damage_class: "special",
          effect_chance: 10,
          effect_entries:
            "Inflicts regular damage. Has a $effect_chance% chance to lower the target's Special Defense by one stage.",
          priority: null,
          crit_rate: null,
          drain: null,
          flinch_chance: null,
          healing: null,
          max_hits: null,
          max_turns: null,
          mix_hits: null,
          mix_turns: null,
          stat_change: null,
          stat_change: [{ change: -1, stat: "special" }],
          target: "opponent",
          index: 97,
        },
      },
      {
        id: 148,
        name: "flash",
        accuracy: 100,
        power: null,
        type: "normal",
        meta: {
          damage_class: "status",
          effect_chance: null,
          effect_entries: "Lowers the target's accuracy by one stage.",
          priority: null,
          crit_rate: null,
          drain: null,
          flinch_chance: null,
          healing: null,
          max_hits: null,
          max_turns: null,
          mix_hits: null,
          mix_turns: null,
          stat_change: null,
          stat_change: [{ change: -1, stat: "accuracy" }],
          target: "opponent",
          index: 46,
        },
      },
      {
        id: 34,
        name: "body-slam",
        accuracy: 100,
        power: 85,
        type: "normal",
        meta: {
          damage_class: "physical",
          effect_chance: 30,
          effect_entries:
            "Inflicts regular damage. Has a $effect_chance% chance to paralyze the target.",
          priority: null,
          crit_rate: null,
          drain: null,
          flinch_chance: null,
          healing: null,
          max_hits: null,
          max_turns: null,
          mix_hits: null,
          mix_turns: null,
          stat_change: null,
          stat_change: [],
          target: "opponent",
          index: 12,
        },
      }
    ],
    name: "viktor",
    nature: {
      decreasedStat: "speed",
      identifyer: "s",
      increasedStat: "special",
      name: "sassy",
    },
    stats: {
      attack: 82,
      defense: 110,
      hp: 143,
      special: 86,
      speed: 46,
    },
    battleStats: {},
    uid: "08040viktor@@@@0s153502605094050030500405",
  },
  {
    abilitie: 0,
    id: 40,
    name: "wigglytuff",
    ev: 10,
    iv: 2,
    level: 30,
    name: "jenny",
    nature: {
      decreasedStat: "special",
      identifyer: "a",
      increasedStat: "attack",
      name: "adamant",
    },
    stats: {
      attack: 50,
      defense: 35,
      hp: 127,
      special: 38,
      speed: 35,
    },
    dbData: {
      id: 40,
      name: "wigglytuff",
      abilities: ["cute-charm", "competitive"],
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
        { name: "substitute", level_learned_at: 0 },
      ],
      sprites: {
        defaultSprite: {
          height: 100,
          width: 100,
          x: 0,
          y: 0,
        },
      },
      stats: {
        hp: 140,
        attack: 70,
        defense: 45,
        special: 50,
        speed: 45,
      },
      types: ["normal"],
      weight: 120,
    },
    moves: [
      {
        id: 34,
        name: "body-slam",
        accuracy: 100,
        power: 85,
        type: "normal",
        meta: {
          damage_class: "physical",
          effect_chance: 30,
          effect_entries:
            "Inflicts regular damage. Has a $effect_chance% chance to paralyze the target.",
          priority: null,
          crit_rate: null,
          drain: null,
          flinch_chance: null,
          healing: null,
          max_hits: null,
          max_turns: null,
          mix_hits: null,
          mix_turns: null,
          stat_change: null,
          stat_change: [],
          target: "opponent",
          index: 12,
        }
      },
      {
        id: 103,
        name: "screech",
        accuracy: 85,
        power: null,
        type: "normal",
        meta: {
          damage_class: "status",
          effect_chance: null,
          effect_entries: "Lowers the target's Defense by two stages.",
          priority: null,
          crit_rate: null,
          drain: null,
          flinch_chance: null,
          healing: null,
          max_hits: null,
          max_turns: null,
          mix_hits: null,
          mix_turns: null,
          stat_change: null,
          stat_change: [{ change: -2, stat: "defense" }],
          target: "opponent",
          index: 112,
        },
      },
      {
        id: 14,
        name: "swords-dance",
        accuracy: null,
        power: null,
        type: "normal",
        meta: {
          damage_class: "status",
          effect_chance: null,
          effect_entries: "Raises the user's Attack by two stages.",
          priority: null,
          crit_rate: null,
          drain: null,
          flinch_chance: null,
          healing: null,
          max_hits: null,
          max_turns: null,
          mix_hits: null,
          mix_turns: null,
          stat_change: null,
          stat_change: [{ change: 2, stat: "attack" }],
          target: "user",
          index: 142,
        },
      },
      {
        id: 42,
        name: "pin-missile",
        accuracy: 95,
        power: 25,
        type: "bug",
        meta: {
          damage_class: "physical",
          effect_chance: null,
          effect_entries:
            "Inflicts regular damage. Hits 2–5 times in one turn. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times. Averages to 3 hits per use.",
          priority: null,
          crit_rate: null,
          drain: null,
          flinch_chance: null,
          healing: null,
          max_hits: 5,
          max_turns: 5,
          mix_hits: null,
          mix_turns: null,
          stat_change: null,
          stat_change: [],
          target: "opponent",
          index: 91,
        },
      },
    ],
    uid: "04030jenny@@@@@0a021003411103100501004910"
  },
];

const pokemons = {
  pokemonObjArr,
  pokemonObjString
}

module.exports = pokemons