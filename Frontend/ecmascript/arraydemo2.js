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

console.log("products size :", products.length)
console.log(products.sort()) //It won't sort

console.log(products.sort(function(p1, p2){
    return p1.price - p2.price
})) //It will sort in Ascending order

//using arrow function
console.log(products.sort((p1, p2) => p1.price - p2.price))//It will sort in Ascending order

//using filter
console.log(products.filter((p1)=>p1.price > 75000))

let vals = [12,3,4,23,113,45,675,5,34,534,24]
console.log(vals.sort()) //won't return the correct ans

let filteredProducts = []
products.forEach(function(p){
    if(p.price>=75000.00){
        filteredProducts.push(p)
    }
})

products.filter(function(p){
    return p.price >= 75000.0
})

console.log(products.filter(p => p.price >= 75000.0))

console.log(filteredProducts)

console.log(products.sort((a,b)=> a.price - b.price))