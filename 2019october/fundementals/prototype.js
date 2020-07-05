//SORRY IM LATE WAS WORKING ON FINDING THE CORRECT CODE TO USE HAD TO ADD EXTRA CONSOLE.LOGS BELOW IN THE ENGINE FUNCTIONS. I THINK IT IS BECAUSE MY NODE VERSION IS 8.11.1 INSTEAD OF 10.15.1


//DARIUS RAIN COHORT 9E




var readline = require('readline');

var rl = readline.createInterface({

	input: process.stdin,
	output: process.stout,



});



var globalInput = function(question, theCallBack) {
	rl.question(question, function(answer) {
		rl.close();
		theCallBack(answer);
		});
	}
	
	
	
	
var byCarNamePrice = [];
	
var customersNames = 0;

var customerIds = 0;

var temporaryPrice = 0;

var carInventory =  [];

var customerInPossesion = [];

var custNames = [];

var custIds = 0;
var carIds = 0;

var customerIdGenerator = function() {
	
custIds += 1;


}

var veichleIdGenerator = function() {

carIds += 1;


}

var customerFormEngine = function() {

	rl.question("What is the customers name?", function(name) {
		rl.question("What car does the customer want", function(car) {
		 
			let temporaryArrayForString = [`CUSTOMER ID#: ${custIds} CUSTOMER NAME: ${name} RETURN-DATE: ${dateDue}`];
				temporaryArrayForString.push(carInventory)	
				console.log(`CUSTOMER:~"${name}" has been added! IDENTIFICATION CODE:~${custIds}`)		
				
				console.log(`INVENTORY LIVE`);
				console.log(carInventory)	
});
});

}

var carRegistrarFormEngine = function() {
	console.log(`What is the make and model of this car?`)
	rl.question(`What is the make and model of this car?`, function (newCar) {
		console.log(`What is going to be the price of this car?`)
		rl.question(`What is going to be the price of this car?`, function (price) {
			console.log(`And what will be the tax for this car?`)
			rl.question(`And what will be the tax for this car?`, function (tax) {
				veichleIdGenerator();
				let temporaryArrayForString = [`CARID#:~ ${carIds}  CAR NAME: ${newCar} PRICE: ${price} Tax:${tax} TOTAL-PRICE: ${parseInt(price) + parseInt(tax)}`];
					carInventory.push(temporaryArrayForString);
					console.log(`NEW-CAR:~:${newCar} has been added! IDENTIFCATION CODE:~${carIds}`)	
					console.log(`INVENTORY LIVE \n`);
					console.log(`${carInventory} \n`)	
					rl.close()
	
	
	});		 
});
});
}


 


carRegistrarFormEngine();
///customerFormEngine();


