
exports.up = function(knex, Promise) {
  return knex.schema.createTable('neighbors', neighbors => {
    neighbors.increments('id')
    neighbors.string('username')
    neighbors.string('password')
    neighbors.string('firstname')
    neighbors.string('lastname')
    neighbors.float('lat')
    neighbors.float('long')
    neighbors.string('image')
    neighbors.string('profile')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('neighbors')
};
