// import {setTimeout} from 'timers/promises'
// import products from '../data/products'

// const {setTimeout} = require('timers/promises')
// const {setTimeout} = require('awaitable-timers')
const products = require("../data/products")

const filteredProductsAsync = async() =>
{
    // await setTimeout(1000);
    if(products){
        const res = await products.filter(p => p.price >= 75000.0)
        return res;
    }
}

// export default filteredProductsAsync
module.exports = filteredProductsAsync