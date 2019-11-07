const db = require('../data/db-config.js')

module.exports = {
     getRecipes, 
     getShoppingList,
     getInstructions
}

function getRecipes(){
     return db('recipes')
}
function getShoppingList(recipes_id) {
     return db.select('ingredients.name', 'recipes_ingredients.ingredient_quantity')
          .from('recipes_ingredients')
          .join('recipes', "recipes_ingredients.recipe_id", '=', 'recipes.id')
          .join('ingredients', 'recipes_ingredients.ingredient_id', '=', 'ingredients.id')
          .where('recipes.id', '=', recipes_id)
}
function getInstructions(recipes_id){
     return db.select('recipes.name', 'instructions.recipe_instructions')
     .from('instructions')
     .join('recipes', 'recipes.id', '=', 'instructions.recipe_id')
     .where('recipes.id', '=', recipes_id)
}


