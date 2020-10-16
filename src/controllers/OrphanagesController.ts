import {request, Request, Response} from 'express';

import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    //Lista orfanatos
    async index(request: Request, response: Response) {
      
        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages);

    },

    async show(request: Request, response: Response) {
        
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanage = await orphanagesRepository.findOneOrFail(id);

        return response.json(orphanage);

    },

    //Cria um orfanato
    async create(request: Request, response: Response){
        console.log(request.files);
        
       
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
        
        //'as' instrui o código que request.files é um array de arquivos
        const requestImages = request.files as Express.Multer.File[];
        //Percorre o array das imagens e retorna um obj contentdo o path
        const images = requestImages.map(image => {
            return { path: image.filename }
        })
        
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });

        await orphanagesRepository.save(orphanage);
        
        //Status(código http) 201 significa que algo foi criado
        return response.status(201).json(orphanage);
    }

};