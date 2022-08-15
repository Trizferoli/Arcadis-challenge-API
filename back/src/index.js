const express = require('express');
const app = express();

require('dotenv').config()

const routes = require('./routes');

app.use(express.json());
app.use(routes);
app.listen(3000);
