//Name: Darius Rain
//Date: 11/27/19
//Classwork: Felicas Fruitshop version 2.0
//Used: objects, functions, methods, forEach, parseFloat, parseInt, fs, & readline.
const felicaGlobal = {
felicasInventory: null,
runFelicasFruitShop: function(){
        const readline = require('readline'),
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        }),
        fs = require('fs'),
        felicasMethods = {
        
        sortFruitsPricesConigFile: function(){
              let fruitsAndPricesData = fs.readFileSync('./.items_prices_config.txt', 'utf8'),
              change1 = fruitsAndPricesData.replace(/[\~|\!|\@|\#|$|\%|^|\&|*|\(|\)|_|\-|+|\,|?|\/|\\|]/gm, '').replace(/[\s]/g, " ").split(" "),
              itemsList = [],
              capture = [],
              
              indexNumOfStart = 0,
              indexNumOfEnd = 0,
              findSeperators = function() {
                  change1.forEach(item => {
                      if(item.includes("START")){
                        indexNumOfStart = change1.indexOf(item);
                      } else if(item.includes("END")){
                          indexNumOfEnd = change1.indexOf(item)
                      }
                  })
                  console.log(indexNumOfStart);
                  console.log(indexNumOfEnd)
                  console.log(change1[indexNumOfStart])
                  console.log(change1[indexNumOfEnd])
              },
              runSort = function (){
              findSeperators()
              for(let i = 0, i2 = 0; i < change1.length; i++){
                

                 if(i > indexNumOfStart && i < indexNumOfEnd)
                 {
                     
                    if(i2 % 2 === 0) {
                    
                        capture[i2] = change1[i]
                        //console.log(i2, change1[i])
                    }else{
                         capture[i2] = parseFloat(change1[i])
                        //console.log(i2, change1[i])
                    }
                    i2++
                    //console.log(capture)
                 }
                

              //console.log(change1)
             // console.log(speratorStart)
            }
            for(let i = 0; i < capture.length; i+=2){
                let tmpObj = {
                    fruit: capture[i],
                    price: capture[i + 1],
                    revenue: 0,
                    qtySold: 0,
                    qty: 0,
                    runningLow: true
                }
                itemsList.push(tmpObj)
                //console.log(tmpObj)
            }
            felicaGlobal.felicasInventory = itemsList;
        }
            //console.log(capture)
        runSort()
        felicasMethods.mainMenu()
        },
        
        displayInventoryCustomer: function(){
            console.log(`=========================================================`)
            console.log('            Felicias Fruit Shop Customer Menu') 
            console.log(`=========================================================`)
            console.log('Item# ~ Name ~ Price')
        
            felicaGlobal.felicasInventory.forEach(object => {
                
                console.log(`Item#${felicaGlobal.felicasInventory.indexOf(object)}: ${object.fruit} ~ $${object.price}`)
                console.log('')
                console.log(`~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ `)
                console.log('')
            })
            console.log(`==========================================================`)

        },
        
        displayInventoryWorker: function(){
            console.log(`=========================================================`)
            console.log('                 Felicias Fruit Shop Inventory') 
            console.log(`=========================================================`)
            console.log('ITEM# ~ NAME ~ PRICE ~ Qty Sold ~ Qty ~ Revenue')
        console.log('')
            let totalRevenue = 0;
            felicaGlobal.felicasInventory.forEach(object => {
                
                console.log(`Item#${felicaGlobal.felicasInventory.indexOf(object)}: ${object.fruit}`)
                console.log(`Price: $${object.price} `)
                console.log(`Qty sold: ${object.qtySold}`)
                console.log(`Qty: ${object.qty}`)
                console.log(`Revenue: $${object.revenue}`)
                totalRevenue += object.revenue;
                console.log('')
                console.log(`~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ `)
                console.log('')
            })
            console.log(`TOTAL REVENUE ROUNDED: $${Math.round(totalRevenue)}`)
            console.log(`Total revenue percisely: ${totalRevenue}`)
            console.log(`==========================================================`)
    
        },
        
        displayShortages: function(){
            console.log(`=========================================================`)
            console.log('               Felicias Fruit Shortages!') 
            console.log(`=========================================================`)
            console.log('Item# ~ Name ~ Qty left')
        
            felicaGlobal.felicasInventory.forEach(object => {
                
                if(object.runningLow === true){
                    console.log(`**Item#${felicaGlobal.felicasInventory.indexOf(object)} ~ ${object.fruit} ~ ${object.qty}**`)
                }
            })
            console.log(`==========================================================`)
            
        },
        askQty: function(){
            console.log(`========================================================`)
            this.displayShortages()
            console.log(`==============================================Shortages=`)
            console.log(`Enter 'q' as input to cancel at anytime.`)
            rl.question(`Item Name?     `, function(itemName){
                rl.question(`Qty to add?        `, function(qtyNum){
                    if(itemName === 'q' || itemName === 'Q'){
                        console.log(`Qty add feature has been canceled...`)
                        
                    }else{
                        felicasMethods.addQtyToItem(itemName, parseInt(qtyNum));
                    }
                })
            })
        },
        addQtyToItem: function(itemName, qty){
        felicaGlobal.felicasInventory.forEach(object => {
            if(object.fruit === itemName){
                object.qty += qty
                console.log(`Sucessfully added ${qty} in qty to ${object.fruit} | Qty now: ${object.qty}`)
            }
        })
        felicasMethods.mainMenu();
        },
        askPurchase: function() {
            console.log(`Press q on any option to cancel purchase.`)
            console.log('Enter fruit name:')
            rl.question(``, function(desiredFruit){
                console.log('Enter qty of fruit.')
                rl.question(``, function(desiredQty){
                   
                        felicasMethods.purchaseItemCheck(desiredFruit, desiredQty)
                   
                    
                })
            })
        },
        purchaseItemCheck: function(fruitName, qty){
            let tempPrice = 0
            confirmation = false;
            if(fruitName === 'q' || qty === 'q' || fruitName === 'Q' || qty === 'Q'){
                console.log('\n\n')
                console.log('Successfully canceled purchase')
                felicasMethods.mainMenu()
            }
                felicaGlobal.felicasInventory.forEach(object => {
                    if(object.fruit === fruitName && object.qty >= qty){
                        confirmation = true;
                        tempPrice = object.price * qty
                       felicasMethods.confirmPurchase(fruitName, tempPrice, qty)
                    }else {
                        if(felicaGlobal.felicasInventory.indexOf(object) === felicaGlobal.felicasInventory.length - 1) {
                            if(confirmation === false){
                                console.log(`No such qty of fruit or fruit found:(${fruitName})`)
                                felicasMethods.mainMenu()
                            }
                        }
                    }
                })
               
         
            
        },
        confirmPurchase: function(fruitName, totalPrice, qty){
            console.log('\n\n')
            console.log(`Order: ${qty} ${fruitName}.`)
            console.log(`Total will be $${totalPrice}`)
            
            console.log('Total paid? [Y/n]')
            rl.question(``, function(yesNo){
                if(yesNo === 'Y' || yesNo === 'y'){
                    console.log('\n\n')
                    console.log(`Purchase successfull!`)
                    felicaGlobal.felicasInventory.forEach(object => {
                        if(object.fruit === fruitName ){
                            object.revenue += totalPrice;
                            object.qty -= qty;
                            object.qtySold += parseInt(qty);
                            felicasMethods.mainMenu()
                        }
                    })
                    
                }else if(yesNo === 'n' || yesNo === 'N'){
                    console.log('\n\n')
                    console.log('Order has been canceled.')
                    felicasMethods.mainMenu();
                }else {
                    felicasMethods.confirmPurchase(fruitName, totalPrice);
                }
            })
            

        },
        checkShortages: function(){
            felicaGlobal.felicasInventory.forEach(object => {
                if(object.qty > 15){
                    object.runningLow = false;
                }else {
                    object.runningLow = true;
                }
            })
        },
        displayShortagesOnMenu: function(){
            felicaGlobal.felicasInventory.forEach(object => {
                
                if(object.runningLow === true){
                    console.log(`Running short on ${object.fruit}, Qty:${object.qty}`)
                }
            })
        },
        askDefaultValue: function(){
            console.log(`You entered set all quantity values mode.`)
            console.log(`If you want each fruit's qty to be different a different number then use the program normally, by selecting option "3333". `)
            console.log(`This is only useful to test the program and or to add qauntites at faster rate as long as all the number of items are equal.`)
            console.log('Continue? [Y/n]')
            rl.question(``, function(option){
                if(option === 'y' || option === 'Y'){
                    console.log('Enter quantity:')
                    
                    rl.question('', function(number){
                        number = parseInt(number)
                        if(number != NaN){
                                felicasMethods.setDefaultValues(number);
                        }else{
                            console.log(`Try again ${number} is not an integer.`)
                            felicasMethods.mainMenu();
                        }
                    })
                }else if(option === 'n' || option === 'N'){
                    felicasMethods.mainMenu()
                }else{
                    felicasMethods.askDefaultValue();
                }
            })
        },
        setDefaultValues: function(number){
            felicaGlobal.felicasInventory.forEach(object =>{
                object.qty += number;
            })
            console.log(`Default values have been added.`)
            felicasMethods.mainMenu();
        },
        trashedFruits: function(){
            console.log(`Press q on any option to cancel purchase.`)
            console.log('Enter fruit name:')
            rl.question(``, function(desiredFruit){
                console.log('Enter qty of fruit to be trashed:')
                rl.question(``, function(desiredQty){
                   console.log(`You are about to trash ${desiredQty} ${desiredFruit}.`)
                   console.log('Continue [Y/n]?')
                   rl.question(``, function(confirmation){
                        if(confirmation === 'Y' || confirmation === 'y'){
                            felicasMethods.trashIt(desiredFruit, desiredQty)
                        }else {
                            console.log('Canceled operation!')
                            felicasMethods.mainMenu()
                        }

                    })
                      
                   
                    
                })
            })
        },
        trashIt: function(fruit, qty){
            felicaGlobal.felicasInventory.forEach(object => {
                if(object.fruit === fruit){
                    if(object.qty >= qty){
                        console.log(`Fruit:${object.fruit} Had Quantity ${object.qty}`)
                        object.qty -= qty;
                        console.log('-------------------------------------------------------')
                        console.log(`Fruit:${object.fruit} Now has quantity ${object.qty}`)
                        felicasMethods.mainMenu()
                    }else{
                        console.log(`Qty to trash:${qty} is exceeds ${object.fruit, object.qty} `)
                        felicasMethods.mainMenu();
                    }
                }
            })
        },
        
        mainMenu: function(){
            
            felicasMethods.checkShortages()
            console.log('\n\n\n\n')
            console.log(`=========================================================`)
            console.log('                 Felicias Fruit Shop')
            felicasMethods.displayShortagesOnMenu()
            console.log(`=========================================================`)
            console.log(`1: Show stock`)
            console.log(`2: Purchase item`)
            console.log(`3: Exit`)

            
            console.log('--- -Admin Menu- --- --- --- --- --- --- --- --- --- --- ')
            console.log(`1111: Show inventory information. | 2222: Dislpay shortages. | 3333: Add qty to item.`)
        console.log('')
            console.log(`4444: Set all quanties to one number, recomended to be faster if all items being added share an equality, and for program testing.`)
            console.log('')
            console.log('5555: Fruit gone bad?')
            console.log('--- --- --- --- --- --- --- --- --- --- --- --- --- --- -')


            rl.question(``, function(option){
                option = parseInt(option)
                switch(option){
                    case 1:
                        felicasMethods.displayInventoryCustomer()
                        felicasMethods.mainMenu()
                        break;
                    case 2:
                       felicasMethods.askPurchase();
                      // felicasMethods.mainMenu();
                        break;
                    case 3:
                        rl.close()
                        break;
                    case 1111: 
                        felicasMethods.displayInventoryWorker();
                        felicasMethods.mainMenu()
                        break;
                    case 2222:
                        
                        felicasMethods.displayShortages();
                        felicasMethods.mainMenu()
                        break;
                    case 3333:
                        felicasMethods.askQty();
                        felicasMethods.mainMenu();
                        break;
                    case 4444:
                        felicasMethods.askDefaultValue(); 
                        break;
                    case 5555: 
                        felicasMethods.trashedFruits();
                        break;
                    default:
                        felicasMethods.mainMenu();
                        break;
                }


            })
        }

        }
        
        
        
        //let fruitsAndPrices = feliciaGlobal.feliciasInventory.map(function(item){
        //return `${item.fruit} - $${item.price}`
        //})
    
    
        felicasMethods.sortFruitsPricesConigFile();
       

    //console.log(fruitsAndPrices)
},


}
felicaGlobal.runFelicasFruitShop();


























