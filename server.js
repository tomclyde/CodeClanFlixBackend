const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.get('/api', (req, res) => {
  console.log("INDEX route has been requested");
  res.json({"message": "Hello world"});
});

app.listen(5000, function() {
  console.log(`All the magic is happening on port ${this.address().port}`);
});
