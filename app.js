const express = require("express");
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

require('./requests/index.js')(app)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})