
exports.seed = function (knex) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 2, measurement: "Cups" },
    { recipe_id: 1, ingredient_id: 2, quantity: 1.25, measurement: "Cups" },
    { recipe_id: 1, ingredient_id: 5, quantity: 1, measurement: "Teaspoon" },
    { recipe_id: 1, ingredient_id: 3, quantity: 0.25, measurement: "Teaspoon" },
    { recipe_id: 1, ingredient_id: 4, quantity: 5, measurement: "Cups" },
    { recipe_id: 1, ingredient_id: 6, quantity: 0.5, measurement: "Cups" },
  ]);
};
