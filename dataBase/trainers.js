
// first item in trainers array (allTrainers[n].trainers[n][0]) == trainer name 
// special trainers like rival and gym battles have the name 'name&custom' - ignore for now - then create custom moveset and/or trainer AI
// pokemons are stored as ' pokemonName + & + pokemonLevel '
// use array index as identifyers

module.exports = [
    {
        location: "Viridian Forest", 
        trainers: [
            [
                'Bug Catcher',
                'weedle&7',
                'caterpie&6'
            ],
            [
                'Bug Catcher',
                'weedle&7',
                'kakuna&7',
                'weedle&7'
            ],
            [
                'Bug Catcher',
                'weedle&9'
            ]
        ]
        
    },      
    {
        location: "Pewter City Gym", 
        trainers: [
            [
                'Jr Trainer Male',
                'diglett&11',
                'sandshrew&11'
            ],
            [
                'Brock&custom',
                'geodude&12',
                'onix&14'
            ]
        ]
    },
    {
        location: "route 3", 
        trainers: [ 
            [
                'Lass', 
                'pidgey&9',
                'pidgey&9'
            ],
            [
                'Bug Catcher',
                'caterpie&9'
            ],
            [
                'Youngster',
                'rattata&11',
                'ekans&11'
            ],
            [
                'Bug Catcher',
                'weedle&9',
                'kakuna&9',
                'caterpie&9',
                'metapod&9'
            ],
            [
                'Youngster',
                'spearow&14'
            ],
            [
                'Lass',
                'rattata&10',
                'nidoran-m&10'
            ],
            [
                'Bug Catcher',
                'caterpie&11',
                'metapod&11'
            ],
            [
                'Lass',
                'jigglypuff&14'
            ]
        ]
    },
    {
        location: 'Mt Moon 1F',
        trainers: [
            [
                'Lass',
                'clefairy&14'
            ],
            [
                'Bug Catcher',
                'weedle&11',
                'kakuna&11'
            ],
            [
                'Supernerd',
                'magnemite&11',
                'voltorb&14'
            ],
            [
                'Bug Catcher',
                'caterpie&10',
                'metapod&10',
                'caterpie&10'
            ],
            [
                'Lass',
                'oddish&11',
                'bellsprout&11'
            ],
            [
                'Youngster',
                'rattata&10',
                'rattata&10',
                'zubat&10'
            ],
            [
                'hiker',
                'geodude&10',
                'geodude&10',
                'onix&10'
            ],
        ]
    },
    {
        location: 'Mt Moon B2F',
        trainers: [
            [
                'Rocket',
                'sandshrew&11',
                'rattata&11',
                'zubat&11'
            ],
            [
                'Rocket',
                'zubat&12',
                'ekans&12'
            ],
            [
                'Rocket',
                'raticate&16'
            ],
            [
                'Rocket',
                'rattata&13',
                'zubat&13'
            ],
            [
                'Supernerd',
                'grimer&12',
                'voltorb&12',
                'koffing&12'
            ]
        ]
    }
]


// Cerulean City Gym
// ********************************************************************************
// 1st - Swimmer                                  Horsea          L16
//                                                Shellder        L16

// 2nd - Jr Trainer Female                        Goldeen         L19

// 3rd - Misty                                    Staryu          L18
//                                                Starmie         L21


// Route 24
// ********************************************************************************
// 1st - Gary                                     Pidgeotto       L18
//                                                Abra            L15
//                                                Rattata         L15
//                                                (varies)        L15

// 2nd - Bug Catcher                              Caterpie        L14
//                                                Weedle          L14

// 3rd - Lass                                     Pidgey          L14
//                                                Nidoran Female  L14

// 4th - Youngster                                Rattata         L14
//                                                Ekans           L14
//                                                Zubat           L14

// 5th - Lass                                     Pidgey          L16
//                                                Nidoran Female  L16

// 6th - Junior Trainer Male                      Mankey          L18

// 7th - Rocket                                   Ekans           L15
//                                                Zubat           L15

// Left - Junior Trainer Male                     Rattata         L14
//                                                Ekans           L14


// Route 25
// ********************************************************************************
// 1st - Hiker                                    Machop          L15
//                                                Geodude         L15

// 2nd up - Youngster                             Rattata         L15
//                                                Spearow         L15

// 2nd down - Hiker                               Onix            L17

// 3rd up - Youngster                             Slowpoke        L17

// 4th - Lass                                     Nidoran Male    L15
//                                                Nidoran Female  L15

// 5th - Hiker                                    Geodude         L13
//                                                Geodude         L13
//                                                Machop          L13
//                                                Geodude         L13

