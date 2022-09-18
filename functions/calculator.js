module.exports = function(pokiObj) {
    let calculatedStats = {
        hp: calculatingHp(pokiObj),
        attack: calculatingNonHpStats(pokiObj.dbData.stats.attack, pokiObj),
        defense: calculatingNonHpStats(pokiObj.dbData.stats.defense, pokiObj),
        special: calculatingNonHpStats(pokiObj.dbData.stats.special, pokiObj),
        speed: calculatingNonHpStats(pokiObj.dbData.stats.speed, pokiObj)
    }
    return calculatedStats
}

function calculatingHp(pokiObj) {
    const { iv, ev, level } = pokiObj
    let baseHpAndIv = pokiObj.dbData.stats.hp + iv
    let realEv = ev * 100
    let rootEv = Math.sqrt(realEv) / 4
    let mainCalc = ((((baseHpAndIv * 2) + rootEv) * level) / 100) + level + 10
    return Math.floor(mainCalc)
}

function calculatingNonHpStats(baseStat, pokiObj) {
    const { iv, ev, level } = pokiObj
    let baseStatAndIv = baseStat + iv
    let realEv = ev * 100
    let rootEv = Math.sqrt(realEv) / 4
    let mainCalc = ((((baseStatAndIv * 2) + rootEv) * level) / 100) + 5
    return Math.floor(mainCalc)
}