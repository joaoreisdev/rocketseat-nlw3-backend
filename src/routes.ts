import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

//Criando rota para criação de orfanatos
routes.post('/orphanages', OrphanagesController.create);

export default routes;

//Explicando Rotas
//Rotas = conjunto
//Recurso = Usuário
//Métodos HTTP = GET, POST, PUT, DELETE

//Parâmetros
//Query params: http://localhost:3333/users?search=diego&page=2
//Rout params: http://localhost:3333/1 (usado p identificar um recurso)
//Body: http://localhost:3333/1 (Corpo da requisição com os dados)