// 6th - Junior Trainer Male                      Rattata         L14
//                                                Ekans           L14

// 7th - Youngster                                Ekans           L14
//                                                Sandshrew       L14

// 8th - Lass                                     Oddish          L13
//                                                Pidgey          L13
//                                                Oddish          L13


// Cerulean City
// ********************************************************************************
// Back of house - Rocket                         Machop          L17
//                                                Drowzee         L17

// Route 6
// ********************************************************************************
// 1st - Junior Trainer Male                      Squirtle        L20
				
// 2nd - Junior Trainer Female                    Rattata         L16
//                                                Pikachu         L16

// 3rd - Bug Catcher                              Butterfree      L16

// 4th - Junior Trainer Female                    Pidgey          L16
//                                                Pidgey          L16
//                                                Pidgey          L16

// 5th - Junior Trainer Male                      Spearow         L16
//                                                Raticate        L16


// S.S Anne
// ********************************************************************************

// Main Floor
// ----------
// 1st from right - Gentleman                     Growlithe       L18
//                                                Growlithe       L18

// 2nd from right - Gentleman                     Nidoran Male    L19
//                                                Nidoran Female  L19

// 2nd from left, 1st - Lass                      Pidgey          L18
//                                                Nidoran Female  L18

// 2nd from left, 2nd - Youngster                 Nidoran Male    L21


// Basement
// --------
// 2nd from right, 1st - Sailor                   Horsea          L17
//                                                Shellder        L17
//                                                Tentacool       L17

// 2nd from right, 2nd - Sailor                   Shellder        L21

// 3rd from right - Sailor                        Horsea          L17
//                                                Horsea          L17

// 4th from right - Sailor                        Tentacool       L18
//                                                Staryu          L18
	 
// Last, 1st - Fisherman                          Tentacool       L17
//                                                Staryu          L17
//                                                Shellder        L17

// Last, 2nd - Sailor                             Machop          L20


// Second Floor
// ------------
// Gary                                           Pidgeotto       L19
//                                                Raticate        L16
//                                                Kadabra         L18
//                                                (varies)        L20

// Top Deck
// --------
// 1st - Sailor                                   Machop          L18
//                                                Shellder        L18


// Vermillion City Gym
// ********************************************************************************
// 1st - Sailor                                   Pikachu         L21
//                                                Pikachu         L21

// 2nd - Rocker                                   Voltorb         L20
//                                                Magnemite       L20
//                                                Voltorb         L20

// 3rd - Gentleman                                Pikachu         L23


// Route 12
// ********************************************************************************
// 1st - Youngster                                Ekans           L21

// 1st, down - Gambler                            Poliwag         L18
//                                                Horsea          L18

// 2nd, upper - Youngster                         Sandshrew       L19
//                                                Zubat           L19

// 2nd, lower - Youngster                         Nidoran Male    L18
//                                                Nidorino        L18

// 3rd - Gambler                                  Bellsprout      L18
//                                                Oddish          L18

// 4th, upper - Gambler                           Growlithe       L18
//                                                Vulpix          L18

// 4th, lower - Engineer                          Magnemite       L21

// 5th - Engineer                                 Magnemite       L18
//                                                Magnemite       L18
//                                                Magneton        L18

// 6th, lower - Gambler                           Voltorb         L18
//                                                Magnemite       L18

// 6th, upper - Youngster                         Rattata         L17
//                                                Rattata         L17
//                                                Raticate        L17


// Route 9
// ********************************************************************************
// 1st - Junior Trainer Female                    Oddish          L18
//                                                Bellsprout      L18
//                                                Oddish          L18
//                                                Bellsprout      L18

// 2nd - Hiker                                    Machop          L20
//                                                Onix            L20

// 3rd, up - Junior Trainer Male                  Growlithe       L21
//                                                Charmander      L21

// 4th, left, up - Bug Catcher                    Beedrill        L19
//                                                Beedrill        L19

// 3rd, right, top - Bug Catcher                  Caterpie        L20
//                                                Weedle          L20
//                                                Venonat         L20

// 3rd, right, bottom - Hiker                     Geodude         L21
//                                                Onix            L21

// 4th, right, left - Junior Trainer Male         Rattata         L19
//                                                Diglett         L19
//                                                Ekans           L19
//                                                Sandshrew       L19

// 4th, right, up - Hiker                         Geodude         L20
//                                                Machop          L20
//                                                Geodude         L20

// 5th - Junior Trainer Female                    Meowth          L23



// Rock Tunnel
// ********************************************************************************
// Outside - Junior Trainer Female                Pikachu         L20
//                                                Clefairy        L20

