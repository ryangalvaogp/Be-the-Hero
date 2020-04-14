const crypto = require('crypto');
const connection = require ('../database/connection');

module.exports = {
    /**Listagem de Ogs cadastradas */
    async index (request, response){
        const ongs = await connection ('ongs').select('*');
        return response.json(ongs);
        
    },


    /** Cadastrar Ongs */
    async create (request, response){
    
        const { Name, Email, Whatsapp, City, UF} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        
        await connection('newschema.ongs').insert({
    
            id,
            Name,
            Email,
            Whatsapp,
            City,
            UF,
        })
    
            return response.json({id, Name});
        
        }

};