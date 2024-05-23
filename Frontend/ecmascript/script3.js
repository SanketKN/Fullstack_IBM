let outer = function(x){
    return function(y){
        return x+y
    }
}

const returnFn = outer(45)
const result = returnFn(55)
console.log("result ", result)

console.log("result ", outer(55)(66))