
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', events => {
    events.increments()
    events.integer('organizer')
    events.string('name')
    events.float('lat')
    events.float('long')
    events.string('description')
    events.time('start_at')
    events.time('end_at')
    events.date('date')
    events.string('image_url')

    events.foreign('organizer').references('id').inTable('neighbors')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
