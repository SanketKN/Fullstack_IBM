const prices = [75456.5, 89564.5, 54345.5, 23456.5, 99678.5]

console.log(prices instanceof Array)
console.log(typeof prices)

//for descending
const sortByPriceDesc = function(a,b){
    return b-a
}

//returns ascending order
console.log(prices.sort())

//callback function, because it's being used as parameter
console.log(prices.sort(sortByPriceDesc))