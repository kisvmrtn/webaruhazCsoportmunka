export default class CartElement {
  #list;
  constructor(list, pElem) {
    this.#list = list;
    this.pElem = pElem;
    this.show();
  }
  show() {
    let html = `
                    <div>
                        <p><img src="${
                          this.#list.img
                        }" alt="" style="max-width: 75px"></p>
                        <p>${this.#list.name}</p>
                        <p>${this.#list.price} Ft</p>
                        <button class="delete">X</button>
                        <hr>
                    </div>
                    
                `;
    this.pElem.insertAdjacentHTML("beforeend", html);
  }
}
