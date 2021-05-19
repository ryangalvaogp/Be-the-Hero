import { connection } from '../database/connection';
import { Request, Response } from 'express';
import { OngProps } from './OngController';

export default {
    async create(request: Request, response: Response) {
        const { id } = request.body;

        const ong = await connection<OngProps>('ongs')
            .where('id', id)
            .select('*')
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID.' });
        }

        return response.json(ong);
    },
};