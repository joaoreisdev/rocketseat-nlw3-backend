import express from 'express'
import './database/connection'
//Cria aplicação
const app = express();
app.use(express.json())

//Rotas = conjunto
//Recurso = Usuário
//Métodos HTTP = GET, POST, PUT, DELETE

//Parâmetros
//Query params: http://localhost:3333/users?search=diego&page=2
//Rout params: http://localhost:3333/1 (usado p identificar um recurso)
//Body: http://localhost:3333/1 (Corpo da requisição com os dados)


app.get('/users/:id', (request, response) =>{ 
    return response.json({message : 'Hello World!'});
})

app.listen(3333);

