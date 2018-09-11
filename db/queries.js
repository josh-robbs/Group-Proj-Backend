const database = require("./database-connection")

module.exports = {
    list(tableName) {
        return database(tableName).select()
    },
    read(tableName, id) {
      return database(tableName).select().where('id', id)
    },
    eventById(id){
      return database('events')
      .select('events.name', 'events.lat', 'events.long', 'events.description', 'events.start_at', 'events.end_at', 'events.date', 'events.image_url', 'neighbors.firstname', 'neighbors.lastname', 'neighbors.image')
      .where('events.id', id)
      .fullOuterJoin('neighbors','neighbors.id','events.organizer')
    },
    post(tableName, newEvent) {
      return database(tableName)
        .insert(newEvent)
        .returning('*')
        .then(record => record[0])
    },
    update(tableName, id, newEvent) {
      return database(tableName)
        .update(newEvent)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deleteOne(tableName, id) {
      return database(tableName)
        .delete()
        .where('id', id)
    }
}
