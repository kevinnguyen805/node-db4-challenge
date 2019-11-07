
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { name: 'cheese' },
    { name: 'tortilla' },
    { name: 'sour cream' },

    { name: 'bread' },
    { name: 'bacon' },
    { name: 'lettuce' },
    { name: 'tomatoes' },

    { name: 'ice cream' },
    { name: 'hot fudge' },
    { name: 'whipped cream' }
  ]);
};
