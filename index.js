// Write your solution in this file!
// Declare a global variable `burgers` using const
const burgers = ['Hamburger', 'Cheeseburger'];

// Declare a global variable `featuredDrink` using let
let featuredDrink = 'Strawberry Milkshake';

// Function to add a new burger to the `burgers` array
function addBurger() {
  // Create a function-scoped variable `newBurger`
  const newBurger = 'Flatburger';
  // Add `newBurger` to the `burgers` array
  burgers.push(newBurger);
}

// If statement with a true condition
if (true) {
  // Create a block-scoped variable `anotherNewBurger`
  const anotherNewBurger = 'Maple Bacon Burger';
  // Add `anotherNewBurger` to the `burgers` array
  burgers.push(anotherNewBurger);
}

// Function to change the value of `featuredDrink`
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}
