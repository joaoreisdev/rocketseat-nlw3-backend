import { request } from 'express';
import multer from 'multer';
import path from 'path';


export default {
    
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        //Função responsável por nomear o arquivo
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            
            //1par=erro, 2par=resultado
            cb(null, fileName);
        },
    })
};