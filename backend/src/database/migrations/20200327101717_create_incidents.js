
exports.up = function(knex) {
  
    return  knex.schema.createTable('incidents', function(table){ 
    table.increments ();

  table.string('Titulo');
  table.string('Descricao');
  table.decimal('Valor');

  table.string('ong_id');
  table.foreign('ong_id').references('id').inTable('ongs');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
