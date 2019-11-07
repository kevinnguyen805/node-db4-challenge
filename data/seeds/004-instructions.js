
exports.seed = function (knex) {
  return knex('instructions').insert([
    { recipe_id: 1, recipe_instructions: 'Grab your tortilla, heat it up a bit on the grill, throw on cheese and a bit of sourcream, throw it into a panini maker.'},
    { recipe_id: 2, recipe_instructions: 'Grab two slices of bread, cook a few slices of bacon, and throw everything together into the sandwich and grill it!'},
    { recipe_id: 3, recipe_instructions: 'Grab a suitable bowl and toss in 3 scoops of ice cream. Throw on some whipped cream and top it all off with hot fudge.'}
  ]);
};