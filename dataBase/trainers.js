// first item in trainers array (alltrainers[n].trainers[n][0]) == trainer name
// special trainers like rival and gym battles have the name 'name&custom' - ignore for now - then create custom moveset and/or trainer ai
// pokemons are stored as ' pokemonname + & + pokemonlevel '
// use array index as identifyers

module.exports = [
  {
    location: "viridian forest",
    trainers: [
      ["bug catcher", "weedle 7", "caterpie 6"],
      ["bug catcher", "weedle 7", "kakuna 7", "weedle 7"],
      ["bug catcher", "weedle 9"],
    ],
  },
  {
    location: "pewter city gym",
    trainers: [
      ["jr trainer male", "diglett 11", "sandshrew 11"],
      ["brock custom", "geodude 12", "onix 14"],
    ],
  },
  {
    location: "route 3",
    trainers: [
      ["lass", "pidgey 9", "pidgey 9"],
      ["bug catcher", "caterpie 9"],
      ["Youngster", "rattata 11", "ekans 11"],
      ["bug catcher", "weedle 9", "kakuna 9", "caterpie 9", "metapod 9"],
      ["Youngster", "spearow 14"],
      ["lass", "rattata 10", "nidoran-m 10"],
      ["bug catcher", "caterpie 11", "metapod 11"],
      ["lass", "jigglypuff 14"],
    ],
  },
  {
    location: "mt moon 1f",
    trainers: [
      ["lass", "clefairy 14"],
      ["bug catcher", "weedle 11", "kakuna 11"],
      ["supernerd", "magnemite 11", "voltorb 14"],
      ["bug catcher", "caterpie 10", "metapod 10", "caterpie 10"],
      ["lass", "oddish 11", "bellsprout 11"],
      ["Youngster", "rattata 10", "rattata 10", "zubat 10"],
      ["hiker", "geodude 10", "geodude 10", "onix 10"],
    ],
  },
  {
    location: "mt moon b2f",
    trainers: [
      ["rocket", "sandshrew 11", "rattata 11", "zubat 11"],
      ["rocket", "zubat 12", "ekans 12"],
      ["rocket", "raticate 16"],
      ["rocket", "rattata 13", "zubat 13"],
      ["supernerd", "grimer 12", "voltorb 12", "koffing 12"],
    ],
  },
  {
    location: "cerulean city gym",
    trainers: [
      ["swimmer", "horsea 16", "shellder 16"],
      ["jr trainer female", "goldeen 19"],
      ["misty", "staryu 18", "starmie 21"],
    ],
  },
  {
    location: "route 24",
    trainers: [
      ["gary", "pidgeotto 18", "abra 15", "rattata 15", "varies 15"],
      ["bug catcher", "caterpie 14", "weedle 14"],
      ["lass", "pidgey 14", "nidoran-f 14"],
      ["Youngster", "rattata 14", "ekans 14", "zubat 14"],
      ["lass", "pidgey 16", "nidoran-f 16"],
      ["junior trainer male", "mankey 18"],
      ["rocket", "ekans 15", "zubat 15"],
      ["junior trainer male", "rattata 14", "ekans 14"],
    ],
  },
  {
    location: "route 25",
    trainers: [
      ["hiker", "pidgeotto 18", "abra 15", "rattata 15", "varies 15"],
      ["hiker", "machop 15", "geodude 15"],
      ["Youngster", "rattata 15", "spearow 15"],
      ["hiker", "onix 17"],
      ["Youngster", "slowpoke 17"],
      ["lass", "nidoran-m 15", "nidoran-f 15"],
      ["hiker", "geodude 13", "geodude 13", "machop 13", "geodude 13"],
      ["junior trainer male", "rattata 14", "ekans 14"],
      ["Youngster", "ekans 14", "sandshrew 14"],
      ["lass", "oddish 13", "pidgey 13", "oddish 13"],
    ],
  },
  {
    location: "cerulean city",
    trainers: [["back of house - rocket", "machop 17", "drowzee 17"]],
  },
  {
    location: "route 6",
    trainers: [
      ["junior trainer male", "squirtle 20"],
      ["junior trainer female", "rattata 16", "pikachu 16"],
      ["bug catcher", "butterfree 16"],
      ["junior trainer female", "pidgey 16", "pidgey 16", "pidgey 16"],
      ["junior trainer male", "spearow 16", "raticate 16"],
    ],
  },
  {
    location: "s.s anne main floor",
    trainers: [
      ["gentleman", "growlithe 18", "growlithe 18"],
      ["gentleman", "nidoran-m 19", "nidoran-f 19"],
      ["lass", "pidgey 18", "nidoran-f 18"],
      ["Youngster", "nidoran-m 21"],
    ],
  },
  {
    location: "s.s anne basement",
    trainers: [
      ["sailor", "horsea 17", "shellder 17", "tentacool 17"],
      ["sailor", "shellder 21"],
      ["sailor", "horsea 17", "horsea 17"],
      ["sailor", "tentacool 18", "staryu 18"],
      ["fisherman", "tentacool 17", "staryu 17", "shellder 17"],
      ["sailor", "machop 20"],
    ],
  },
  {
    location: "s.s anne second floor",
    trainers: [
      ["gary", "pidgeotto 19", "raticate 16", "kadabra 18", "varies 20"],
    ],
  },
  {
    location: "s.s anne top deck",
    trainers: [["sailor", "machop 18", "shellder 18"]],
  },
  {
    location: "vermillion city gym",
    trainers: [
      ["sailor", "pikachu 21", "pikachu 21"],
      ["rocker", "voltorb 20", "magnemite 20", "voltorb 20"],
      ["gentleman", "pikachu 23"],
    ],
  },
  {
    location: "route 12",
    trainers: [
      ["Youngster", "ekans 21"],
      ["gambler", "poliwag 18", "horsea 18"],
      ["Youngster", "sandshrew 19", "zubat 19"],
      ["Youngster", "nidoran-m 18", "nidorino 18"],
      ["gambler", "bellsprout 18", "oddish 18"],
      ["gambler", "growlithe 18", "vulpix 18"],
      ["engineer", "magnemite 21"],
      ["engineer", "magnemite 18", "magnemite 18", "magneton 18"],
      ["gambler", "voltorb 18", "magnemite 18"],
      ["Youngster", "rattata 17", "rattata 17", "raticate 17"],
    ],
  },
  {
    location: "route 9",
    trainers: [
      [
        "junior trainer female",
        "oddish 18",
        "bellsprout 18",
        "oddish 18",
        "bellsprout 18",
      ],
      ["hiker", "machop 20", "onix 20"],
      ["junior trainer male", "growlithe 21", "charmander 21"],
      ["bug catcher", "beedrill 19", "beedrill 19"],
      ["bug catcher", "caterpie 20", "Weedle 20", "venonat 20"],
      ["hiker", "geodude 21", "onix 21"],
      [
        "junior trainer male",
        "rattata 19",
        "diglett 19",
        "ekans 19",
        "sandshrew 19",
      ],
      ["hiker", "geodude 20", "machop 20", "geodude 20"],
      ["junior trainer female", "meowth 23"],
    ],
  },
  {
    location: "rock tunnel",
    trainers: [
      ["outside - junior trainer female", "pikachu 20", "clefairy 20"],
      ["pokomaniac", "cubone 23", "slowpoke 23"],
      ["pokemaniac", "slowpoke 25"],
      ["junior trainer female", "oddish 22", "bulbasaur 22"],
      ["pokemaniac", "charmander 22", "cubone 22"],
      ["lower - hiker", "geodude 25"],
      ["upper - hiker", "machop 20", "onix 20"],
      ["hiker", "geodude 19", "machop 19", "geodude 19", "geodude 19"],
      ["left - hiker", "onix 20", "onix 20", "geodude 20"],
      ["hiker", "geodude 21", "graveler 21"],
      ["junior trainer female", "jigglypuff 21", "pidgey 21", "meowth 21"],
      ["hiker", "geodude 21", "geodude 21", "graveler 21"],
      ["pokemaniac", "slowpoke 20", "slowpoke 20", "slowpoke 20"],
      ["junior trainer female", "bellsprout 22", "clefairy 22"],
      [
        "junior trainer female",
        "pidgey 19",
        "rattata 19",
        "rattata 19",
        "bellsprout 19",
      ],
      ["junior trainer female", "meowth 20", "oddish 20", "pidgey 20"],
      ["outside, 1st - junior trainer female", "pidgey 21", "pidgeotto 21"],
      ["outside, left - hiker", "geodude 21", "onix 21"],
      ["outside, left, 2nd - hiker", "onix 19", "graveler 19"],
      ["outside, lower - pokemaniac", "cubone 20", "slowpoke 20"],
    ],
  },
  {
    location: "pokemon tower - second floor",
    trainers: [
      [
        "gary",
        "pidgeotto 25",
        "growlithe 23",
        "exeggecute 22",
        "kadabra 20",
        "varies 25",
      ],
    ],
  },
  {
    location: "pokemon tower - third floor",
    trainers: [
      ["top - channeler", "ghastly 23"],
      ["middle - channeler", "ghastly 24"],
      ["bottom - channeler", "ghastly 22"],
    ],
  },
  {
    location: "pokemon tower - fourth floor",
    trainers: [
      ["channeler", "ghastly 23", "ghastly 23"],
      ["left - channeler", "ghastly 24"],
      ["bottom - channeler", "ghastly 22"],
    ],
  },
  {
    location: "pokemon tower - fifth floor",
    trainers: [
      ["top - channeler", "ghastly 22"],
      ["by healing area - channeler", "ghastly 24"],
      ["bottom - channeler", "haunter 22"],
      ["right - channeler", "haunter 23"],
    ],
  },
  {
    location: "pokemon tower - sixth floor",
    trainers: [
      ["middle - channeler", "ghastly 22", "ghastly 22"],
      ["top - channeler", "ghastly 24"],
      ["left - channeler", "ghastly 24"],
      ["ghost", "marowak 30"],
    ],
  },
  {
    location: "pokemon tower - seventh floor",
    trainers: [
      ["rocket", "zubat 25", "zubat 25", "golbat 25"],
      ["rocket", "koffing 26", "drowzee 26"],
      ["rocket", "zubat 23", "rattata 23", "raticate 23", "zubat 23"],
    ],
  },
  {
    location: "route 8",
    trainers: [
      ["lass", "clefairy 22", "clefairy 22"],
      ["gambler", "growlithe 24", "vulpix 24"],
      ["super nerd", "grimer 22", "muk 22", "grimer 22"],
      ["top - lass", "nidoran-f 23", "nidorina 23"],
      ["2nd to top - super nerd", "koffing 26"],
      ["2nd to bottom - lass", "meowth 24", "meowth 24", "meowth 24"],
      [
        "bottom - lass",
        "pidgey 19",
        "rattata 19",
        "nidoran-m 19",
        "meowth 19",
        "pikachu 19",
      ],
      ["gambler", "poliwag 22", "poliwag 22", "poliwhirl 22"],
      ["super nerd", "voltorb 22", "koffing 22", "voltorb 22", "magnemite 22"],
    ],
  },
  {
    location: "celadon gym",
    trainers: [
      ["lass", "bellsprout 23", "Weepinbell 23"],
      ["beauty", "oddish 21", "bellsprout 21", "oddish 21", "bellsprout 21"],
      ["right - junior trainer female", "bulbasaur 24", "ivysaur 24"],
      ["left - beauty", "bellsprout 21"],
      ["cool trainer female", "weepinbell 24", "gloom 24", "ivysaur 24"],
      ["inside, right - lass", "oddish 23", "gloom 23"],
      ["inside, left - beauty", "exeggcute 26"],
      [
        "inside, 2nd from left - erika",
        "victreebel 29",
        "tangela 24",
        "vileplume 29",
      ],
    ],
  },
  {
    location: "game corner - main floor",
    trainers: [["rocket", "raticate 20", "zubat 20"]],
  },
  {
    location: "game corner - basement one",
    trainers: [
      ["left - rocket", "raticate 21", "raticate 21"],
      ["right - rocket", "drowzee 21", "machop 21"],
      ["elevator - rocket", "grimer 22", "koffing 22"],
    ],
  },
  {
    location: "game corner - basement two",
    trainers: [
      [
        "first - rocket",
        "zubat 17",
        "koffing 17",
        "grimer 17",
        "zubat 17",
        "raticate 17",
      ],
      ["bottom - rocket", "rattata 19", "raticate 19", "rattata 19"],
      ["bottom, 2nd - rocket", "grimer 20", "koffing 20", "koffing 20"],
    ],
  },
  {
    location: "game corner - basement three",
    trainers: [
      ["rocket", "rattata 20", "raticate 20", "drowzee 20"],
      ["bottom - rocket", "machop 21", "machop 21"],
    ],
  },
  {
    location: "game corner - basement four",
    trainers: [
      ["top - rocket", "koffing 21", "zubat 21"],
      ["elevator, left - rocket", "ekans 23", "sandshrew 23", "arbok 23"],
      ["elevator, right - rocket", "sandshrew 23", "ekans 23", "sandslash 23"],
      ["inside - giovanni", "onix 25", "rhyhorn 24", "kangaskhan 29"],
    ],
  },
];

