
exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return knex('events').insert([
        {organizer: 1,
        name: "Help Old Man McDougle water his Plants",
        lat: 39.756571,
        long: -105.003082,
        description: "This old guy is crotchety, but his plants don't deserve to die!",
        start_at: '16:00:00',
        end_at: '16:30:00',
        date: '13.11.2018',
        image: 'https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },{organizer: 2,
        name: "Help remove trash around the Platte River",
        lat: 40.087801,
        long: -94.724166,
        description: "People have been littering all over the Platte river",
        start_at: '07:00:00',
        end_at: '09:30:00',
        date: '17.11.2018',
        image: 'https://images.pexels.com/photos/1353365/pexels-photo-1353365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
      },{organizer: 3,
        name: "Help Clean up the local park and build new recycle bins",
        lat: 39.994062,
        long: -105.266763,
        description: "This park has been looking pretty nasty with these punk college students leaving their trash all over the place, help me clean up after these trustfunders!",
        start_at: '07:00:00',
        end_at: '10:00:00',
        date: '24.11.2018',
        image: 'https://images.pexels.com/photos/983436/pexels-photo-983436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },{organizer: 4,
        name: "Dog Crap Removal at Columbine Knolls Grove Park",
        lat: 39.594617,
        long: -105.064446,
        description: "Lots of dog scat up in here--too much!",
        start_at: '18:00:00',
        end_at: '18:30:00',
        date: '03.12.2018',
        image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ]);
  });
};
