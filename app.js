const express = require("express");
const app = express();
const config = require('./config')
const cors = require('cors');
const test = require('./test/index')

app.use(cors());

require('./requests/index.js')(app)

// test.runAllTests() 

app.listen(config.port, () => {
    console.log(`LETS GOO ${config.port}`)
})