// 1st - Pokomaniac                               Cubone          L23
//                                                Slowpoke        L23

// 2nd - Pokemaniac                               Slowpoke        L25

// 3rd - Junior Trainer Female                    Oddish          L22
//                                                Bulbasaur       L22

// 4th - Pokemaniac                               Charmander      L22
//                                                Cubone          L22

// 5th, lower - Hiker                             Geodude         L25

// 5th, upper - Hiker                             Machop          L20
//                                                Onix            L20

// 6th - Hiker                                    Geodude         L19
//                                                Machop          L19
//                                                Geodude         L19
//                                                Geodude         L19

// 7th, left - Hiker                              Onix            L20
//                                                Onix            L20
//                                                Geodude         L20

// 8th - Hiker                                    Geodude         L21
//                                                Graveler        L21

// 9th - Junior Trainer Female                    Jigglypuff      L21
//                                                Pidgey          L21
//                                                Meowth          L21

// 10th - Hiker                                   Geodude         L21
//                                                Geodude         L21
//                                                Graveler        L21

// 11th - Pokemaniac                              Slowpoke        L20
//                                                Slowpoke        L20
//                                                Slowpoke        L20

// 12th - Junior Trainer Female                   Bellsprout      L22
//                                                Clefairy        L22

// 13th - Junior Trainer Female                   Pidgey          L19
//                                                Rattata         L19
//                                                Rattata         L19
//                                                Bellsprout      L19

// 14th - Junior Trainer Female                   Meowth          L20
//                                                Oddish          L20
//                                                Pidgey          L20

// Outside, 1st - Junior Trainer Female           Pidgey          L21
//                                                Pidgeotto       L21

// Outside, left - Hiker                          Geodude         L21
//                                                Onix            L21

// Outside, left, 2nd - Hiker                     Onix            L19
//                                                Graveler        L19

// Outside, lower - Pokemaniac                    Cubone          L20
//                                                Slowpoke        L20


// Pokemon Tower 
// ********************************************************************************

// Second Floor
// ------------
// 1st - Gary                                     Pidgeotto       L25
//                                                Growlithe       L23
//                                                Exeggecute      L22
//                                                Kadabra         L20
//                                                (varies)        L25

// Third Floor
// -----------
// Top - Channeler                                Ghastly         L23

// Middle - Channeler                             Ghastly         L24

// Bottom - Channeler                             Ghastly         L22


// Fourth Floor
// -----------
// 1st - Channeler                                Ghastly         L23
//                                                Ghastly         L23

// 2nd, left - Channeler                          Ghastly         L24

// 2nd, bottom - Channeler                        Ghastly         L22


// Fifth Floor
// -----------
// Top - Channeler                                Ghastly         L22

// By healing area - Channeler                    Ghastly         L24

// Bottom - Channeler                             Haunter         L22

// Right - Channeler                              Haunter         L23


// Sixth Floor
// -----------
// Middle - Channeler                             Ghastly         L22
//                                                Ghastly         L22

// Top - Channeler                                Ghastly         L24
 
// Left - Channeler                               Ghastly         L24

// By Stairs - Ghost                              Marowak         L30


// Seventh Floor
// -------------
// 1st  - Rocket                                  Zubat           L25
//                                                Zubat           L25
//                                                Golbat          L25

// 2nd - Rocket                                   Koffing         L26
//                                                Drowzee         L26

// 3rd - Rocket                                   Zubat           L23
//                                                Rattata         L23
//                                                Raticate        L23
//                                                Zubat           L23


// Route 8
// ********************************************************************************

// 1st - Lass                                     Clefairy        L22
//                                                Clefairy        L22

// 2nd - Gambler                                  Growlithe       L24
//                                                Vulpix          L24

// 3rd - Super Nerd                               Grimer          L22
//                                                Muk             L22
//                                                Grimer          L22

// 4th, top - Lass                                Nidoran Female  L23
//                                                Nidorina        L23

// 4th, 2nd to top - Super Nerd                   Koffing         L26

// 4th, 2nd to bottom - Lass                      Meowth          L24
//                                                Meowth          L24
//                                                Meowth          L24

// 4th, bottom - Lass                             Pidgey          L19
//                                                Rattata         L19
//                                                Nidoran Male    L19
//                                                Meowth          L19
//                                                Pikachu         L19

// 5th - Gambler                                  Poliwag         L22
//                                                Poliwag         L22
//                                                Poliwhirl       L22

// 6th - Super Nerd                               Voltorb         L22
//                                                Koffing         L22
//                                                Voltorb         L22
//                                                Magnemite       L22


