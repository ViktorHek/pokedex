module.exports = {
  isTesting: false,
  specificTest: [], // fill with names of the test you want to do
  setCrit: 0, // 0 = crit is random. 1 = crit always of. 2 = crit always on
  setRandomBattleValue: false, // if true, the random value in battle will always be 1
  alwaysHit: false, // every move from user and opponent always hitts
  alwaysHitSecondaryEffect: false // every secondary from user and opponent always hitts if the move hitts
};
