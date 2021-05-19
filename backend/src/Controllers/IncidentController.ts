import { connection } from '../database/connection';
import { Request, Response } from 'express'
import generateUniqueId from '../utils/generateUniqueId';

export type IncidentProps = {
    id?: number | string
    title: string
    description: string
    value: string
    ong_id: string
};

export default {
    async index(request: Request, response: Response) {
        const { page = 1 } = request.query;

        const [count] = await connection<IncidentProps>('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)//@ts-ignore
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);//@ts-ignore

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },
    async create(request: Request, response: Response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        try {
            await connection<IncidentProps>('incidents').insert({
                id: generateUniqueId('integer'),
                title,
                description,
                value,
                ong_id,
            });

            return response.json(title);
        } catch (error) {
            return response.json(error);
        }
         

       
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection<IncidentProps>('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted. ' });
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send();

    },
};