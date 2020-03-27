const express = require ('express');
const routes = express.Router();


const IncidentsController = require('./Controllers/IncidentsControllers')
const OngController = require ('./Controllers/OngControllers');
const ProfilesController = require ('./Controllers/Profilescontrollers');
const SessionController = require ('./Controllers/SessionControlers');

/**TODOS ROUTERS DE ONGS */
/**Listagem de Ongs cadastradas */
routes.get('/ongs', OngController.index);

/** Cadastrar Ongs */
routes.post('/ongs', OngController.create);


/**TODOS ROUTERS DE CASOS */
/**Criar Casos */
routes.post('/incidents', IncidentsController.create);
/**Listar Casos */
routes.get('/incidents', IncidentsController.index);
/**Deletar Casos */
routes.delete('/incidents/:id', IncidentsController.delete);
routes.get('/profile/', ProfilesController.index);


/** */
routes.post('/session', SessionController.create)

module.exports = routes;


    

/**
 * Métodos HTP:
 * 
 * GET: Buscar uma informação no Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros:
 * 
 * QUERY Params: Parâmetros enviados na rota após o sinal "?" no final da URL(Filtros, Paginação)
 * ROUTE Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo de requisição, utilizado para criar ou alterar recursos
 */