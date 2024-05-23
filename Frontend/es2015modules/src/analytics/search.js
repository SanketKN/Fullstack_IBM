import {setTimeout} from 'timers/promises'
import products from '../data/products.js'

const filteredProductsAsync = async() =>
{
    await setTimeout(1000);
    if(products){
        const res = await products.filter(p => p.price >= 75000.0)
        return res;
    }
}

export default filteredProductsAsync