// saffron city - dojo
// ********************************************************************************
// 1st - blackbelt                                machop          l31
//                                                mankey          l31
//                                                primeape        l31

// 2nd - blackbelt                                machop          l32
//                                                machoke         l32

// 3rd - blackbelt                                primeape        l36

// 4th - blackbelt                                mankey          l31
//                                                primeape        l31

// 5th - blackbelt                                hitmonlee       l37
//                                                hitmonchan      l37

// silph co
// ********************************************************************************
// second floor
// ------------
// 1st - rocket                                   golbat          l25
//                                                zubat           l25
//                                                zubat           l25
//                                                raticate        l25
//                                                zubat           l25

// center - rocket                                cubone          l29
//                                                zubat           l29

// bottom - scientist                             magnemite       l28
//                                                voltorb         l28
//                                                magneton        l28

// bottom left - scientist                        grimer          l26
//                                                Weezing         l26
//                                                koffing         l26
//                                                Weezing         l26

// third floor
// -----------
// 1st - rocket                                   raticate        l28
//                                                hypno           l28
//                                                raticate        l28

// left - scientist                               electrode       l29
//                                                Weezing         l29

// fourth floor
// ------------
// lower left - rocket                            machop          l29
//                                                drowzee         l29

// right - rocket                                 ekans           l28
//                                                zubat           l28
//                                                cubone          l28

