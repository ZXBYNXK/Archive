function mutation(arr){
let firstArr = arr[0],
secondArr = arr[1].split(""),  
result = secondArr.every(letter => {
    return firstArr.includes(letter)
})

return result
}
console.log(mutation(["hello","hell"]))