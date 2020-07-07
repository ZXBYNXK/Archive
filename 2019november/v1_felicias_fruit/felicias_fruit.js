// Name: Darius Rain
// Date: 11-26-19
// PROGRAM REQUIREMENTS
// Its going to have 3 arrays
// 1. array fruit
// 2. array prices
// 3. array qty
// Use Let
let availableFruitArr = ["Peaches", "Oranges", "Apples"],
  fruitPricesArr = [12.56, 7.93, 3],
  fruitQtySoldArr = [12, 3, 9, 3],
  storeArr = set([
    {
      fruitName: "Peaches",
      fruitPrice: 12.56,
      inStock: 60,
      qtySold: 0,
    },
    {
      fruitName: "Oranges",
      fruitPrice: 7.93,
      inStock: 75,
      qtySold: 0,
    },
    {
      fruitName: "Apples",
      fruitPrice: 3,
      inStock: 67,
      qtySold: 0,
    },
  ]);
/*
const addFruit = function(fruitName){
    this.fruitName = fruitName
}
*/

const runTotals = function (fruit, price, qty) {
    let total = price * qty;
    console.log(
      `Fruit: ${fruit} |Calculation: $${price} * ${qty} = $${total} |Revenue: $${total}`
    );
  },
  runProgram = function () {
    if (
      availableFruitArr.length === fruitPricesArr.length &&
      fruitPricesArr.length === fruitQtySoldArr.length &&
      fruitQtySoldArr.length === availableFruitArr.length
    ) {
      for (
        let i = 0, j = 0, k = 0;
        i < availableFruitArr.length &&
        j < fruitPricesArr.length &&
        k < fruitQtySoldArr.length;
        i++, j++, k++
      ) {
        runTotals(availableFruitArr[i], fruitPricesArr[j], fruitQtySoldArr[k]);
      }
    } else {
      console.log(`[ERROR1] There is an inequality in array lengths.`);
    }
  },
  addToStore = function (fruit, price, qty) {
    let tmpObj = {
      fruitName: fruit,
      fruitPrice: price,
      inStock: qty,
    };
    storeArr = storeArr.concat(tmpObj);
  };

runProgram();