// Celadon Gym
// ********************************************************************************

// 1st - Lass                                     Bellsprout      L23
//                                                Weepinbell      L23

// 2nd - Beauty                                   Oddish          L21
//                                                Bellsprout      L21
//                                                Oddish          L21
//                                                Bellsprout      L21

// Right - Junior Trainer Female                  Bulbasaur       L24
//                                                Ivysaur         L24

// Left - Beauty                                  Bellsprout      L21

// 3rd - Cool Trainer Female                      Weepinbell      L24
//                                                Gloom           L24
//                                                Ivysaur         L24

// Inside, right - Lass                           Oddish          L23
//                                                Gloom           L23

// Inside, left - Beauty                          Exeggcute       L26

// Inside, 2nd from left - Erika                  Victreebel      L29
//                                                Tangela         L24
//                                                Vileplume       L29


// Game Corner 
// ********************************************************************************
// Main Floor
// ----------
// 1st - Rocket                                   Raticate        L20
//                                                Zubat           L20


// Basement One
// ------------
// Left - Rocket                                  Raticate        L21
//                                                Raticate        L21

// Right - Rocket                                 Drowzee         L21
//                                                Machop          L21

// Elevator - Rocket                              Grimer          L22
//                                                Koffing         L22

// Basement Two
// ------------
// First - Rocket                                 Zubat           L17
//                                                Koffing         L17
//                                                Grimer          L17
//                                                Zubat           L17
//                                                Raticate        L17

// Bottom - Rocket                                Rattata         L19
//                                                Raticate        L19
//                                                Rattata         L19

// Bottom, 2nd - Rocket                           Grimer          L20
//                                                Koffing         L20
//                                                Koffing         L20

// Basement Three
// --------------
// 1st - Rocket                                   Rattata         L20
//                                                Raticate        L20
//                                                Drowzee         L20

// Bottom - Rocket                                Machop          L21
//                                                Machop          L21

// Basement Four
// -------------
// Top - Rocket                                   Koffing         L21
//                                                Zubat           L21

// Elevator, left - Rocket                        Ekans           L23
//                                                Sandshrew       L23
//                                                Arbok           L23

// Elevator, right - Rocket                       Sandshrew       L23
//                                                Ekans           L23
//                                                Sandslash       L23

// Inside - Giovanni                              Onix            L25
//                                                Rhyhorn         L24
//                                                Kangaskhan      L29


// Saffron City - Dojo
// ********************************************************************************
// 1st - Blackbelt                                Machop          L31
//                                                Mankey          L31
//                                                Primeape        L31

// 2nd - Blackbelt                                Machop          L32
//                                                Machoke         L32

// 3rd - Blackbelt                                Primeape        L36

// 4th - Blackbelt                                Mankey          L31
//                                                Primeape        L31

// 5th - Blackbelt                                Hitmonlee       L37
//                                                Hitmonchan      L37


// Silph Co
// ********************************************************************************
// Second Floor
// ------------
// 1st - Rocket                                   Golbat          L25
//                                                Zubat           L25
//                                                Zubat           L25
//                                                Raticate        L25
//                                                Zubat           L25

// Center - Rocket                                Cubone          L29
//                                                Zubat           L29

// Bottom - Scientist                             Magnemite       L28
//                                                Voltorb         L28
//                                                Magneton        L28

// Bottom left - Scientist                        Grimer          L26
//                                                Weezing         L26
//                                                Koffing         L26
//                                                Weezing         L26


// Third Floor
// -----------
// 1st - Rocket                                   Raticate        L28
//                                                Hypno           L28
//                                                Raticate        L28

// Left - Scientist                               Electrode       L29
//                                                Weezing         L29


// Fourth Floor
// ------------
// Lower left - Rocket                            Machop          L29
//                                                Drowzee         L29

// Right - Rocket                                 Ekans           L28
//                                                Zubat           L28
//                                                Cubone          L28

// Middle - Scientist                             Electrode       L23


// Fifth Floor
// -----------
// Right - Rocket                                 Hypno           L33

// Middle - Juggler                               Kadabra         L29
//                                                Mr Mime         L29

// Left - Scientist                               Magneton        L26
//                                                Koffing         L26
//                                                Weezing         L26
//                                                Magnemite       L26

// Bottom - Rocket                                Arbok           L33


// Sixth Floor
// -----------
// Top - Rocket                                   Machop          L29
//                                                Machoke         L29

// Bottom - Rocket                                Zubat           L28
//                                                Zubat           L28
//                                                Golbat          L28

