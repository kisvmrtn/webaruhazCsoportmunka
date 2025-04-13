export default class CartElement {
  #list;
  #index;
  #container;
  constructor(list, pElem, index) {
    this.#list = list;
    this.#index = index;
    this.pElem = pElem;
    this.show();
  }
  show() {
    this.#container = document.createElement("div");
    this.#container.innerHTML = `
      <p><img src="${this.#list.img}" alt="" style="max-width: 75px"></p>
      <p>${this.#list.name}</p>
      <p>${this.#list.price} Ft</p>
      <button class="delete">X</button>
      <hr>
    `;

    this.pElem.appendChild(this.#container);

    const deleteBtn = this.#container.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
      const removeEvent = new CustomEvent("remove", { detail: this.#index });
      window.dispatchEvent(removeEvent);

      this.#container.remove();
    });
  }
}
