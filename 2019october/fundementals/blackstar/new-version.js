const readline = require('readline');
const fs = require('fs');
var rl = readline.createInterface({

	input: process.stdin,
	output: process.stout,



});

var logo = fs.readFileSync('blackstar_ascii_logo.txt', 'utf8')
var logo2 = fs.readFileSync('blahhh.txt','utf8')

var agentNames = [`Darius`]
var agentAccounts = []; 
var backupAccounts = []; 

var adminAccounts = [`Darius Googles`];
var date = Date.now();

var showAgentNames = function() {
	console.log(`Agent Names:~~${agentNames}`);


}
var adminRegister = function() {
console.log(``)
console.log(`Admin Name?`)
rl.question(``, function(name) {
console.log(``)
console.log(`Admin Name Confirmation>`)
rl.question(``, function(name2) {
console.log(``)
console.log(`password?`)
rl.question(``, function(password) {
console.log(``)
console.log(`password confimation`)
rl.question(``, function(password2) {
		if(name == name2 && password == password2){
			let tempArr = [`${name} ${password}`]
			let tempArr2 = [name]
			adminAccounts = adminAccounts.concat(tempArr);
			adminNames = adminNames.concat(tempArr2);
			console.log(`ADMIN NAME CONFFIRMED!`)
			console.log(``)
			adminPage();
		
		  	
		  	
		 
		
		}else {
			console.log(`Sorry not matching Try again`)
			adminPage();
			//theEval();
		
		}



});
});
});
});






}
var adminPage = function (){
console.log(logo)
console.log(`What do you want to do Mr.Admin?     See all account information?('all info')  See all agents registered('all agents') `);	
	console.log(`                                      Create an agent account('create agent')   Create new Admin('create admin')`);
	rl.question(``, function(choice){
		switch(choice){
		
			case 'all info': 
				console.log(`All Account Information`);
				console.log(``)
				console.log(``)
				console.log(backupAccounts);
				adminPage();
				break;
			
			case 'all agents':
				console.log(`All registered agents`);
				console.log(``)
				console.log(``)
				console.log(agentNames);
				adminPage();	
				break;
			case 'create agent':
				console.log(`Create an agent account`)
				console.log(``)
				console.log(``)
				agentRegister();
				
			case 'createAdmin':
			console.log(`Create a fellow admin`);
				console.log(``)
				console.log(``)
				registerAdmin();		
				break;
		}
	
	
	
	
	
	
	})



}

