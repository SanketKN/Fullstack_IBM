// const products = [
//     {
//         id:3,
//         name:'Iphone15',
//         price:85456.5
//     },

//     {
//         id:6,
//         name: 'OnePlus11R',
//         price:65456.5
//     },

//     {
//         id:2,
//         name: 'samsungUltraS24',
//         price:185456.5
//     },
// ]

let products

const filteredProductsAsync = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(products)
               resolve(products.filter(p => p.price >= 75000.0))
            else
               reject(new Error('Could not filter products'))
        }, 1000)
    })

}

const promise = filteredProductsAsync()
promise.then(data => console.log(data))
promise.catch(reason => console.log(reason))

console.log('After Timeout')


