import express from 'express'
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage'

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

//Criando rota para criação de orfanatos
app.post('/orphanages', async (request, response) =>{ 

    //Armazenando em variáveis as infos do json que está sendo enviado
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);
    
    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    });

    await orphanagesRepository.save(orphanage);
    
    return response.json({message : 'Hello World!'});

})

app.listen(3333);

