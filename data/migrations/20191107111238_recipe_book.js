
exports.up = function(knex) {
  return knex.schema
     .createTable('recipes', tbl => {
          tbl.increments()
          tbl.string('name', 255).notNullable()
     })
     .createTable('ingredients', tbl => {
          tbl.increments()
          tbl.string('name', 255).notNullable()
     })
     .createTable('recipes_ingredients', tbl => {
          tbl.increments()
          tbl.integer('recipe_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('recipes')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
          tbl.integer('ingredient_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('ingredients')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
          tbl.string('ingredient_quantity').notNullable()
     })
     .createTable('instructions', tbl => {
          tbl.increments()
          tbl.string('recipe_instructions').notNullable()
          tbl.integer('recipe_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('recipes')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
     })
};

exports.down = function(knex) {
     return knex.schema
          .dropTableIfExists('recipes_ingredients')
          .dropTableIfExists('ingredients')
          .dropTableIfExists('recipes');
};
