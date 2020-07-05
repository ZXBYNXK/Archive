// Darius Rain                                              Day 12 of Code                     			         Date:11-7-19
// Create an array of objects
// Use a object constructor function
// Print Out the first name of each person by most likely using a loop



var runProgram = function() {



var people = [];	

var person = function(firstName, lastName, profession) {
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.profession = profession;
		
}


var people = people.concat(new person("Elon", "Musk", `CEO of SpaceX`));
var people = people.concat(new person("Nikola", "Tesla", `Inventor`))
var people = people.concat(new person("John F.", "Kennedy", `35th U.S. President`))
var people = people.concat(new person("Malcom", "X", `American Minster`))
var people = people.concat(new person("D.R. J. Allen ", "Hynek", `American Astronomer`))
var people = people.concat(new person("Abraham", "Lincoln", `16th U.S. President`))
var people = people.concat(new person("Bob", "Marley", `Jamacian Singer-SongWriter`));
var people = people.concat(new person("Hermes", "Trismegistus", `High Priest of Egyptian Mystery Schools`))
var people = people.concat(new person("John F.", "Nash Jr.", `American Mathematicion`))
var people = people.concat(new person("Albert", "Einstein", `Theoretical Physicist`))
var people = people.concat(new person("Neils", "Bohr", `Danish Physicist`))
	
var iteratePeopleArray = function() {
			console.log(`_________________________________________________________________________________________________________________________`)
			console.log(``)
						console.log(`People`)
							console.log(``)
		for(let i = 0; i < people.length; i++) {


			console.log(`Person#:${i + 1} FIRSTNAME: ${people[i].firstName}, LASTNAME: ${people[i].lastName}, profession: ${people[i].profession}`)
			console.log(``);	
		
				}	

				console.log(`_________________________________________________________________________________________________________________________`)

}
iteratePeopleArray();	
}

runProgram();


