const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.post('/setRecords', mongoPractice.createMovie);

app.get('/getRecords', mongoPractice.getMovies);

app.listen(4000);