import httpClient from "../apiClient/httpClient"
import productsView from "../view/productsView"

async function getProducts(){
    const products = await httpClient.get('http://localhost:4200/products')
    productsView.showProducts(products)
}
function enableEdit(e: any){
    // if(e.target.patentElement.classList.contains('edit'))
}


export default {getProducts,enableEdit}
