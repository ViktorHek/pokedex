const dbTypes = require('../dataBase/types')

// statsCalc start
const getPokemonStats = function getPokemonStats(pokiObj) {
    console.log('pokiObj: ',pokiObj)
    let calculatedStats = {
        hp: calculatingHp(pokiObj),
        attack: calculatingNonHpStats(pokiObj.dbData.stats.attack, pokiObj.ev.attack, pokiObj),
        defense: calculatingNonHpStats(pokiObj.dbData.stats.defense, pokiObj.ev.defense, pokiObj),
        special: calculatingNonHpStats(pokiObj.dbData.stats.special, pokiObj.ev.special, pokiObj),
        speed: calculatingNonHpStats(pokiObj.dbData.stats.speed, pokiObj.ev.speed, pokiObj)
    }
    return calculatedStats
}
function calculatingHp(pokiObj) {
    const { iv, ev, level } = pokiObj
    let baseHpAndIv = pokiObj.dbData.stats.hp + iv
    let rootEv = Math.sqrt(ev.hp) / 4
    let mainCalc = ((((baseHpAndIv * 2) + rootEv) * level) / 100) + level + 10
    return Math.floor(mainCalc)
}
function calculatingNonHpStats(baseStat, evStat, pokiObj) {
    const { iv, level } = pokiObj
    let baseStatAndIv = baseStat + iv
    let rootEv = Math.sqrt(evStat) / 4
    let mainCalc = ((((baseStatAndIv * 2) + rootEv) * level) / 100) + 5
    return Math.floor(mainCalc)
}
// statsCalc stop

// stats types level

// damageCalc start
const damageCalc = function damageCalc(attackingPokemon, defendingPokemon, move) {
    // damage = ((((2 * level * critical) / 5 + 2) * (power * (attack / deffence))) / 50 + 2) * stab * type1 * type2 * random
    const returnValue = {damage: 0, status: {}, message: ''}
    let isHitting = getAccuracyCalc(attackingPokemon, defendingPokemon, move)
    if(!isHitting) {
        returnValue.message = 'attack is missing'
        return returnValue
    };
    let statChange = getStatChage(move)

    if(move.meta.damage_class === 'physical' || move.meta.damage_class === 'special') {
        var attackDamageCalc = getAttackDamageCalc()
        returnValue.damage = attackDamageCalc
    }

    return returnValue
}

function getAttackDamageCalc(attackingPokemon, defendingPokemon, move) {
    let isCrit = calculateIfCrit(attackingPokemon)     // is crit = 2, is not crit = 1
    let AD = getattackDefenseDifferance(attackingPokemon, defendingPokemon, isCrit, move)
    let STAB = getStab(attackingPokemon, move)
    let typingCalc = getTypingCalc(move, defendingPokemon)
    let random = getRandomDamage(attackingPokemon, defendingPokemon, move)
    let firstCalc = 2 * attackingPokemon.level * isCrit
    let secondCalc = (firstCalc / 5) + 2
    let thirdCalc = secondCalc * move.power * AD
    let fourthCalc = thirdCalc / 50 + 2
    let fifthCalc = fourthCalc * STAB * typingCalc * random

    console.log('damage crit and random: ', isCrit, random)
    returnValue.damage = Math.floor(fifthCalc)
    if(Math.floor(fifthCalc) < 1) {
        return 1
    } else {
        return Math.floor(fifthCalc)
    }
}

function getAccuracyCalc(attackingPokemon, defendingPokemon, move) {
    const accuracy = attackingPokemon.statChange.accuracy
    const evasion = defendingPokemon.statChange.evasion
    let accuracyVal = 1
    let evasionVal = 1
    let moveAccuracy = move.accuracy / 100 // 0 - 1
    let random = generateRandomNumber(1, 255)

    if (accuracy) {
        accuracyVal = statChangeEffectPercent(accuracy)
    }
    if (evasion) {
        evasionVal = statChangeEffectPercent(evasion)
    }
    let chance = moveAccuracy * 255 * accuracyVal * evasionVal
    if(random < chance) {
        return true
    } else {
        return false
    }
}

function getStatChage(move) {
    return 'none'
}

function getRandomDamage() {
    let randomNumber = generateRandomNumber(217, 255)
    return randomNumber / 255
}

function getTypingCalc(move, defendingPokemon) {
    let firstTyping = calcTyping(move.type, defendingPokemon.dbData.types[0])
    let secondTyping = 1
    if(defendingPokemon.dbData.types[1]) {
        secondTyping = calcTyping(move.type, defendingPokemon.dbData.types[1])
    }
    return firstTyping * secondTyping
}

function calcTyping(moveType, targetType) {
    let moveTypeObj = {}
    dbTypes.forEach((el) => {
        if (el.name === moveType) {
            moveTypeObj = el;
        };
    });
    if (moveTypeObj.superEffective.includes(targetType)) {
        return 2;
    } else if (moveTypeObj.notEffective.includes(targetType)) {
        return 0.5;
    } else {
        return 1;
    };
};


const generateRandomNumber = function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function calculateIfCrit(pokemon) {
    let critRate = generateRandomNumber(0, 255)
    if (pokemon.stats.speed / 2 > critRate) {
        return 2
    } else {
        return 1
    }
}

function getStab(attackingPokemon, move) {
    if (attackingPokemon.dbData.types.includes(move.type)) {
        return 1.5
    } else {
        return 1
    }
}

function getattackDefenseDifferance(attackingPokemon, defendingPokemon, isCrit, move) {
    const attack = attackingPokemon.stats.attack
    const defense = defendingPokemon.stats.defense
    const attackingSpecial = attackingPokemon.stats.special
    const defendingSpecial = defendingPokemon.stats.special
    const attackAfterStatChange = attack * statChangeEffectPercent(attackingPokemon.statChange.attack)
    const defenceAfterStatChange = attack * statChangeEffectPercent(defendingPokemon.statChange.defense)
    const attackingSpecailAfterStatChange = attackingSpecial * statChangeEffectPercent(attackingPokemon.statChange.special)
    const defendingSpecialAfterStatChange = defendingSpecial * statChangeEffectPercent(defendingPokemon.statChange.special)
    const moveDamgageClass = move.meta.damage_class
    const badgeBoost = 1
    // add function to check for bageBoost

    if (isCrit) {
        if (moveDamgageClass === 'physical') {
            return attack / defense
        } else {
            return attackingSpecial / defendingSpecial
        }
    } else {
        if (moveDamgageClass === 'physical') {
            return attackAfterStatChange / defenceAfterStatChange
        } else {
            return attackingSpecailAfterStatChange / defendingSpecialAfterStatChange
        }
    }
}

function statChangeEffectPercent(statChange) {
    switch (statChange) {
        case -6:
            return 0.25
        case -5:
            return 0.28
        case -4:
            return 0.33
        case -3:
            return 0.40
        case -2:
            return 0.50
        case -1:
            return 0.66
        case 0:
            return 1
        case 1:
            return 1.5
        case 2:
            return 1.2
        case 3:
            return 2
        case 4:
            return 3
        case 5:
            return 3.5
        case 6:
            return 4
        default:
            console.log('no switch match in statChangeEffectPercent()', statChange)
            return 1
    }
}




const calculator = {
    getPokemonStats,
    damageCalc,
    generateRandomNumber
}

module.exports = calculator;