const express = require("express");
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

require('./requests/index.js')(app)
// require('./requests/getDatabaseFromApi.js')(app)
const databaseHandler = require('./requests/localDatabaseManager')

databaseHandler.isMoveLearnableForPokemon('onix', 5)
// databaseHandler.getPokemonObject('onix', 'string')

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})