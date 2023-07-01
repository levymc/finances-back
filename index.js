const express = require('express')
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());


const mongoClient = new MongoClient('mongodb+srv://levymcruz:Mae97330060.@levydb.tqcncfd.mongodb.net/')
let db ;

app.listen(4000, () => {
  console.log(`Servidor Express rodando na url: http://localhost:4000`);
});

const run = async () => {
  try {
    await mongoClient.connect()
    console.log('Conexão!!!')
    
  } catch (err) {
    console.error('Erro ao conectar no banco:', err)
  }
  db =  mongoClient.db('finances')
};


app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/input', async (req, res) => {
  const inputList = await db.collection("input").find().toArray()
  return res.send(inputList)
});


run()
module.exports = app