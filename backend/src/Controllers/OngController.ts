import { connection } from '../database/connection';
import generateUniqueId from '../utils/generateUniqueId';
import { Request, Response } from 'express';

export type OngProps = {
    id: string | number
    name: string
    email: string
    whatsapp: string
    city: string
    uf: string
};

export default {
    async index(request: Request, response: Response) {
        const ongs = await connection<OngProps>('ongs').select('*');
        return response.json(ongs);
    },

    async create(request: Request, response: Response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId('hex');

        await connection<OngProps>('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id });
    },
}