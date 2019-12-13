exports.seed = function (knex) {
  return knex('recipes').insert([
    { name: 'Checkerboard Cookies', prep_time: 80, cook_time: 10, servings: 'Approximately 4 dozen cookies' },
    { name: 'Garlic Roasted Potatoes', prep_time: 10, cook_time: 60, servings: '8 Servings' },
  ]);
};