// middle - scientist                             electrode       l23

// fifth floor
// -----------
// right - rocket                                 hypno           l33

// middle - juggler                               kadabra         l29
//                                                mr mime         l29

// left - scientist                               magneton        l26
//                                                koffing         l26
//                                                Weezing         l26
//                                                magnemite       l26

// bottom - rocket                                arbok           l33

// sixth floor
// -----------
// top - rocket                                   machop          l29
//                                                machoke         l29

// bottom - rocket                                zubat           l28
//                                                zubat           l28
//                                                golbat          l28

// middle - scientist                             voltorb         l25
//                                                koffing         l25
//                                                magneton        l25
//                                                magnemite       l25
//                                                koffing         l25

// seventh floor
// -------------
// 1st - rocket                                   cubone          l29
//                                                cubone          l29

// left - rocket                                  raticate        l26
//                                                arbok           l26
//                                                koffing         l26
//                                                golbat          l26

// bottom left - scientist                        electrode       l29
//                                                muk             l29

// bottom right - rocket                          sandshrew       l29
//                                                sandslash       l29

// top left - gary                                pidgeot         l37
//                                                growlithe       l38
//                                                exeggute        l35
//                                                alakazam        l35
//                                                (varies)        l40

// eighth floor
// ------------
// top - scientist                                grimer          l29
//                                                electrode       l29

