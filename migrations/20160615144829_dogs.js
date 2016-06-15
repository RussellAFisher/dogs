exports.up = function(knex, Promise) {
    return knex.schema.createTable('dogs', function(table) {
        table.increments();
        table.string('image');
        table.string('name');
        table.string('breed');
        table.integer('awesome_level');
        table.string('fav_toy');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dogs');
};
