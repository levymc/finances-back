const express = require('express');
// const { MongoClient, ObjectId } = require('mongodb');
// const cors = require('cors');
// const dotenv = require('dotenv');

dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());


// const mongoClient = new MongoClient('mongodb+srv://levymcruz:Mae97330060.@levydb.tqcncfd.mongodb.net/')
let db ;

const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app