// bottom - rocket                                Weezing         l28
//                                                golbat          l28
//                                                koffing         l28

// top - rocket                                   raticate        l26
//                                                zubat           l26
//                                                golbat          l26
//                                                rattata         l26

// ninth floor
// -----------
// bottom - rocket                                golbat          l28
//                                                drowzee         l28
//                                                hypno           l28

// right - scientist                              voltorb         l28
//                                                koffing         l28
//                                                magneton        l28

// Upper left - rocket                            drowzee         l28
//                                                grimer          l28
//                                                machop          l28

// tenth floor
// -----------
// 1st - scientist                                magnemite       l29
//                                                koffing         l29

// 2nd - rocket                                   machoke         l33

// eleventh floor
// --------------
// 1st - rocket                                   rattata         l25
//                                                rattata         l25
//                                                zubat           l25
//                                                rattata         l25
//                                                ekans           l25

// 2nd - giovanni                                 nidorino        l37
//                                                kangaskhan      l35
//                                                rhyhorn         l37
//                                                nidoqueen       l41

// saffron city gym
// ********************************************************************************
// 1st - psychic                                  slowpoke        l33
//                                                slowpoke        l33
//                                                slowbro         l33

// right side, middle - psychic                   mr mime         l34
//                                                kadabra         l34

