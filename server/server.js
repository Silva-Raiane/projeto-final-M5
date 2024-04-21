import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './src/router/user.router.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const port = 8080;

app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

app.use('/api', router);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
});


app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
});