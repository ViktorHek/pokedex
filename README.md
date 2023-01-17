

# Read me


## changes from OG game
* the plan is to not have regular IV or EV to save storage space
    - Insted have a vslue between 1-5 where 1 = worst IV and 5 = perfect IV
    - EV will start at 0, after defeeting (maybe) 10 pokemon it will increes by 1. Where 1 EV = 100 EV point on ALL stats. 
* things like EV progression and EXP progression will resett when closing. aka, if you level up or EV up and save, it will be saved. But if you deffeat 9 pokemons without level/EV up and save, you have to deffeat 9 pokemons again to have the same progression. 

## Move DataBase Array
- if a move have priority, hier crit_rate, drain, flinch_chance, healing, multible hits


### StatChage 

accuracy
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
* 3N -- pokemon -- an Id corresponding to a pokemon in the DB <3>
* 2N -- level -- represent the level of the pokemon where 00 = 100 <2>
* 1B -- ability -- pokemons ability where 0 = first ability and 1 = second ability <1>
* 1L -- nature -- there are 25 natures and 26 letters <1>
* 3N -- HP -- number representing remaning hp <3>
* 0-10C -- nickname -- a nickname to the pokemon provided by the user. if name = 'viktor', it would say 'viktor@@@@' <0-10>
* . -- seperator
* 2 * 5 = 10N -- IV -- two numbers representing IV for each stat. Max IV = 15. Order: HP, attack, defense, speed, special <10>
* 5 * 5 = 25N -- EV -- 5 numbers representing EV for each stat. Max EV = 65535 Order: HP, attack, defense, speed, special <25>
* . -- seperator
* 3N 2N * 4 -- moves -- first 3 numbers are move id. secod 2 numbers are the amount of PP. 4 times <20>
* & -- separator -- indicating new type of item <1>
* x(1-6) -- multiplied by numbers of pokemons in party -- one pokemon total chars = 3+2+1+1+3+10+1+10+20+1+20+1 = 73, 72 without & seperator. max amout of pokemons = 6. <72-437>

Total max = 437

080 40 viktor@@@@ 0 s 15 35 02605 09405 00305 00405

[080, 40, 1, s, 143, 'viktor', 15, 35, 02635 09435 00335 00435]

const test = [080, 40, 1, 's', 143, 'viktor', 15, 35000, 02635, 09435, 00335, 00435]
const test2 = '[80,40,1,"s",143,"Polo",15,35000,1437,9435,221,285]'

const test = [[080, 40, 1, 's', 143, 'viktor', 15, [35000, 35000, 35000, 35000, 35000], 26, 35, 94, 35, 3, 35, 4, 35]]
const test2 = '[[80,40,1,"s",143,"viktor",15,[35000,35000,35000,35000,35000],26,35,94,35,3,35,4,35]]'
