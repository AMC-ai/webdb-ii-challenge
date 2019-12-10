
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl.bigInteger('vin')
            .notNullable()
            .unique()
            .index();

        tbl.string('make', 255)
            .notNullable()
            .index();

        tbl.string('model', 255)
            .notNullable()
            .index();

        tbl.integer('milage')
            .notNullable()
            .index();

        tbl.string('transmission', 255)
            .index();

        tbl.string('titleStatus', 255)
            .index();

    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExits('cars');
};