// Middle - Scientist                             Voltorb         L25
//                                                Koffing         L25
//                                                Magneton        L25
//                                                Magnemite       L25
//                                                Koffing         L25

// Seventh Floor
// -------------
// 1st - Rocket                                   Cubone          L29
//                                                Cubone          L29

// Left - Rocket                                  Raticate        L26
//                                                Arbok           L26
//                                                Koffing         L26
//                                                Golbat          L26

// Bottom left - Scientist                        Electrode       L29
//                                                Muk             L29

// Bottom right - Rocket                          Sandshrew       L29
//                                                Sandslash       L29

// Top left - Gary                                Pidgeot         L37
//                                                Growlithe       L38
//                                                Exeggute        L35
//                                                Alakazam        L35
//                                                (varies)        L40

// Eighth Floor
// ------------
// Top - Scientist                                Grimer          L29
//                                                Electrode       L29

// Bottom - Rocket                                Weezing         L28
//                                                Golbat          L28
//                                                Koffing         L28

// Top - Rocket                                   Raticate        L26
//                                                Zubat           L26
//                                                Golbat          L26
//                                                Rattata         L26


// Ninth Floor
// -----------
// Bottom - Rocket                                Golbat          L28
//                                                Drowzee         L28
//                                                Hypno           L28

// Right - Scientist                              Voltorb         L28
//                                                Koffing         L28
//                                                Magneton        L28

// Upper left - Rocket                            Drowzee         L28
//                                                Grimer          L28
//                                                Machop          L28

// Tenth Floor
// -----------
// 1st - Scientist                                Magnemite       L29
//                                                Koffing         L29

// 2nd - Rocket                                   Machoke         L33


// Eleventh Floor 
// --------------
// 1st - Rocket                                   Rattata         L25
//                                                Rattata         L25
//                                                Zubat           L25
//                                                Rattata         L25
//                                                Ekans           L25

// 2nd - Giovanni                                 Nidorino        L37
//                                                Kangaskhan      L35
//                                                Rhyhorn         L37
//                                                Nidoqueen       L41


// Saffron City Gym
// ********************************************************************************
// 1st - Psychic                                  Slowpoke        L33
//                                                Slowpoke        L33 
//                                                Slowbro         L33

// Right side, middle - Psychic                   Mr Mime         L34
//                                                Kadabra         L34

// Right side, top - Psychic                      Kadabra         L31
//                                                Slowpoke        L31
//                                                Mr Mime         L31 
//                                                Kadabra         L31

// Left, bottom - Channeler                       Ghastly         L30
//                                                Ghastly         L30
//                                                Haunter         L30

// Left, middle - Channeler                       Haunter         L38

// Left, top - Psychic                            Slowbro         L38

// Middle, top - Channeler                        Ghastly         L34
//                                                Haunter         L34

// Middle, middle - Sabrina                       Kadabra         L38
//                                                Mr Mime         L37
//                                                Venomoth        L38
//                                                Alakazam        L43


// Route 16
// ********************************************************************************
// 1st - Biker                                    Grimer          L29
//                                                Koffing         L29

// 2nd - Cueball                                  Machop          L28
//                                                Mankey          L28
//                                                Machop          L28

// 3rd - Cueball                                  Mankey          L29
//                                                Machop          L29

// 4th, top - Cueball                             Machop          L33

// 4th, bottom - Biker                            Weezing         L33

// 5th - Biker                                    Grimer          L26
//                                                Grimer          L26
//                                                Grimer          L26
//                                                Grimer          L26


// Route 17
// ********************************************************************************
// Left side, 1st - Biker                         Weezing         L28
//                                                Koffing         L28
//                                                Weezing         L28

// Left side, 2nd - Biker                         Muk             L33

// Left side, 3rd - Cueball                       Mankey          L26
//                                                Mankey          L26
//                                                Machoke         L26
//                                                Machop          L26

// Left side, 4th - Biker                         Weezing         L29
//                                                Muk             L29

// Right side, 1st - Cueball                      Machop          L29
//                                                Machoke         L29

// Right side, 2nd - Cueball                      Mankey          L29
//                                                Primeape        L29

// Right side, 3rd - Biker                        Voltorb         L29
//                                                Voltorb         L29

// Right side, 4th - Cueball                      Machoke         L33

// Right side, 5th - Cueball                      Primeape        L29
//                                                Machoke         L29

// Bottom - Biker                                 Koffing         L25
//                                                Weezing         L25
//                                                Koffing         L25
//                                                Koffing         L25
//                                                Weezing         L25


// Route 18
// ********************************************************************************
// Left - Birdkeeper                              Spearow         L29
//                                                Fearow          L29

