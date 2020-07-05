//			Objects And Arrays Theory  			Darius 			Rain 			October 		2019
var _Rental_Shop_Live = {
	//CREATED AN OBJECT TO REPRESENT THE INVENTORY OF THE DEALERSHIP.
	//ALONG WITH CLASS A VEHICLES MEANING HIGHER PRICES QUALITY CAR AND B CHEAPER PRICES AVERAGE CAR
	
	_Cars: { // **********CLASS A**************  
					
		_Chevys: { // **********CLASS A CHEVYS*************

					//***MAKE AND MODALS TO PRINT OUT TO EMPLOYEES OR CUSTOMERS***
				_Make_Modals: ["2019 Chevorlet Avenger", "2019 Chevorlet Camaro", "2019 Chevorlet Blazer"],
	
				_Avenger_2019: {//2019 AVENGER OBJECT 
						_Price_By_Day: [`300.43`, `600.21`, `850.45`, `1000.78`, `1180.22`], //ARRAY OF PRICES BY DAY GOING BY DAY ONE "DAY ONE [0] DAY2 [1]"
							     	 																														 //AND TO ACCESS BY DOING |..._Avener_2019._Price_By_Day[...];|
						_Price_By_Week: [`1200.54`, `2200.43`, `3200.67`,],
						_Price_By_Month: `4190.84`,
						_Qty: 3,
						_Colors: [`White`, `Red`, `Black`]	
									     },	
					
				_Camaro_2019:  {
						_Price_By_Day: [`300.43`, `600.21`, `850.45`, `1000.78`, `1180.22`], //ARRAY OF PRICES BY DAY GOING BY DAY ONE "DAY ONE [0] DAY2 [1]"
							     	 																														 //AND TO ACCESS BY DOING |..._Avener_2019._Price_By_Day[...];|
						_Price_By_Week: [`1200.54`, `2200.43`, `3200.67`,],
						_Price_By_Month: `4190.84`,
						_Qty: 4,
						_Colors: [`Black`, `White`, `Silver`]
											 },
											 
			  _Blazer_2019:  {
            _Price_By_Day: [`300.43`, `600.21`, `850.45`, `1000.78`, `1180.22`], //ARRAY OF PRICES BY DAY GOING BY DAY ONE "DAY ONE [0] DAY2 [1]"
							     	 																														 //AND TO ACCESS BY DOING |..._Avener_2019._Price_By_Day[...];|
						_Price_By_Week: [`1200.54`, `2200.43`, `3200.67`,],
						_Price_By_Month: `4190.84`,
						_Qty: 6,
						_Colors: [`Green`, `Orange`, `Blue`]
											 },
	
	
					}



}


}
var _Out = []
var _Customers = []
var custnum = 0;
var upcustnum = function() {
custnum += 1;
}
var _Add_Customer = function(name, age, car, liscnum, duedate) {
	
	
	this.name = name;
	this.age = age;
	this.liscnum = liscnum;
	this.duedate = duedate;
	upcustnum();
	var custarr = [`| CUSTOMER#: ${custnum} | NAME: ${name} | AGE: ${age} | LISCENCE#: ${liscnum} |`]
  var outarr = [`| CUSTOMER#: ${custnum} | CAR: ${car} | DUEDATE: ${duedate} |`]
	_Customers = _Customers.concat(custarr)
	_Out = _Out.concat(outarr)
}

_Add_Customer("John", "32", "Avenger", "145193", "10-24")
_Add_Customer("Jorge", "32", "Blazer", "124193", "10-26")
_Add_Customer("Jake", "32", "Camaro", "123593", "10-23")
_Add_Customer("Jordan", "32", "Camaro", "520193", "10-25")
_Add_Customer("Joshua", "32", "Blazer", "826693", "10-25")



//new Array();


console.log(_Customers);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

 console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
console.log(_Out);










