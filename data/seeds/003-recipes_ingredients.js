
exports.seed = function (knex) {
  return knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, ingredient_quantity: '1 handlful' },
    { recipe_id: 1, ingredient_id: 2, ingredient_quantity: '1 large' },
    { recipe_id: 1, ingredient_id: 3, ingredient_quantity: '1/4 cup' },

    { recipe_id: 2, ingredient_id: 4, ingredient_quantity: '2 slices' },
    { recipe_id: 2, ingredient_id: 5, ingredient_quantity: '3 strips' },
    { recipe_id: 2, ingredient_id: 6, ingredient_quantity: '1' },
    { recipe_id: 2, ingredient_id: 7, ingredient_quantity: '2' },
    { recipe_id: 2, ingredient_id: 1, ingredient_quantity: '2 slices' },
    
    { recipe_id: 3, ingredient_id: 8, ingredient_quantity: '3 scoops' },
    { recipe_id: 3, ingredient_id: 9, ingredient_quantity: '2 pumps' },
    { recipe_id: 3, ingredient_id: 10, ingredient_quantity: '4 sprays' }
  ]);
};
