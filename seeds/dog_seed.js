exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('dogs').del(),

        // Inserts seed entries
        knex('dogs').insert({
            image: 'http://www.dodogs.website/wp-content/uploads/2015/12/Border-Collie.jpg',
            name: 'Roscoe',
            breed: 'Border Collie',
            awesome_level: 10,
            fav_toy: 'Stick',
        }),
        knex('dogs').insert({
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Havanese0315.jpg',
            name: 'Clover',
            breed: 'Some Kinda Mutt',
            awesome_level: 10,
            fav_toy: 'Ball',
        }),
        knex('dogs').insert({
            image: 'http://buzzsharer.com/wp-content/uploads/2015/08/whippet-dog-black.jpg',
            name: 'Iago',
            breed: 'Whippet',
            awesome_level: 10,
            fav_toy: 'Food',
        })
    );
};
