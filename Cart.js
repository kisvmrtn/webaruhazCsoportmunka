import Product from "./Product.js";

export default class Cart {
    #list
    constructor(list, pElem) {
        this.#list = list;
        this.pElem = pElem;
        this.addEvent()
    }
    addEvent() {
        window.addEventListener("add", (event) => {
            this.#list.push(event.detail);
            console.log(this.#list)
        });
    }

}