// right side, top - psychic                      kadabra         l31
//                                                slowpoke        l31
//                                                mr mime         l31
//                                                kadabra         l31

// left, bottom - channeler                       ghastly         l30
//                                                ghastly         l30
//                                                haunter         l30

// left, middle - channeler                       haunter         l38

// left, top - psychic                            slowbro         l38

// middle, top - channeler                        ghastly         l34
//                                                haunter         l34

// middle, middle - sabrina                       kadabra         l38
//                                                mr mime         l37
//                                                venomoth        l38
//                                                alakazam        l43

// route 16
// ********************************************************************************
// 1st - biker                                    grimer          l29
//                                                koffing         l29

// 2nd - cueball                                  machop          l28
//                                                mankey          l28
//                                                machop          l28

// 3rd - cueball                                  mankey          l29
//                                                machop          l29

// 4th, top - cueball                             machop          l33

// 4th, bottom - biker                            Weezing         l33

// 5th - biker                                    grimer          l26
//                                                grimer          l26
//                                                grimer          l26
//                                                grimer          l26

// route 17
// ********************************************************************************
// left side, 1st - biker                         Weezing         l28
//                                                koffing         l28
//                                                Weezing         l28

// left side, 2nd - biker                         muk             l33

// left side, 3rd - cueball                       mankey          l26
//                                                mankey          l26
//                                                machoke         l26
//                                                machop          l26

// left side, 4th - biker                         Weezing         l29
//                                                muk             l29

// right side, 1st - cueball                      machop          l29
//                                                machoke         l29

// right side, 2nd - cueball                      mankey          l29
//                                                primeape        l29

// right side, 3rd - biker                        voltorb         l29
//                                                voltorb         l29

// right side, 4th - cueball                      machoke         l33

// right side, 5th - cueball                      primeape        l29
//                                                machoke         l29

// bottom - biker                                 koffing         l25
//                                                Weezing         l25
//                                                koffing         l25
//                                                koffing         l25
//                                                Weezing         l25

// route 18
// ********************************************************************************
// left - birdkeeper                              spearow         l29
//                                                fearow          l29

// middle - birdkeeper                            spearow         l26
//                                                spearow         l26
//                                                fearow          l26
//                                                spearow         l26

// bottom - birdkeeper                            dodrio          l34

// fuchsia city gym
// ********************************************************************************
// 1st, right - juggler                           hypno           l38

// 1st, left - juggler                            drowzee         l34
//                                                kadabra         l34

// 2nd, right - juggler                           drowzee         l31
//                                                drowzee         l31
//                                                kadabra         l31
//                                                drowzee         l31

