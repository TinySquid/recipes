
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { name: 'Unsalted Butter' },
    { name: 'Sugar' },
    { name: 'Salt' },
    { name: 'Unbleached All-Purpose Flour' },
    { name: 'Pure Vanilla Extract' },
    { name: 'Cocoa' },
  ]);
};
