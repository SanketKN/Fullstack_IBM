import eventHandlers from "./controller/productController";

document.addEventListener('DOMContentLoaded', eventHandlers.getProducts)
document.querySelector('#products')?.addEventListener('click',eventHandlers.getProducts)