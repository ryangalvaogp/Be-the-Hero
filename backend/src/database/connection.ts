import knex from 'knex';
import configuration from '../../knexfile';
import dotenv from 'dotenv';

dotenv.config();

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

export const connection = knex(config);