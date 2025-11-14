import express from 'express';
import cors from 'cors';
import endpoints from './controller/usuarioController.js';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

app.use(endpoints);

app.listen(process.env.PORT, () =>
  console.log(`API rodando na porta ${process.env.PORT}`)
);
