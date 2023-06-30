import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


const mongoClient = new MongoClient('mongodb+srv://levymcruz:Mae97330060.@levydb.tqcncfd.mongodb.net/')
let db ;

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

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/input', async (req, res) => {
    const inputList = await db.collection("input").find().toArray()
    return res.send(inputList)
});



run();

export default app