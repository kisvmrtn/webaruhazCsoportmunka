import CartElement from "./CartElement.js";
import Product from "./Product.js";

export default class Cart {
  #list;
  constructor(list, pElem) {
    this.#list = list;
    this.pElem = pElem;
    this.counter = 0;
    this.shopElem = document.querySelector(".shopCart");
    this.shopIcon = document.querySelector(".bi");
    this.addEvent();
    this.show();
  }
  addEvent() {
    window.addEventListener("add", (event) => {
      this.#list.push(event.detail);
      this.counter++;
      this.shopIcon.innerHTML = this.counter;
    });
  }

  show() {
    let sidebar = document.querySelector(".sidebar");
    this.shopElem.addEventListener("click", () => {
      switch (sidebar.style.display) {
        case "none":
          sidebar.style.display = "flex";
          sidebar.innerHTML = "";
          break;
        case "flex":
          sidebar.style.display = "none";
          break;
        default:
          sidebar.style.display = "flex";
      }
      for (let i = 0; i < this.#list.length; i++) {
        console.log(this.#list);
        new CartElement(this.#list[i], sidebar);
      }
    });
  }
}
