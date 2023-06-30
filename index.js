const express = require('express')
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express()

const run = async () => {
  try {
    await mongoClient.connect()
    console.log('Conexão!!!')
    app.listen(process.env.PORT, () => {
        console.log(`Servidor Express rodando na url: http://localhost:${process.env.PORT}`);
    });
  } catch (err) {
    console.error('Erro ao conectar no banco:', err)
  }
  db =  mongoClient.db('finances')
};

run()

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/input', async (req, res) => {
  const inputList = await db.collection("input").find().toArray()
  return res.send(inputList)
});



module.exports = app