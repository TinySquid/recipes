exports.seed = function (knex) {
  return knex('steps').insert([
    {
      recipe_id: 1,
      step_number: 1,
      step: "Cream butter and sugar. Add vanilla. Add flour and salt and blend well. Divide dough in half. Add cocoa to 1/2 of dough. Let rest. Roll 1/4 inch cylinders of chocolate and plain vanilla dough about 12 inches long. Arrange in checkerboard by alternating 6 cylinders of chocolate and vanilla dough, contrasting each time to six layers total. Press tightly. Wrap in plastic wrap and chill at least 1/2 hour."
    },
    {
      recipe_id: 1,
      step_number: 2,
      step: "Preheat oven to 350 degrees. With a sharp knife, slice the dough into rounds about 1/3-inch thick. Place 1 inch apart on a parchment covered baking sheet. Bake for about 10 minutes or until lightly golden. "
    },
  ]);
};
