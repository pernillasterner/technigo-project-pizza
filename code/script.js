// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

// Store name in variable and greet new user
const username = prompt(`Please enter your name:`);

alert(`Nice to meet you, ${username}!`);

// Step 2 - Food choice
let foodChoice = prompt(`
  What type of food would you like to order?

  Enter a number:
  1. Pizza
  2. Pasta
  3. Salad

`);

if (foodChoice === "1") {
  foodChoice = "Pizza";
} else if (foodChoice === "2") {
  foodChoice = "Pasta";
} else if (foodChoice === "3") {
  foodChoice = "Salad";
} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`);
}

alert(`You've chosen ${foodChoice}!`);

// Step 3 - Subtype choice
const pizzaSubtypes = ["Napolitana", "Hawaian", "Pepperoni"];
const pastsSubtypes = [
  "Spaghetti Carbonara",
  "Fettucine Alfredo",
  "Cheesy Tortellini",
];
const saladSubtypes = ["Ceaser Salad", "Caprese Salad", "Greek Salad"];
let foodSubtypes = [];

if (foodChoice === "Pizza") {
  foodSubtypes = pizzaSubtypes;
} else if (foodChoice === "Pasta") {
  foodSubtypes = pastaSubtypes;
} else if (foodChoice === "Salad") {
  foodSubtypes = saladSubtypes;
} else {
  alert(`Invalid ${foodChoice} type choice.`);
}

// Prompt the subtypes corresponding food choice
let subtypeChoice = prompt(`
  Select a ${foodChoice} type

  Enter a number:
  1. ${foodSubtypes[0]}
  2. ${foodSubtypes[1]}
  3. ${foodSubtypes[2]}

`);

// Translate number into corresponding subtype
if (subtypeChoice === "1") {
  subtypeChoice = `${pizzaSubtypes[subtypeChoice - 1]}`;
} else if (foodChoice === "2") {
  subtypeChoice = `${pastaSubtypes[subtypeChoice - 1]}`;
} else if (foodChoice === "3") {
  subtypeChoice = `${saladSubtypes[subtypeChoice - 1]}`;
} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`);
}

alert(`You've chosen ${subtypeChoice}!`);

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here

/*

Select a ${foodChoice} type

Enter a number:
1. From array
2. From array
3. From array



 */
