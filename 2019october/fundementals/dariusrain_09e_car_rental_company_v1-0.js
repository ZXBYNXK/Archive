// NAME: Darius Rain,                                  DOCUMENT: Version1.0 Arrays ~RENTALSHOP HOMEWORK (DUE 10-24)~                              CLASS: 9evening 

//DATE:10-23-19;

// BUILD BLANK ARRAYS THAT ARE READY TO TAKE VALUES FOR ANY DATA INCOMING FROM LATER ON FUNCTIONS;

var customers = [];
var inLot = [];
var outLot = [];
var numIdCust = 0;
var numIdCar = 0;

// BUILD CONSTRUCTORFUNCTIONS TO ELIMINATE D.R.Y CODE, MEANING CREATE FUNCTION THAT IS REUSABLE FOR ADDING AND OR REMOVING SPECIFIC DATA TO AND FROM THE ABOVE ARRAYS.
function customerForm(customername, liscnum) {
    this.customername = customername;
    this.liscnum = liscnum;

    numCustIdGenerator();
    let newCust = [`CUSTOMER ID#:~${numIdCust} NAME: ${customername} LISCENCE#:~${liscnum} |`]

    customers = customers.concat(newCust);
}

var newCar = function(brand, color, year) {

    this.brand = brand;
    this.color = color;
    this.year = year;

    numCarIdGenerator();
    let newCars = [`CAR ID#:${numIdCar} (MAKE\MODEL~COLOR~YEAR):${brand}~${color}~${year} `]
    inLot = inLot.concat(newCars);
}

function numCustIdGenerator() {

    numIdCust += 1;
}

function numCarIdGenerator() {

    numIdCar += 1;
}

function checkOut(customer, car, carid, datedue, price) {
    this.customer = customer;
    this.car = car;
    this.carid = carid;
    this.datedue = datedue;
    this.price = price;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i].includes(customer)) {
            for (let j = 0; j < inLot.length; j++) {

                if (inLot[j].includes(car) && inLot[j].includes(carid)) {

                    let deal = [`PRICE: ${price} | DATEDUE: ${datedue}`]
                    outLot = outLot.concat(`${customers[i]} ${deal}`, `${inLot[j]} |`)
                    //outLot = outLot.concat(customers[i])
                    inLot.splice(j, 1);
                }

            }

        }

    }
}

function returnCar(customer) {
    this.customer = customer;
    for (let i = 0; i < outLot.length; i++) {
        if (outLot[i].includes(customer)) {
            let nextIndex = i + 1;
            inLot = inLot.concat(outLot[nextIndex]);
            outLot.splice(i, 2);

        }
    }
}

customerForm("Nikki Klark", "32102");
// customer id = 1 THIS HAPPENS BECUASE I MADE A FUNCTION ABOVE TO ADD 1 EVERYTIME THIS CONSTRUCTOR FUNCTION IS CALLED, GIVING IT UNIQUE CHARACHTERS TO ERRORPROOF IT A LITTLE MORE. 
customerForm("James Arnold", "23411");
// customer id = 2
customerForm("Vince Von Braun", "22321");
// customer id = 3
customerForm("Marvin Kolzstof", "23120");
// customer id = 4

newCar("Tesla", "White", "2017-Sedan-T500");
// car id = 1 // SAME THING HERE
newCar("Ford", "Black", "2015-Truck-F150");
// car id = 2
newCar("Honda", "Turqouise", "2016-Sedan-Civic");
// car id = 3
newCar("Toyota", "Green", "2013-Van-Oddysey");
// car id = 4
newCar("Saab", "Beige", "2012-Sport");
// car id = 5
newCar("Dodge", "Black", "2019-Sport-Charger");
// car id = 6

checkOut("James Arnold", "Saab", "5", "10-22-2019", "4300");
// THINK OF THE CHECKOUT AND RETURNCAR FUNCTIONS TO HAVE AN I/O TYPE OF RELATIONSHIP
checkOut("Nikki Klark", "Tesla", "1", "10-24-2019", "3200");
checkOut("Vince", "Toyota", "4", "10-24-2019", "3300");
checkOut("Marvin Kolzstof", "Dodge", "6", "10-24-2019", "1200");

returnCar("James Arnold");

// HERE GOES A TEST TRY IT OUT 
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CustomerManifest~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log(customers);
console.log(`                                                                                                                                   `);
console.log(`                                                                                                                                   `);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~InLot~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log(inLot)
console.log(`                                                                                                                                   `);
console.log(`                                                                                                                                   `);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~OutLot~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log(outLot)
console.log(`                                                                                                                                   `);
console.log(`                                                                                                                                   `);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
