class CartElement {
    constructor(product, cartList) {
      this.productData = product;
      this.cartList = cartList;
      this.pElem = document.createElement('div'); // létrehozunk egy HTML elemet
      this.removeBtn = document.createElement('button');
      this.removeBtn.textContent = '🗑️ Törlés';
  
      this.pElem.textContent = `🛒 ${this.productData.name} - ${this.productData.price} Ft `;
      this.pElem.appendChild(this.removeBtn);
  
      this.removeBtn.addEventListener('click', () => this.remove());
    }
  
    remove() {
      // Törli az adott terméket a kosárból
      const index = this.cartList.indexOf(this.productData);
      if (index > -1) {
        this.cartList.remove(index, 1); // eltávolítja a terméket
      }
  
      // Frissítjük a kosár megjelenítését
      // Feltételezzük, hogy van egy globális `cart` példány
      cart.show(){}
      ;
    }
  }
  