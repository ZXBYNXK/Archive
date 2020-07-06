var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

var availableCars = [
  `Honda Civic`,
  `Nissan Maxima`,
  `Chevy Camaro`,
  `Ford Mustang`,
  `Mercedes S-Class`,
];

var carRentalPrice = [30, 40, 90, 90, 110];

var rentedCars = [];
var x = 0;
console.log(`Welcome to JavaScript car rentals!`);
console.log(``);
console.log(`Available Cars`);
for (let i = 0; i < availableCars.length; i++) {
  x++;
  console.log(`  Car#:${x}. CarName: ${availableCars[i]}`);
}

rl.question("Select a car and Length of Days:", function (answer) {
  var answers = answer.trim().split(",");
  //console.log(answers)
  var carNumber = answers[0].trim();
  var numberOfDays = answers[1].trim();
  console.log(
    `You selected the, CAR#: ${carNumber} CAR NAME: ${
      availableCars[carNumber - 1]
    }`
  );
  console.log(`This car rents for XXXXXXX per day `);
  console.log(`You are renting this car for ${numberOfDays} days.`);
  console.log(availableCars[answers[0] - 1]);
  ("THE TOTAL TAX = XXXXXXX");
  ("THE TOTAL COST = XXXXXXX");
});

function rentCar(carChoice, numOfDaysRented) {}
