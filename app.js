const express = require("express");
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

require('./requests/index.js')(app)
// require('./requests/getDatabaseFromApi.js')(app)

const databaseHandler = require('./requests/localDatabaseManager')
// databaseHandler.isMoveLearnableForPokemon('splash')
// databaseHandler.getMultiblePokemons([0, 150, 50])
// databaseHandler.getMultibleMoves(['pound','karate-chop'])

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})