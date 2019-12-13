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
    {
      recipe_id: 2,
      step_number: 1,
      step: "Preheat the oven to 400 degrees F. "
    },
    {
      recipe_id: 2,
      step_number: 2,
      step: "Cut the potatoes in half or quarters and place in a bowl with the olive oil, salt, pepper, and garlic; toss until the potatoes are well coated. Transfer the potatoes to a sheet pan and spread out into 1 layer. Roast in the oven for 45 minutes to 1 hour or until browned and crisp. Flip twice with a spatula during cooking in order to ensure even browning. "
    },
    {
      recipe_id: 2,
      step_number: 3,
      step: "Remove the potatoes from the oven, toss with parsley, season to taste, and serve hot. "
    }
  ]);
};
