// Request index.

const mysql = require("mysql2/promise");
const mySqlKey = require("../keys.js");
const ldm = require("./localDatabaseManager")

module.exports = function(app) {
    app.get('/myPokemons', (req, res) => {
        getAllMyPokemons(req.body).then(data => {
            res.send(data);
        }).catch(err => {
            console.log('!!! Error when calling getAllMyPokemons(). ', err)
            res.sendStatus(500);
        });
    });
    app.get('/playerParty/:idArr', (req, res) => {
        try {
            res.send(ldm.getMyPokemonsFromString(req.params.idArr))
        } catch (err) {
            console.log(err)
            console.log('error @ get selectedPokemonList')
            res.sendStatus(500);
        }
    });

    app.get('/partyMoves/:idArr', (req, res) => {
        try {
            res.send(ldm.getMultibleMoves(req.params.idArr))
        } catch (err) {
            console.log(err)
            console.log('error @ get selectedPokemonList')
            res.sendStatus(500);
        }
    });

    app.get('/pokemonDB/all', (req, res) => {
        try {
            res.send(ldm.getAllPokemonsFormDB())
        } catch (err) {
            console.log(err)
            console.log('error @ get pokemonDB/all')
        }
    })

    app.get('/battleCalc', (req, res) => {
        try {
            res.send(ldm.getbattleCalc(JSON.parse(req.query.data)))
        } catch (err) {
            console.log(err)
            console.log('error @ get battleCalc')
        }
    })
}

async function getAllMyPokemons() {
    console.log('@@@ getAllMyPokemons funktion')
    const connection = await mysql.createConnection(mySqlKey);
    try {
        let allMyPokemons = await connection.query("SELECT * FROM myPokemons")
        connection.end()
        return allMyPokemons
    } catch (error) {
        console.log('!!! Error @ getAllMyPokemons(), ', error, new Date())
    }
}
