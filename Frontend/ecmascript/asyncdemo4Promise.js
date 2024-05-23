const {setTimeout} = require("timers/promises")
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

// let products



// const filteredProductsAsync = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if(products)
//             resolve(products.filter(p=> p.price >= 75000.0))
//         else
//             reject(new Error('Could Not filter'))
//         })
//     }, 1000)
// }
// const main = async() => {

//     try {
//         const data = await filteredProductsAsync()
//         console.log(data) 
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

const filteredProductsAsync = async() =>
{
    if(products){
        const res = await products.filter(p => p.price >= 75000.0)
        return res;
    }
    else{
        const err = await new Error('Could not filter')
        return err
    }
}

//with timeout
const filteredProductsAsyncNew = async() =>{
    await setTimeout(1000)
    if(products){
        const res = await products.filter(p => p.price >= 75000.0)
        return res;
    }
    else{
        const err = await new Error('Could not filter')
        return err
    }

}

const main = async() => {
    try{
        const data = await filteredProductsAsyncNew()
        console.log(data)
    }
    catch(error){
        console.log(error.message)
    }
}
main()
console.log('After Timeout')


