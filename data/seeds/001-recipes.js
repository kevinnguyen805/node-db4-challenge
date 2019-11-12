
exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: 'Quesadilla' },
    { name: 'BLT sandwich' },
    { name: 'Ice Cream Sundae' }
  ]);
};
