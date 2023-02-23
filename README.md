

# Read me


## changes from OG game
* the plan is to not have regular IV or EV to save storage space
    - Insted have a vslue between 1-5 where 1 = worst IV and 5 = perfect IV
    - EV will start at 0, after defeeting (maybe) 10 pokemon it will increes by 1. Where 1 EV = 100 EV point on ALL stats. 
* things like EV progression and EXP progression will resett when closing. aka, if you level up or EV up and save, it will be saved. But if you deffeat 9 pokemons without level/EV up and save, you have to deffeat 9 pokemons again to have the same progression. 
* Evasion is changed from +1 meaning hier evasion to -1 meaning hier evasion. This only effect the moves 'dubble-team' and 'minemize'. This is cuz I want to handle all the stats the same. 


## Move DataBase Array
- if a move have priority, hier crit_rate, drain, flinch_chance, healing, multible hits


### StatChage 

accuracy
-6: 25/100 = 0.25
-5: 28/100 = 0.28
-4: 33/100 = 0.33
-3: 40/100 = 0.4
-2: 50/100 = 0.5
-1: 66/100 = 0.66
0: 100/100 = 1
+1: 150/100 = 1.5 
+2: 200/100 = 2
+3: 250/100 = 2.5
+4: 300/100 = 3
+5: 350/100 = 3.5
+6: 400/100 = 4

evasion
-6: 25/100
-5: 28/100
-4: 33/100
-3: 40/100
-2: 50/100
-1: 66/100
0: 100/100
+1: 150/100
+2: 200/100
+3: 250/100
+4: 300/100
+5: 350/100
+6: 400/100

max EV = 65535

vitamins add 2560 to one stat's EV, but cannot raise a stat above 25600


### Big - Pokemons
* 3N -- pokemon id -- an Id corresponding to a pokemon in the DB <3>
* 1L -- nature -- there are 25 natures and 26 letters <1>
* 2 * 5 = 10N -- IV -- two numbers representing IV for each stat. Max IV = 15. Order: HP, attack, defense, speed, special <10>
* 0-10C -- nickname -- a nickname to the pokemon provided by the user. If no name is provided use '*' and default back to the mons name <1-10>
- Main ID -- Pokemon Id, nature, IVs & name are represented as one string, example '095j1515151515bob' <15-24>

* 2N -- level -- represent the level of the pokemon where 00 = 100 <2>
* 1B -- ability -- pokemons ability where 0 = first ability and 1 = second ability <1>
* 3N -- HP -- number representing remaning hp <1-3>
* 1C -- status -- if 0 the pokemon is fine. paralyze = 1, sleep = 2, confused = 3, poison = 4, badly poison = 5 <1>

* [ -- array start
* 5 * 5 = 25N -- EV -- 5 numbers representing EV for each stat. Default is 0 on all stats. Max EV = 65535 Order: HP, attack, defense, speed, special <5-25>
* [ -- array stop

* [ -- array start
* 3N 2N * 4 -- moves -- first 3 numbers are move id. secod 2 numbers are the amount of PP. 4 times <20>
* [ -- array stop

* x(1-6) -- multiplied by numbers of pokemons in party --  max amout of pokemons = 6. 
- Characters count (one pokemon) - id: 15-24, level-ability-hp: 5-7, ev: 5-25, moves: 20, seperators: 20 = 65-96 
- Characters count full party - min: 65 * 6 + 5 = 395, max: 96 * 6 + 582

Total max = 395-582

Onix = [ '095j1515151515bob', 50, 1, 50, 0, [ 13370, 13370, 13370, 13370, 13370 ] , [ 10310, 02010, 09210, 10410 ] ]

Testing Team = [
    ['028d0101010101first', 50, 0, 50, 0, [0,0,0,0,0], [89,10,14,10,28,10,129,10]],
    ['028d1515151515second', 50, 0, 50, 0, [65535,65535,65535,65535,65535], [89,10,14,10,28,10,129,10]],
    ['094p0707070707*', 50, 0, 50, 0, [10000,10000,10000,10000,10000], [109,10,95,10,92,10,94,10]],
    ['095j1515151515bob', 50, 1, 50, 0, [0,0,65535,0,0] , [103,10,20,10,89,10,104,10]],
    ['150p0707070707*', 50, 0, 50, 0, [65535,65535,65535,65535,65535], [94,10,112,10,59,10,54,10]],
    ['141d0707070707*', 50, 0, 50, 0, [65535,65535,65535,65535,65535], [57,10,34,10,36,10,69,10]]
]

testing team text:
- Sandslach - earthquake, swords-dance, sand-attack, swift - min stats
- Sandslach - earthquake, swords-dance, sand-attack, swift - max stats
- Gengar - confuse-ray, hypnosis, toxic, psychic - status setter
- Onix - screech, bind, earthquake, double-team - def build
- Mewtow - psychic, barrier, blizzard, mist
- Kabutops - surf, body-slam, take-down, seismic-toss


080 40 viktor@@@@ 0 s 15 35 02605 09405 00305 00405

[080, 40, 1, s, 143, 'viktor', 15, 35, 02635 09435 00335 00435]

const test = [080, 40, 1, 's', 143, 'viktor', 15, 35000, 02635, 09435, 00335, 00435]
const test2 = '[80,40,1,"s",143,"Polo",15,35000,1437,9435,221,285]'

const test = [[080, 40, 1, 's', 143, 'viktor', 15, [35000, 35000, 35000, 35000, 35000], 26, 35, 94, 35, 3, 35, 4, 35]]
const test2 = '[[80,40,1,"s",143,"viktor",15,[35000,35000,35000,35000,35000],26,35,94,35,3,35,4,35]]'

