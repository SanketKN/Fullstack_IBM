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

let max = -Infinity
let min = Infinity
products.filter(p => p.price >= 75000.0)
.map(p => p.price)
.reduce((accu, currentVal)=>[
    Math.min(currentVal, accu[0],
    Math.max(currentVal,accu[1]))
], [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])

//or
products.filter(p => p.price >= 75000.0)
.map(p => p.price)
.reduce((accu, currentVal) => accu+=currentVal, 0)

products.forEach((p)=>{
    if (p.price < min)
     min = p.price
    if (p.price > max)
     max = p.price
})

console.log(min,max)
