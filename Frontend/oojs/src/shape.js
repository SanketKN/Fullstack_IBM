export default class Shape{
    constructor(width,height){
        this.height = height
        this.width = width
    }
    static calculateArea(){
        return 0.0
    }
    toString(){
        return this.constructor.name
    }
}