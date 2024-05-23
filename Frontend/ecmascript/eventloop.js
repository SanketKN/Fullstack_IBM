function func1(x){
    return 2*x
}

function func2(y, cb){
    setTimeout(function(){
        cb(func1(y+5)-10)
    }, 1000)
}

// console.log(func2(15))

func2(15, result => console.log(result))
console.log('After Timeout')
//stack : global -> console.log -> func2(15)
// -> func1(20) // if no set timeout

//in case of set timeout

//heap : result=>console.log(result) ->
//stack -> setTimeout
//heap -> () =>
//stack

/* First global scope is created. then func2 is called. 
The call back is stored in heap. func2(15) stack frame is created
the setTimeout is storec in stack. callback is called from heap
func1 , push pop happens in the stack and callback is returned*/