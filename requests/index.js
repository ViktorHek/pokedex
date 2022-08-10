// Request index.

// const mysql = require("mysql2/promise");
// const mySqlKey = require("./keys.json");


module.exports = function(app) {
    app.post('/save', (req, res) => {
        saveData(req.body).then(data => {
            res.status(200).send('Successfully saved',JSON.stringify(data));
        }).catch(err => {
            res.send(500);
        });
    });
}

async function saveData(data) {
    console.log('@@@ saving data funktion')
    console.log('data being saved: ', data)
}

// const insertIntoDB = async () => {
//   const connection = await mysql.createConnection(mySqlKey);
//     try {
//         await connection.query(
//             "INSERT INTO myPokemons (UID, pokemonID, name, move1, move2, move3, move4) VALUES (3, 3, 'tre', 0110, null, 2020, null)"
//         );
//         console.log("** Pokemon was succesfully saved **");
//     } catch (error) {
//         console.log(error);
//     };
// };