// 3rd, right - tamer                             arbok           l33
//                                                sandslash       l33
//                                                arbok           l33

// 4th, top, left - tamer                         sandslash       l34
//                                                arbok           l34

// 4th, middle, left - juggler                    drowzee         l34
//                                                hypno           l34

// 5th, center - koga                             koffing         l37
//                                                muk             l39
//                                                koffing         l37
//                                                Weezing         l43

// route 15
// ********************************************************************************
// 1st - junior trainer female                    bellsprout      l29
//                                                oddish          l29
//                                                tangela         l29

// 2nd - bird keeper                              pidgeotto       l26
//                                                farfetch'd      l26
//                                                doduo           l26
//                                                pidgey          l26

// 3rd - bird keeper                              dodrio          l28
//                                                doduo           l28
//                                                doduo           l28

// 4th, bottom - junior trainer female            gloom           l28
//                                                oddish          l28
//                                                oddish          l28

// 4th, top - beauty                              bulbasaur       l29
//                                                ivysaur         l29

// 5th - biker                                    koffing         l28
//                                                grimer          l28
//                                                Weezing         l28

// 6th - biker                                    koffing         l28
//                                                koffing         l28
//                                                Weezing         l28
//                                                koffing         l28
//                                                grimer          l28

// 7th, top - junior trainer female               pikachu         l29
//                                                raichu          l29

// 7th, bottom - beauty                           pidgeotto       l29
//                                                Wigglytuff      l29

// 8th - bird keeper                              spearow         l29
//                                                fearow          l29

// back, top level - junior trainer female        clefairy        l33

// route 14
// ********************************************************************************
// 1st, left side - biker                         grimer          l28
//                                                grimer          l28
//                                                koffing         l28

// 2nd, left side - biker                         koffing         l29
//                                                grimer          l29

// 3rd, left side - biker                         koffing         l26
//                                                koffing         l26
//                                                grimer          l26
//                                                koffing         l26

// 1st, right side - bird keeper                  farfetch'd      l33

// 2nd, right side - biker                        koffing         l29
//                                                muk             l29

// 3rd, right side - bird keeper                  spearow         l28
//                                                doduo           l28
//                                                spearow         l28

// 4th, right side - bird keeper                  pidgeotto       l29
//                                                fearow          l29

// route 13
// ********************************************************************************
// left section
// ------------

// left, bottom - bird keeper                     pidgey          l26
//                                                pidgeotto       l26
//                                                spearow         l26
//                                                fearow          l26

// right, bottom - junior trainer female          pidgey          l27
//                                                meowth          l27
//                                                pidgey          l27
//                                                pidgeotto       l27

// farther right, middle - junior trainer female  poliwag         l30
//                                                poliwag         l30

// farthest right, top, left one - beauty         clefairy        l29
//                                                meowth          l29

// farthest right, top, right one - beauty        rattata         l27
//                                                pikachu         l27
//                                                rattata         l27

// right section
// -------------

// 1st - junior trainer female                    pidgey          l24
//                                                meowth          l24
//                                                rattata         l24
//                                                pikachu         l24
//                                                meowth          l24

// 2nd - bird keeper                              pidgey          l29
//                                                pidgeotto       l29

// 3rd - junior trainer female                    goldeen         l28
//                                                poliwag         l28
//                                                horsea          l28

// 4th - junior trainer male                      nidoran male    l29
//                                                nidorino        l29

// 5th - fisherman                                magikarp        l24
//                                                magikarp        l24

// 6th - rocker                                   voltorb         l29
//                                                electrode       l29

// route 12
// ********************************************************************************
// 1st - fisherman                                poliwag         l21
//                                                shellder        l21
//                                                goldeen         l21
//                                                horsea          l21

// 2nd - fisherman                                goldeen         l27

// 3rd - fisherman                                tentacool       l24
//                                                goldeen         l24

// 4th - fisherman                                goldeen         l22
//                                                poliwag         l22
//                                                goldeen         l22