// Middle - Birdkeeper                            Spearow         L26
//                                                Spearow         L26
//                                                Fearow          L26
//                                                Spearow         L26

// Bottom - Birdkeeper                            Dodrio          L34



// Fuchsia City Gym
// ********************************************************************************
// 1st, right - Juggler                           Hypno           L38

// 1st, left - Juggler                            Drowzee         L34
//                                                Kadabra         L34

// 2nd, right - Juggler                           Drowzee         L31
//                                                Drowzee         L31
//                                                Kadabra         L31
//                                                Drowzee         L31

// 3rd, right - Tamer                             Arbok           L33
//                                                Sandslash       L33
//                                                Arbok           L33

// 4th, top, left - Tamer                         Sandslash       L34
//                                                Arbok           L34

// 4th, middle, left - Juggler                    Drowzee         L34
//                                                Hypno           L34

// 5th, center - Koga                             Koffing         L37
//                                                Muk             L39
//                                                Koffing         L37
//                                                Weezing         L43


// Route 15
// ********************************************************************************
// 1st - Junior Trainer Female                    Bellsprout      L29
//                                                Oddish          L29
//                                                Tangela         L29

// 2nd - Bird Keeper                              Pidgeotto       L26
//                                                Farfetch'd      L26
//                                                Doduo           L26
//                                                Pidgey          L26

// 3rd - Bird Keeper                              Dodrio          L28
//                                                Doduo           L28
//                                                Doduo           L28

// 4th, bottom - Junior Trainer Female            Gloom           L28
//                                                Oddish          L28
//                                                Oddish          L28

// 4th, top - Beauty                              Bulbasaur       L29
//                                                Ivysaur         L29

// 5th - Biker                                    Koffing         L28
//                                                Grimer          L28
//                                                Weezing         L28

// 6th - Biker                                    Koffing         L28
//                                                Koffing         L28
//                                                Weezing         L28
//                                                Koffing         L28
//                                                Grimer          L28

// 7th, top - Junior Trainer Female               Pikachu         L29
//                                                Raichu          L29

// 7th, bottom - Beauty                           Pidgeotto       L29
//                                                Wigglytuff      L29

// 8th - Bird Keeper                              Spearow         L29
//                                                Fearow          L29

// Back, top level - Junior Trainer Female        Clefairy        L33


// Route 14
// ********************************************************************************
// 1st, left side - Biker                         Grimer          L28
//                                                Grimer          L28
//                                                Koffing         L28

// 2nd, left side - Biker                         Koffing         L29
//                                                Grimer          L29
 
// 3rd, left side - Biker                         Koffing         L26
//                                                Koffing         L26
//                                                Grimer          L26
//                                                Koffing         L26

// 1st, right side - Bird Keeper                  Farfetch'd      L33

// 2nd, right side - Biker                        Koffing         L29
//                                                Muk             L29

// 3rd, right side - Bird Keeper                  Spearow         L28
//                                                Doduo           L28
//                                                Spearow         L28

// 4th, right side - Bird Keeper                  Pidgeotto       L29
//                                                Fearow          L29


// Route 13
// ********************************************************************************
// Left Section
// ------------

// Left, bottom - Bird Keeper                     Pidgey          L26
//                                                Pidgeotto       L26
//                                                Spearow         L26
//                                                Fearow          L26

// Right, bottom - Junior Trainer Female          Pidgey          L27
//                                                Meowth          L27
//                                                Pidgey          L27
//                                                Pidgeotto       L27

// Farther right, middle - Junior Trainer Female  Poliwag         L30
//                                                Poliwag         L30

// Farthest right, top, left one - Beauty         Clefairy        L29
//                                                Meowth          L29

// Farthest right, top, right one - Beauty        Rattata         L27
//                                                Pikachu         L27
//                                                Rattata         L27

// Right Section
// -------------

// 1st - Junior Trainer Female                    Pidgey          L24
//                                                Meowth          L24
//                                                Rattata         L24
//                                                Pikachu         L24
//                                                Meowth          L24

// 2nd - Bird Keeper                              Pidgey          L29
//                                                Pidgeotto       L29

// 3rd - Junior Trainer Female                    Goldeen         L28
//                                                Poliwag         L28
//                                                Horsea          L28

// 4th - Junior Trainer Male                      Nidoran Male    L29
//                                                Nidorino        L29

// 5th - Fisherman                                Magikarp        L24
//                                                Magikarp        L24

// 6th - Rocker                                   Voltorb         L29
//                                                Electrode       L29

