import IProduct from "../model/product"

class View{
    products: HTMLDivElement
    productName: HTMLInputElement
    price: HTMLInputElement
    productSubmit: HTMLButtonElement

    //strict type checking is done here in <>
    constructor(){
        this.products = <HTMLDivElement>document.querySelector('#products')
        this.productName = <HTMLInputElement>document.querySelector('#productName')
        this.price = <HTMLInputElement>document.querySelector('#price')
        this.productSubmit = <HTMLButtonElement>document.querySelector('.product-submit')
    }

    showProducts(productsData: IProduct[]){
        //To display using HTML tags
        productsData.forEach(product => {
            this.products.innerHTML = `
            <div class = "card mb-3">
            <div class = "card-body">
            <h4 class = "card-title">${product.productName}</h4>
            <h4 class = "card-title">${product.price}</h4>
            <h3 class = "card-title">${product.starRating}</h3>
           
            <a href="#" class="edit card-link" data-id="${product.productId}">
            <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${product.productId}">
            <i class="fa fa-remove"></i>
            </a>

            `
        })
    }

    changeFormState(type: string){
        if(type === 'edit'){
            this.productSubmit.textContent = 'Update Product'
            this.productSubmit.className = 'product-submit btn btn-warning btn-block'
            const button = document.createElement('button')
            button.className = "product-cancel btn btn-light btn-block"
            button.appendChild(document.createTextNode('Cancel Edit'))
        }
    }
    fillForm(data: any){
        this.productName.value = data.productName
        this.price.value = data.price
        this.changeFormState('edit')
    }

}



export default new View()