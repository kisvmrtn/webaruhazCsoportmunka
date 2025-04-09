export default class Product {
    #productData
    #index
    constructor(productData, pElem, index) {
        this.#productData = productData;
        this.pElem = pElem;
        this.#index = index;
        this.show();
        this.addBtn0 = document.querySelector(".itemCard:last-child .addBtn");
        this.add();

    }
    show() {
        let html = `
                    <div class="col-sm-6 col-lg-3 itemCard">
                        <div class="card h-100 product-card border-primary">
                            <div class="position-relative">
                                <img src="${this.#productData.img}" class="card-img-top" height="300">
                            </div>
                            <div class="card-body p-3">
                                <p class="text-muted small">${this.#productData.title}</p>
                                <h5 class="card-title">${this.#productData.name}</h5>
                                <p class="fw-bold fs-4">${this.#productData.price} Ft</p>
                            </div>
                            <div class="card-footer bg-white border-0 p-3 pt-0">
                                <button class="btn btn-primary w-100 addBtn">
                                    <i class="bi bi-cart me-2"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>`
        this.pElem.insertAdjacentHTML("beforeend", html);
    }
    add() {
        this.addBtn0.addEventListener("click", () => {
            console.log(this.#productData)
        })
    }

}