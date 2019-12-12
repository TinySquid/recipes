
/* getRecipes(): should return a list of all recipes in the database.
SELECT name FROM recipes;
*/
/* getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
SELECT quantity, name FROM recipe_ingredients
JOIN ingredients ON ingredients.id =  ingredient_id
WHERE recipe_id = 1;
*/
/* getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
SELECT step_number, step FROM steps WHERE recipe_id = 1
*/
const knex = require('../../data/dbConfig');

module.exports = {
  getRecipes
};

function getRecipes() {
  return knex("recipes")
    .select("name");
}