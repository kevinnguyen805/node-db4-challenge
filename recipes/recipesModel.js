const db = require('../data/db-config.js')

module.exports = {
     getRecipes, 
     getShoppingList,
     getInstructions
}

function getRecipes(){
     return db('recipes')
}
function getShoppingList(id){
     return db.select('recipes.name', 'ingredients.name', 'recipes_ingredients.ingredient_quantity')
     .from('recipes_ingredients')
     .join('recipes', 'recipes_ingredients.recipe_id', '=', "recipes_id")
     .join('ingredients', 'ingredients.id', '=', 'recipes_ingredients.ingredient_id')
     .where({recipes_id:id})
}
function getInstructions(id){
     return db.select('recipes.name', 'instructions.recipe_instructions')
     .from('instructions')
     .join('recipes', 'recipes_id', '=', 'instructions.recipe_id')
     .where({recipies_id:id})
}