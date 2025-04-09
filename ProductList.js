import Product from "./Product.js";

export default class productList {

    constructor(pElem, products) {
        this.products = products;
        this.pElem = pElem;
        this.show();
    }
    show() {
        for (let i = 0; i < this.products.length; i++) {
            new Product(this.products[i], this.pElem, i)
        }
    }
}