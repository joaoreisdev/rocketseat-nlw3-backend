import express from 'express'
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';  
import errorHandler from './errors/handler';

//Cria aplicação
const app = express();

/*Cors libera para mais de um dominio consumir a API, exemplificando assim é possível mais de um front
consumi-la*/
app.use(cors());
app.use(express.json());
app.use(routes)
//Configura acesso as imagens, 'static()'
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);

