import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// const mongoClient = new MongoClient(process.env.NEXT_ATLAS_URI);

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳');
});

app.get('/about', (req, res) => {
  res.send('This is my about route..... ');
});

export default app;
