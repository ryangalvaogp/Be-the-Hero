
exports.up = function(knex) {
  return  knex.schema.createTable('ongs', function(table){
        table.string ('id', 50).primary();
        
        
        table.string('name');
        table.string('email');
        table.string('whatsapp');
        table.string('city');
        table.string('uf');

        
    });
};

exports.down = function(knex) {
  
return knex.schema.dropTable('ongs');

};
