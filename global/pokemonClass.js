"use strict";
const pokemonDB = require('../dataBase/pokemons.js')
const movesDB = require('../dataBase/AllMovesArr')
// [080, 40, 1, 's', 143, 'viktor', [15, 15, 15, 15, 15, 35000, 35000, 35000, 35000, 35000], [26, 35, 94, 35, 3, 35, 4, 35]]

module.exports = class Pokemon {
  constructor(variables) {
    this.db = getDb()
    this.id = variables[0];
    this.level = variables[1];
    this.ability = getAbility(variables[2]);
    this.currentHp = variables[4];
    this.name = variables[5];
    this.iv = getIv(variables[6]);
    this.ev = getEv(variables[6]);
    this.moves = getMoves(variables[7]);
  }
  // get stats() {
  //   return null;
  // }
  getDb() {
    return pokemonDB.forEach(mon => {
      if(mon.id === this.id) return mon
    });
  }
  getMove(id) {
    if(id === 0) return null
    return movesDB.forEach(move => {
      if(move.id === id) return move
    });
  }
  getIv(iv) {
    let obj = {
      hp: iv[0],
      attack: iv[1],
      defense: iv[2],
      special: iv[3],
      speed: iv[4]
    }
    return obj
  }
  getEv(ev) {
    let obj = {
      hp: ev[0],
      attack: ev[1],
      defense: ev[2],
      special: ev[3],
      speed: ev[4]
    }
    return obj
  }
  getAbility(num) {
    let pokemonDb = this.getDb()
    return pokemonDb.abilities[num]
  }
  getMoves(arr) {
    let arr = [
      {name: this.getMove(arr[0]).name, pp: arr[1], db: this.getMove(arr[0])},
      {name: this.getMove(arr[2]).name, pp: arr[3], db: this.getMove(arr[2])},
      {name: this.getMove(arr[4]).name, pp: arr[5], db: this.getMove(arr[4])},
      {name: this.getMove(arr[6]).name, pp: arr[7], db: this.getMove(arr[6])},
    ]
  }

};
