import express from 'express'
import path from 'path';
import 'express-async-errors';

import './database/connection';

import routes from './routes';  
import errorHandler from './errors/handler';

//Cria aplicação
const app = express();
app.use(express.json())

app.use(routes)
//Configura acesso as imagens, 'static()'
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);

