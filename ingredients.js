const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let x = 0;
while (x < ingredients.length) {
  console.log(ingredients[x]);
  x++;
}

// Write a for loop that prints out the contents of ingredients:

for (ingredient of ingredients) {
  console.log(ingredient);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i])
}