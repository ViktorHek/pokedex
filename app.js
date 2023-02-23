const express = require("express");
const app = express();
const config = require("./config");
const cors = require("cors");
var bodyParser = require("body-parser");

const test = require("./test/index");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./requests/index.js")(app);

// test.runAllTests()

app.listen(config.port, () => {
  console.log(`LETS GOO ${config.port}`);
});
