// index.js
const express = require('express')
const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');


dotenv.config();

const app = express()
const PORT = 4000
const uri = process.env.NEXT_ATLAS_URI;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

const mongoClient = new MongoClient(uri , options);

const run = async () => {
    try {
        await mongoClient.connect()
        console.log('Conexão!!!')
        app.listen(PORT, () => {
            console.log(`API listening on PORT ${PORT} `)
        })
    } catch (err) {
        console.error('Erro ao conectar no banco:', err)
    }
    db =  mongoClient.db('finances')
};

run();

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app