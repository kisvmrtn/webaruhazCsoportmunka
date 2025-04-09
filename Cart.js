export const cartList = [];
export default class Cart {
    #list
    constructor(list, pElem) {
        this.#list = list;
        this.pElem = pElem;
    }
}