// Request index.

const mysql = require("mysql2/promise");
const mySqlKey = require("../keys.js");

module.exports = function(app) {
    app.get('/myPokemons', (req, res) => {
        getAllMyPokemons().then(data => {
            res.send(data[0]);
        }).catch(err => {
            console.log('!!! Error when calling getAllMyPokemons(). ', err)
            res.sendStatus(500);
        });
    });
}

async function getAllMyPokemons() {
    console.log('@@@ getAllMyPokemons funktion')
    const connection = await mysql.createConnection(mySqlKey);
    try {
        return await connection.query("SELECT * FROM myPokemons")
    } catch (error) {
        console.log('!!! Error @ getAllMyPokemons(), ', error, new Date())
    }
}