// Route 12
// ********************************************************************************
// 1st - Fisherman                                Poliwag         L21
//                                                Shellder        L21
//                                                Goldeen         L21
//                                                Horsea          L21

// 2nd - Fisherman                                Goldeen         L27

// 3rd - Fisherman                                Tentacool       L24
//                                                Goldeen         L24

// 4th - Fisherman                                Goldeen         L22
//                                                Poliwag         L22
//                                                Goldeen         L22

// Route 19 
// ********************************************************************************
// Down
// ----

// 1st, right, land - Swimmer                     Goldeen         L29
//                                                Horsea          L29
//                                                Staryu          L29

// 1st, left, land - Swimmer                      Tentacool       L30
//                                                Shellder        L30

// 1st, water - Swimmer                           Horsea          L30
//                                                Horsea          L30

// 2nd - Swimmer                                  Poliwag         L30
//                                                Poliwag         L30
//                                                Poliwhirl       L30

// 3rd - Swimmer                                  Horsea          L27
//                                                Tentacool       L27
//                                                Tentacool       L27
//                                                Goldeen         L27

// 4th - Swimmer                                  Goldeen         L29
//                                                Shellder        L29
//                                                Seaking         L29

// 5th, top - Swimmer                             Tentacool       L27
//                                                Tentacool       L27
//                                                Staryu          L27
//                                                Horsea          L27
//                                                Tentacruel      L27

// 5th, left - Beauty                             Poliwag         L27
//                                                Goldeen         L27
//                                                Seaking         L27
//                                                Goldeen         L27
//                                                Poliwag         L27

// 5th, right - Beauty                            Goldeen         L30
//                                                Seaking         L30

// 5th, bottom - Beauty                           Staryu          L29
//                                                Staryu          L29
//                                                Staryu          L29

// Left
// ----
// 1st, bottom - Swimmer                          Horsea          L28
//                                                Horsea          L28
//                                                Seadra          L28
//                                                Horsea          L28

// 1st, top - Swimmer                             Shellder        L31
//                                                Cloyster        L31

// 2nd - Beauty                                   Seadra          L30
//                                                Horsea          L30
//                                                Seadra          L30

// 3rd, outside cave - Beauty                     Seaking         L35


// After Seafoam Island Cave
// --------------------------
// 1st - Junior Trainer Female                    Tentacool       L30
//                                                Horsea          L30
//                                                Seel            L30

// 2nd - Swimmer                                  Staryu          L35
 
// 3rd, platform - Birdkeeper                     Fearow          L30
//                                                Fearow          L30
//                                                Pidgeotto       L30

// 4th - Junior Trainer Female                    Goldeen         L31
//                                                Seaking         L31

// 5th - Beauty                                   Poliwag         L31
//                                                Seaking         L31


// Cinnabar Island - Pokemon Mansion
// ********************************************************************************
// 2nd floor, 1st - Burglar                       Charmander      L34
//                                                Charmeleon      L34

// 3rd floor, right - Scientist                   Magnemite       L33
//                                                Magneton        L33
//                                                Voltorb         L33

// 1st floor - Scientist                          Electrode       L29
//                                                Weezing         L29

// Basement, 1st - Burglar                        Growlithe       L34
//                                                Ponyta          L34

// Basement, 2nd - Scientist                      Magnemite       L34
//                                                Electrode       L34

// 2nd floor, east to get to - Burglar            Ninetales       L38


// Cinnabar Island - Gym
// ********************************************************************************
// 1st - Burglar                                  Growlithe       L36
//                                                Vulpix          L36
//                                                Ninetales       L36

// 2nd - Supernerd                                Vulpix          L36
//                                                Vulpix          L36
//                                                Ninetales       L36

// 3rd - Supernerd                                Ponyta          L34
//                                                Charmander      L34
//                                                Vulpix          L34
//                                                Growlithe       L34

// 4th - Burglar                                  Ponyta          L41

// 5th - Supernerd                                Rapidash        L41

// 6th - Burglar                                  Vulpix          L37
//                                                Growlithe       L37

// 7th - Supernerd                                Growlithe       L37
//                                                Vulpix          L37

// 8th - Blaine                                   Growlithe       L42
//                                                Ponyta          L40
//                                                Rapidash        L42
//                                                Arcanine        L47


// Route 21
// ********************************************************************************
// 1st, left - Swimmer                            Staryu          L33
//                                                Wartortle       L33

// 1st, right - Swimmer                           Poliwhirl       L32
//                                                Tentacool       L32
//                                                Seadra          L32

// 2nd, right - Swimmer                           Starmie         L37

// 3rd, right - Fisherman                         Seaking         L33
//                                                Goldeen         L33

