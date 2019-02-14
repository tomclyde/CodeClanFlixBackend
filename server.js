const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const parser = require('body-parser');
const createRouter = require('./helpers/create_router.js');
app.use(parser.json());

app.get('/', (req, res) => {
});


MongoClient.connect('mongodb://localhost:27017')
.then((client)=> {
  console.log("HELLO WORLD");
  const db = client.db('media');
  const mediaCollection = db.collection('movies');
  const mediaRouter = createRouter(mediaCollection);
  console.log(mediaRouter);
  app.use('/api/movies', mediaRouter);
})
.catch(console.err);

app.listen(5000, function(){
  console.log(`Listening on port ${ this.address().port}`);
});
