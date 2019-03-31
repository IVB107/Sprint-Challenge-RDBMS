
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('Projects', table => {
      table.increments(); // Adds 'id' form in table AND sets it as Primary Key

      table
        .string('Name', 128)
        .notNullable()
        .unique();
      
      table
        .string('Description', 255)
        .notNullable();

      table
        .boolean('Completed')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('Actions', table => {
      table.increments();

      table
        .string('ActionType', 128)
        .notNullable()
        .unique();

      table 
        .string('Notes', 255)
        .notNullable();

      table
        .boolean('Completed')
        .notNullable()
        .defaultTo(false);

      table
        .integer('Project_ID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    })
};

exports.down = function(knex, Promise) {
  
};