var login = function() {
console.log(`Agent Name --full name.`)
rl.question(``, function(name) {
console.log(``)
console.log(`Password --passphrase`)
rl.question(``, function(password) {
console.log(``)
console.log(`Military Id --your given MID.`)
rl.question(``, function(id){
console.log(``)
console.log(`Checking ${name} , ${id}, ${password}...`)
	
	for(let i =0; i < backupAccounts.length; i++){
			
		if(backupAccounts[i].includes(name)){
					if(backupAccounts[i].includes(id)){
						if(backupAccounts[i].includes(password)){
					console.log(``)
					console.log(``)
					console.log(``)
					console.log(`Succesfully logged in user: ${name}    No Such Agency Black Star Communications Network    Client:${id}     Date:${date}`)
					console.log(logo)
					
			    
			    console.log(`Head Back to landing Screen('home')?  Check Messages('messages') See Registered('agents')`)
			    rl.question(``, function(choice) {
			    		switch(choice) {
			    		case "home":
			    			theEval();
			    			break;
			        
			        case "messages": 
			        	//messages()
			    			theEval();
			    			break;
			    		case "agent":
			    		//searchThis();
			    		showAgentNames();
			    		break;
			    		
			    		default:
			    		theEval();
			    		break;
			    		
			    		
			    		
			    		
			    		}
			    
			    
			    
			    
			    
			    })
			    
			    }else {
			    var incorrectEntry = function () {
			    console.log(`Incorrect NAME:(${name}), ID:(${id}) or PASSWORD:(${password})`)
			    console.log(`Try again?  ('y or n')`)
			    	rl.question(``, function(choice) {
			    			if(choice == 'y'){
			    			login()
			    			}else if(choice == 'n'){
			    			theEval();
			    			}else {
			    			incorrectEntry();
			    			}
								  
			    	
			    	
			    	})
			    	
			    }
			    incorrectEntry();
			    }
			    }else {
			    var incorrectEntry = function () {
			    console.log(`Incorrect NAME:(${name}), ID:(${id}) or PASSWORD:(${password})`)
			    console.log(`Try again?  ('y or n')`)
			    	rl.question(``, function(choice) {
			    			if(choice == 'y'){
			    			login()
			    			}else if(choice == 'n'){
			    			theEval();
			    			}else {
			    			incorrectEntry();
			    			}
								  
			    	
			    	
			    	})
			    	
			    }
			    incorrectEntry();
			    }
			    }else {
			    var incorrectEntry = function () {
			    console.log(`Incorrect NAME:(${name}), ID:(${id}) or PASSWORD:(${password})`)
			    console.log(`Try again?  ('y or n')`)
			    	rl.question(``, function(choice) {
			    			if(choice == 'y'){
			    			login()
			    			}else if(choice == 'n'){
			    			theEval();
			    			}else {
			    			incorrectEntry();
			    			}
								  
			    	
			    	
			    	})
			    	
			    }
			    incorrectEntry();
			    }
		}
	
	


});
});
});



}
var agentRegister = function() {
console.log(``)
console.log(`Agent Name?`)
rl.question(``, function(name) {
console.log(``)
console.log(`Agent Name Confirmation>`)
rl.question(``, function(name2) {
console.log(``)
console.log(`password?`)
rl.question(``, function(password) {
console.log(``)
console.log(`password confimation`)
rl.question(``, function(password2) {
		if(name == name2 && password == password2){
			let tempArr = [`AGENT (NAME/PASSWORD):~${name} ${password}<---`]
			let tempArr2 = [`${name}`]
			agentAccounts = agentAccounts.concat(tempArr);
			agentNames = agentNames.concat(tempArr2);
			console.log(`AGENT NAME CONFFIRMED!`)
			console.log(``)
			console.log(`Military Id?`)
			rl.question(``, function(id) {
			console.log(`Military Id Confimation`)
		  rl.question(``, function(id2) {
		  	if(id == id2){
					let tempArr = [`---MILITARY ID#:~${id}.`];
					let tempArr2 = [`([MILITARY~NAME/ID#/Password]:~${name} ${id} ${password})`]
					agentAccounts = agentAccounts.concat(tempArr)	
					backupAccounts = backupAccounts.concat(tempArr2)		
					console.log(agentAccounts)
					console.log(backupAccounts)
					theEval();					
					}	else {
						console.log(`There has been an error in confirmation please try again.`)
						agentAccounts = agentAccounts.pop();
						//theEval();
						agentRegister();
					}
		  	
		  	
		  	
		  	});
		  	});
		
		}else {
			console.log(`Sorry not matching Try again`)
			agentRegister();
			//theEval();
		
		}



});
});
});
});
}


var adminLogin = function(){
console.log(`Name ?`);
	rl.question(``, function(name){
		console.log(`Password`)
		rl.question(``, function(password) {
		for(let i=0; i < adminAccounts.length; i++){
			if(adminAccounts[i].includes(name)){
				if(adminAccounts[i].includes(password)){
							console.log(``)
							console.log(``)
							console.log(``)
							console.log(``)
							console.log(`Welcome ${name}`)
							adminPage();
							
				
				}
				}else{
					console.log(``)
					console.log(``)
					console.log(`Incorrect admin credentials! for ${name} ${password}`)
					theEval();
				
				}
		
	
	}
	
	
	
	
	
	
	})
	})
	
		




}










 





var theEval = function () {
	console.log(logo)
	console.log(`\n\n`)
	console.log(`(TO REGISTER A NEW ACCOUNT FOR A NEW AGENT..... Type : 'new'),  (To Continue To Blackstar Login....     Type: 'log)`)
	console.log(`(TO LOGIN AS ADMIN type: 'admin')`)
	rl.question(``, function(input) {
			switch(input) {
			case 'new': 
					agentRegister();
					break;
			case 'log': 
					login();
					break;
			case 'admin':
						adminLogin();
						break;
		 default: 
		 	theEval();
		 	break;
		 }
	});
}


theEval();



//agentRegister();

 
