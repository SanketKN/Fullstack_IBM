// import filteredProductsAsync from "./analytics/search"
import { showCategories } from "./service/productCategories.js"
import filteredProductsAsync from "./analytics/search.js"


const main = async () => {
    const result = await filteredProductsAsync()
    console.log(result)
}

main()
showCategories(1, ['electronics', 'clothes'])
showCategories(1, 'hardware, software')

const prices = [1,2,3,4]
console.log(Math.max(...prices))
console.log(Math.max(..."832749"))
console.log('outside main')

let [,,,price1,price2,price3,price4] = prices
// let [price1,,price2,price3,price4] = prices to skip a value ,,
//,,, for 2 values
// let [,,,price2, price3] = prices

console.log(price1,price2,price3,price4)

let[price5,...price6] = prices
console.log(price5,price6)
// for common js
// module.exports = filterProductsAsync

//es2015 module system
// export default

try {
    let [val1,val2] = undefined
} catch(error) {
    console.log(error.name)
}

let product1 = {
    high: 75465.4,
    low: 55456.5,
    average: 35456.3
}
let high, low, average
({high, low} = {average} = product1)
//can also be written as
({high, low, average} = product1)
console.log(`high ${high}, low ${low}, avg ${average}`)


//to swap variable values
let a = 10
let b = 20

[a, b] = [b, a]