// route 19
// ********************************************************************************
// down
// ----

// 1st, right, land - swimmer                     goldeen         l29
//                                                horsea          l29
//                                                staryu          l29

// 1st, left, land - swimmer                      tentacool       l30
//                                                shellder        l30

// 1st, water - swimmer                           horsea          l30
//                                                horsea          l30

// 2nd - swimmer                                  poliwag         l30
//                                                poliwag         l30
//                                                poliwhirl       l30

// 3rd - swimmer                                  horsea          l27
//                                                tentacool       l27
//                                                tentacool       l27
//                                                goldeen         l27

// 4th - swimmer                                  goldeen         l29
//                                                shellder        l29
//                                                seaking         l29

// 5th, top - swimmer                             tentacool       l27
//                                                tentacool       l27
//                                                staryu          l27
//                                                horsea          l27
//                                                tentacruel      l27

// 5th, left - beauty                             poliwag         l27
//                                                goldeen         l27
//                                                seaking         l27
//                                                goldeen         l27
//                                                poliwag         l27

// 5th, right - beauty                            goldeen         l30
//                                                seaking         l30

// 5th, bottom - beauty                           staryu          l29
//                                                staryu          l29
//                                                staryu          l29

// left
// ----
// 1st, bottom - swimmer                          horsea          l28
//                                                horsea          l28
//                                                seadra          l28
//                                                horsea          l28

// 1st, top - swimmer                             shellder        l31
//                                                cloyster        l31

// 2nd - beauty                                   seadra          l30
//                                                horsea          l30
//                                                seadra          l30

// 3rd, outside cave - beauty                     seaking         l35

// after seafoam island cave
// --------------------------
// 1st - junior trainer female                    tentacool       l30
//                                                horsea          l30
//                                                seel            l30

// 2nd - swimmer                                  staryu          l35

// 3rd, platform - birdkeeper                     fearow          l30
//                                                fearow          l30
//                                                pidgeotto       l30

// 4th - junior trainer female                    goldeen         l31
//                                                seaking         l31

// 5th - beauty                                   poliwag         l31
//                                                seaking         l31

// cinnabar island - pokemon mansion
// ********************************************************************************
// 2nd floor, 1st - burglar                       charmander      l34
//                                                charmeleon      l34

// 3rd floor, right - scientist                   magnemite       l33
//                                                magneton        l33
//                                                voltorb         l33

// 1st floor - scientist                          electrode       l29
//                                                Weezing         l29

// basement, 1st - burglar                        growlithe       l34
//                                                ponyta          l34

// basement, 2nd - scientist                      magnemite       l34
//                                                electrode       l34

// 2nd floor, east to get to - burglar            ninetales       l38

// cinnabar island - gym
// ********************************************************************************
// 1st - burglar                                  growlithe       l36
//                                                vulpix          l36
//                                                ninetales       l36

// 2nd - supernerd                                vulpix          l36
//                                                vulpix          l36
//                                                ninetales       l36

// 3rd - supernerd                                ponyta          l34
//                                                charmander      l34
//                                                vulpix          l34
//                                                growlithe       l34

// 4th - burglar                                  ponyta          l41

// 5th - supernerd                                rapidash        l41

// 6th - burglar                                  vulpix          l37
//                                                growlithe       l37

// 7th - supernerd                                growlithe       l37
//                                                vulpix          l37

// 8th - blaine                                   growlithe       l42
//                                                ponyta          l40
//                                                rapidash        l42
//                                                arcanine        l47

// route 21
// ********************************************************************************
// 1st, left - swimmer                            staryu          l33
//                                                Wartortle       l33

// 1st, right - swimmer                           poliwhirl       l32
//                                                tentacool       l32
//                                                seadra          l32

// 2nd, right - swimmer                           starmie         l37

// 3rd, right - fisherman                         seaking         l33
//                                                goldeen         l33

// 3rd, left - fisherman                          shellder        l31
//                                                cloyster        l31

// 4th, bottom - swimmer                          seadra          l33
//                                                tentacruel      l33

