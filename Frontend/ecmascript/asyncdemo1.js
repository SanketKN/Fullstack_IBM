const products = [
    {
        id:3,
        name:'Iphone15',
        price:85456.5
    },

    {
        id:6,
        name: 'OnePlus11R',
        price:65456.5
    },

    {
        id:2,
        name: 'samsungUltraS24',
        price:185456.5
    },
]

let res = []
const filteredProductsAsync = (cb) => {

    //let filteredProducts
    setTimeout(() => {
        cb(products.filter(p => p.price >= 75000.0))
    }, 1000)
    //return filteredProducts //won't work
}
filteredProductsAsync(data => console.log(data))
console.log('After Timeout')