// 3rd, left - Fisherman                          Shellder        L31
//                                                Cloyster        L31

// 4th, bottom - Swimmer                          Seadra          L33
//                                                Tentacruel      L33

// 4th, top - Cueball                             Tentacool       L31
//                                                Tentacool       L31
//                                                Tentacruel      L31

// 5th, bottom - Fisherman                        Magikarp        L27
//                                                Magikarp        L27
//                                                Magikarp        L27
//                                                Magikarp        L27
//                                                Magikarp        L27
//                                                Magikarp        L27

// 5th, top - Fisherman                           Seaking         L28
//                                                Goldeen         L28
//                                                Seaking         L28
//                                                Seaking         L28

// Viridian City Gym
// ********************************************************************************
// Top - Blackbelt                                Machoke         L38
//                                                Machop          L38
//                                                Machoke         L38

// Bottom left - Tamer                            Arbok           L39
//                                                Tauros          L39

// Left, middle - Blackbelt                       Machoke         L43

// Center, 1st - Cooltrainer Male                 Sandslash       L39
//                                                Dugtrio         L39

// Center, 2nd - Blackbelt                        Machop          L40
//                                                Machoke         L40

// Center, 3rd - Tamer                            Rhyhorn         L43

// Above center, 1st - Cooltrainer Male           Rhyhorn         L43

// Above center, 2nd - Cooltrainer Male           Nidorino        L39
//                                                Nidoking        L39

// Center - Giovanni                              Rhyhorn         L45
//                                                Dugtrio         L42
//                                                Nidoqueen       L44
//                                                Nidoking        L45
//                                                Rhydon          L50


// Route 22
// ********************************************************************************
// 1st - Gary                                     Pidgeotto       L47
//                                                Rhyhorn         L45
//                                                Growlithe       L45
//                                                Exeggcute       L47
//                                                Alakazam        L50
//                                                (varies)        L53


// Victory Road
// ********************************************************************************
// First Floor
// -----------
// Middle - Cooltrainer Female                    Persian         L44
//                                                Ninetales       L44

// Top corner - Cooltrainer Male                  Ivysaur         L42
//                                                Wartortle       L42
//                                                Charmeleon      L42
//                                                Charizard       L42

// Second Floor
// ------------
// 1st - Blackbelt                                Machoke         L43
//                                                Machop          L43
//                                                Machoke         L43

// 2nd - Juggler                                  Drowzee         L41
//                                                Hypno           L41
//                                                Kadabra         L41
//                                                Kadabra         L41

// 3rd - Tamer                                    Persian         L44
//                                                Golduck         L44

// 4th - Juggler                                  Mr Mime         L48
 
// 5th, top right corner - Pokemaniac             Charmeleon      L40
//                                                Lapras          L40
//                                                Lickitung       L40

// Third Floor
// -----------
// Right, by item - Cooltrainer Male              Executor        L43
//                                                Cloyster        L43
//                                                Arcanine        L43

// Platform, center - Cooltrainer Female          Parasect        L43
//                                                Dewgong         L43
//                                                Chansey         L43

// Bottom, lower - Cooltrainer Male               Kingler         L43
//                                                Tentacruel      L43
//                                                Blastoise       L43

// Bottom, upper - Cooltrainer Female             Bellsprout      L43
//                                                Weepinbell      L43
//                                                Victreebel      L43


// Indigo Plateau
// ********************************************************************************
// 1st - Lorelei                                  Dewgong         L54
//                                                Cloyster        L53
//                                                Slowbro         L54
//                                                Jynx            L56
//                                                Lapras          L56

// 2nd - Bruno                                    Onix            L53
//                                                Hitmonchan      L55
//                                                Hitmonlee       L55
//                                                Onix            L56
//                                                Machamp         L58

// 3rd - Agatha                                   Gengar          L56
//                                                Golbat          L56
//                                                Haunter         L55
//                                                Arbok           L58
//                                                Gengar          L60

// 4th - Lance                                    Gyarados        L58
//                                                Dragonair       L56
//                                                Dragonair       L56
//                                                Aerodactyl      L60
//                                                Dragonite       L62

// 5th - Gary                                     Pidgeot         L61
//                                                Alakazam        L59
//                                                Rhydon          L61

// At the beginning, if you took Bulbasaur        Gyrados         L61
//                                                Arcanine        L63
//                                                Venusaur        L65

// At the beginning, if you took Charmander       Exeggutor       L61
//                                                Gyrados         L63
//                                                Charizard       L65

// At the beginning, if you took Squirtle         Arcanine        L61
//                                                Gyrados         L63
//                                                Blastoise       L65