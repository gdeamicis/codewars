function cakes(recipe, available) {
  return Math.min(...Object.entries(recipe).map(recipeElement => {
    // recipeElement[0] = ingredient
    // recipeElement[1] = quantity
    if (available[recipeElement[0]] >= recipeElement[1]) return Math.floor(available[recipeElement[0]] / recipeElement[1]);
    return 0;
  }));
}

// Alternative solutions

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}

// Iterate over keys instead of entries

const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)