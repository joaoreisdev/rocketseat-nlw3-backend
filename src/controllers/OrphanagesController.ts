import {Request, Response} from 'express';

import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    async index(request: Request, response: Response) {
      
        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages);

    },

    async create(request: Request, response: Response){
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
    
    //Status(código http) 201 significa que algo foi criado
    return response.status(201).json(orphanage);
    }

};