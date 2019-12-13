
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
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient
};

function getRecipes() {
  return knex("recipes")
    .select("name");
}

function getShoppingList(recipe_id) {
  return knex
    .select("name", "quantity", "measurement")
    .from("recipe_ingredients")
    .join("ingredients", "recipe_ingredients.ingredient_id", "=", "ingredients.id")
    .where({ recipe_id: recipe_id });
}

function getInstructions(recipe_id) {
  return knex
    .select("step_number", "step")
    .from("steps")
    .where({ recipe_id: recipe_id });
}

function getRecipesByIngredient(ingredient) {
  return knex
    .select("recipes.name", "recipes.prep_time", "recipes.cook_time", "recipes.servings")
    .from("recipes")
    .join("recipe_ingredients", "recipes.id", "=", "recipe_ingredients.recipe_id")
    .join("ingredients", "recipe_ingredients.ingredient_id", "=", "ingredients.id")
    .where("ingredients.name", "like", `%${ingredient}%`)
    .first();
}