// 4th, top - cueball                             tentacool       l31
//                                                tentacool       l31
//                                                tentacruel      l31

// 5th, bottom - fisherman                        magikarp        l27
//                                                magikarp        l27
//                                                magikarp        l27
//                                                magikarp        l27
//                                                magikarp        l27
//                                                magikarp        l27

// 5th, top - fisherman                           seaking         l28
//                                                goldeen         l28
//                                                seaking         l28
//                                                seaking         l28

// viridian city gym
// ********************************************************************************
// top - blackbelt                                machoke         l38
//                                                machop          l38
//                                                machoke         l38

// bottom left - tamer                            arbok           l39
//                                                tauros          l39

// left, middle - blackbelt                       machoke         l43

// center, 1st - cooltrainer male                 sandslash       l39
//                                                dugtrio         l39

// center, 2nd - blackbelt                        machop          l40
//                                                machoke         l40

// center, 3rd - tamer                            rhyhorn         l43

// above center, 1st - cooltrainer male           rhyhorn         l43

// above center, 2nd - cooltrainer male           nidorino        l39
//                                                nidoking        l39

// center - giovanni                              rhyhorn         l45
//                                                dugtrio         l42
//                                                nidoqueen       l44
//                                                nidoking        l45
//                                                rhydon          l50

// route 22
// ********************************************************************************
// 1st - gary                                     pidgeotto       l47
//                                                rhyhorn         l45
//                                                growlithe       l45
//                                                exeggcute       l47
//                                                alakazam        l50
//                                                (varies)        l53

// victory road
// ********************************************************************************
// first floor
// -----------
// middle - cooltrainer female                    persian         l44
//                                                ninetales       l44

// top corner - cooltrainer male                  ivysaur         l42
//                                                Wartortle       l42
//                                                charmeleon      l42
//                                                charizard       l42

// second floor
// ------------
// 1st - blackbelt                                machoke         l43
//                                                machop          l43
//                                                machoke         l43

// 2nd - juggler                                  drowzee         l41
//                                                hypno           l41
//                                                kadabra         l41
//                                                kadabra         l41

// 3rd - tamer                                    persian         l44
//                                                golduck         l44

// 4th - juggler                                  mr mime         l48

// 5th, top right corner - pokemaniac             charmeleon      l40
//                                                lapras          l40
//                                                lickitung       l40

// third floor
// -----------
// right, by item - cooltrainer male              executor        l43
//                                                cloyster        l43
//                                                arcanine        l43

// platform, center - cooltrainer female          parasect        l43
//                                                dewgong         l43
//                                                chansey         l43

// bottom, lower - cooltrainer male               kingler         l43
//                                                tentacruel      l43
//                                                blastoise       l43

// bottom, upper - cooltrainer female             bellsprout      l43
//                                                Weepinbell      l43
//                                                victreebel      l43

// indigo plateau
// ********************************************************************************
// 1st - lorelei                                  dewgong         l54
//                                                cloyster        l53
//                                                slowbro         l54
//                                                jynx            l56
//                                                lapras          l56

// 2nd - bruno                                    onix            l53
//                                                hitmonchan      l55
//                                                hitmonlee       l55
//                                                onix            l56
//                                                machamp         l58

// 3rd - agatha                                   gengar          l56
//                                                golbat          l56
//                                                haunter         l55
//                                                arbok           l58
//                                                gengar          l60

// 4th - lance                                    gyarados        l58
//                                                dragonair       l56
//                                                dragonair       l56
//                                                aerodactyl      l60
//                                                dragonite       l62

// 5th - gary                                     pidgeot         l61
//                                                alakazam        l59
//                                                rhydon          l61

// at the beginning, if you took bulbasaur        gyrados         l61
//                                                arcanine        l63
//                                                venusaur        l65

// at the beginning, if you took charmander       exeggutor       l61
//                                                gyrados         l63
//                                                charizard       l65

// at the beginning, if you took squirtle         arcanine        l61
//                                                gyrados         l63
//                                                blastoise       l65
