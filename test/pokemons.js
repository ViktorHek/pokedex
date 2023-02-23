
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
      stats: {
        hp: 95,
        attack: 75,
        defense: 110,
        special: 80,
        speed: 30,
      },
      types: ["water", "psychic"],
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
      },
      {
        id: 94,
        name: "psychic",
        accuracy: 100,
        power: 90,
        type: "psychic",
      },
      {
        id: 148,
        name: "flash",
        accuracy: 100,
        power: null,
        type: "normal",
      },
      {
        id: 34,
        name: "body-slam",
        accuracy: 100,
        power: 85,
        type: "normal",
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
    changedStats: [],
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
      },
      {
        id: 103,
        name: "screech",
        accuracy: 85,
        power: null,
        type: "normal",
      },
      {
        id: 14,
        name: "swords-dance",
        accuracy: null,
        power: null,
        type: "normal",
      },
      {
        id: 42,
        name: "pin-missile",
        accuracy: 95,
        power: 25,
        type: "bug",
      },
    ],
    changedStats: [],
    uid: "04030jenny@@@@@0a021003411103100501004910"
  },
];

const pokemons = {
  pokemonObjArr,
  pokemonObjString
}

module.exports = pokemons