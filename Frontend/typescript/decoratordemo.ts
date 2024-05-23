function simpleDecorator(constructor: Function){
    console.log('My Decorator called')
}

function propertyDecorator(target: any, propertyKey:string){
    console.log(`target: ${target}`)
    // console.log(`target.constuctor: ${target.constructor}`)
    console.log(`property name: ${propertyKey}`)
}

function methodDecorator(target: any, methodName: string, 
    descriptor?: PropertyDescriptor){
//property descriptor ddescribes the proprties of the method
//? means its optional
    console.log(`method decorator: ${methodName} called`)
}

@simpleDecorator
class WithDecorator{

    @propertyDecorator
    productId: number = 1
    constructor(){
        console.log('Inside Constructor')
    }

    @methodDecorator
    print(){
        console.log('printing')
    }
}

console.log()
const inst1 = new WithDecorator()
inst1.productId = 20
const inst2 = new WithDecorator()
inst1.print()