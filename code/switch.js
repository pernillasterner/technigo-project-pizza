window.addEventListener("load", function () {
  // Setting variables
  const foodTypes = ["Pizza", "Pasta", "Salad"];
  const pizzaSubtypes = ["Napolitana", "Hawaian", "Pepperoni"];
  const pastaSubtypes = [
    "Spaghetti Carbonara",
    "Fettucine Alfredo",
    "Cheesy Tortellini",
  ];
  const saladSubtypes = ["Ceaser Salad", "Caprese Salad", "Greek Salad"];
  let foodSubtypes = [];
  let foodChoice;
  let userAge;
  let price;
  let confirmOrder;

  // Welcome and introduction
  alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? 
    - Click 'OK' to begin.`
  );

  while (true) {
    // Store name in variable and greet new user
    const username = prompt(`Please enter your name:`);

    // Check if the username is correct with no numbers or empty string
    if (username === "") {
      alert(`Oops, no name was entered.`);
      continue;
    } else if (!isNaN(parseInt(username))) {
      alert(`Oops, no numbers are allowed in the name.`);
    } else {
      alert(`Nice to meet you, ${username}!`);
      break;
    }
  }

  while (true) {
    // Make user select food type
    foodChoice = parseInt(
      prompt(`
    What type of food would you like to order?

    Enter a number:
    1. ${foodTypes[0]}
    2. ${foodTypes[1]}
    3. ${foodTypes[2]}

  `)
    );

    // Replace number with corresponding food type
    switch (foodChoice) {
      case 1:
        foodChoice = foodTypes[0];
        break;
      case 2:
        foodChoice = foodTypes[1];
        break;
      case 3:
        foodChoice = foodTypes[2];
        break;
      default:
        alert(`Invalid choice. Please select a number between 1 and 3.`);
        continue;
    }
    alert(`You've chosen ${foodChoice}!`);
    break;
  }

  // Make user select food subtype
  switch (foodChoice) {
    case foodTypes[0]:
      foodSubtypes = pizzaSubtypes;
      break;
    case foodTypes[1]:
      foodSubtypes = pastaSubtypes;
      break;
    case foodTypes[2]:
      foodSubtypes = saladSubtypes;
      break;
    default:
      alert(`Invalid ${foodChoice} type choice.`);
  }

  while (true) {
    // Prompt the subtypes corresponding food choice
    let subtypeChoice = parseInt(
      prompt(`
    Select a ${foodChoice} type

    Enter a number:
    1. ${foodSubtypes[0]}
    2. ${foodSubtypes[1]}
    3. ${foodSubtypes[2]}

    `)
    );

    // Translate number into corresponding subtype
    switch (subtypeChoice) {
      case 1:
        subtypeChoice = `${foodSubtypes[0]}`;
        break;
      case 2:
        subtypeChoice = `${foodSubtypes[1]}`;
        break;
      case 3:
        subtypeChoice = `${foodSubtypes[2]}`;
        break;
      default:
        alert(`Invalid choice. Please select a number between 1 and 3.`);
        continue;
    }

    alert(`You've chosen ${subtypeChoice}!`);
    break;
  }

  while (true) {
    // Ask user if adult or child
    userAge = parseInt(
      prompt(`Is this food for a child or adult? Type your age:`)
    );

    // Check if user is adult or child
    if (userAge >= 5 && userAge <= 18) {
      userAge = "child";
      price = 10;
    } else if (userAge > 18 && userAge <= 110) {
      userAge = "adult";
      price = 15;
    } else if (userAge < 5) {
      alert(
        `Oops, you are too little to make an order. Please ask a grown-up for assistance.`
      );
      continue;
    } else if (userAge > 110) {
      alert(`Oops, the age entered seems too high. Please enter a valid age.`);
      continue;
    } else {
      alert(`Oops, not a valid number`);
      continue;
    }
    break;
  }

  while (true) {
    // Ask user to confirm order
    confirmOrder = parseInt(
      prompt(`
    One ${userAge} sized ${foodChoice} will be prepared for you. That´ll be €${price}.
    Are you sure you want to order this?

    Enter a number:
    1. Yes
    2. No

`)
    );

    // Order confirmation
    switch (confirmOrder) {
      case 1:
        alert(`
      Thank you for your order! Your delicous meal will be 
      prepared.
      See you soon! 👋
    `);
        break;
      case 2:
        alert(`No problem, come back and order anytime you want.`);
        break;
      default:
        alert(`Invalid choice. Please select 1 for Yes or 2 for No.`);
        continue;
    }
    break;
  }
});
