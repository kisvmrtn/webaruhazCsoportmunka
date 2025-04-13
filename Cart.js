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
    this.remove();
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
      this.renderSidebar(sidebar);
    });
  }

  renderSidebar(sidebar) {
    sidebar.innerHTML = "";
    for (let i = 0; i < this.#list.length; i++) {
      new CartElement(this.#list[i], sidebar, i);
    }
  }

  remove() {
    window.addEventListener("remove", (event) => {
      const index = event.detail;
      console.log("Törlendő index:", index);
      this.#list.splice(index, 1);
      console.log("Új lista:", this.#list);
      this.counter--;
      this.shopIcon.innerHTML = this.counter;

      const sidebar = document.querySelector(".sidebar");
      if (sidebar.style.display === "flex") {
        this.renderSidebar(sidebar);
      }
    });
  }
}
