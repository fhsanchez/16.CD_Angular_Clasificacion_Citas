const express = require("express");
const mongoose = require('./server/config/mongoose');
const Author = require('./server/models/quoteRanks');
const router_authors = require('./server/config/routes_authors');
const router_quote_ranks = require('./server/config/routes_quote_ranks');
const cors = require('cors');

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Nueva linea despues de la Modularizacion


require('./server/config/routes_authors.js')(app)
require('./server/config/routes_quote_ranks.js')(app)


app.listen(9001, () => {
  console.log("Escuchando en el puerto 9001");
});
