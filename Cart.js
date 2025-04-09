class Cart {
    constructor(pElem) {
      this.cartList = [];
      this.pElem = pElem;
  
      this.addEvent();
    }
  
    show() {
      // Tisztítjuk a korábbi elemeket
      this.pElem.innerHTML = "";
  
      // Új elemek megjelenítése
      this.cartList.forEach((productData, index) => {
        const cartElement = new CartElement(productData, index, this.cartList);
        this.pElem.appendChild(cartElement.pElem);
      });
    }
  
    addEvent() {
      window.addEventListener("add", (event) => {
        const index = event.detail;
        const product = productList.products[index];
        this.cartList.push(product);
        this.show();
      });
    }
}