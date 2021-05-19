import { connection } from '../database/connection';
import { Response, Request } from 'express';
import { IncidentProps } from './IncidentController';

export default {
  async index(request: Request, response: Response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection<IncidentProps>('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
  },
};