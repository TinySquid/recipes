
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { name: 'Unsalted Butter' },
    { name: 'Sugar' },
    { name: 'Salt' },
    { name: 'Unbleached All-Purpose Flour' },
    { name: 'Pure Vanilla Extract' },
    { name: 'Cocoa' },
    { name: 'Red Potatoes' },
    { name: 'White Potatoes' },
    { name: 'Red or White Potatoes' },
    { name: 'Olive Oil' },
    { name: 'Kosher Salt' },
    { name: 'Freshly Ground Black Pepper' },
    { name: 'Minced Garlic' },
    { name: 'Minced Fresh Parsley' },
  ]);
};
