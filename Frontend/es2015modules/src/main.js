import { showCategories } from "./service/productCategories.js"
import filteredProductsAsync from "./analytics/search.js"
const main = async () => {
    const result = await filteredProductsAsync()
    console.log(result)
}

main()
showCategories(1, ['electronics', 'clothes'])
showCategories(1, 'hardware, software')
console.log('outside main')

// for common js
// module.exports = filterProductsAsync

//es2015 module system
// export default