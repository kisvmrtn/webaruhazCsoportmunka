export const products = [
    {
        id: 1,
        name: 'MacBook Air 13" M4 Magyar 2025 éjfekete',
        price: 499990,
        img: "images/macbook.webp"
    },
    {
        id: 2,
        name: "iPhone 16 128GB rózsaszín",
        price: 379990,
        img: "images/TELEFON.webp"
    },
    {
        id: 3,
        name: "OnePlus Pad Go LTE 8GB / 128GB, zöld",
        price: 89990,
        img: "images/TABLET.webp"
    },
    {
        id: 4,
        name: '65" Samsung The Frame QE65LS03D',
        price: 449990,
        img: "images/TV.webp"
    },
    {
        id: 5,
        name: "Apple AirPods 4 (aktív zajkioltással)",
        price: 84990,
        img: "images/FULES.webp"
    }
];

export default class productList {

    constructor(pElem) {
        this.products = products;
        this.pElem = pElem;
        this.show();
    }
    show() {
        for (let i = 0; i < products.length; i++) {
            let html = `
                    <div class="col-sm-6 col-lg-3">
                        <div class="card h-100 product-card border-primary">
                            <div class="position-relative">
                                <img src="${products[i].img}" class="card-img-top" height="300">
                                <span class="position-absolute top-0 end-0 m-2 badge bg-accent">Featured</span>
                            </div>
                            <div class="card-body p-3">
                                <p class="text-muted small">Smartphones</p>
                                <h5 class="card-title">${products[i].name}</h5>
                                <p class="fw-bold fs-4">${products[i].price} Ft</p>
                            </div>
                            <div class="card-footer bg-white border-0 p-3 pt-0">
                                <button class="btn btn-primary w-100">
                                    <i class="bi bi-cart me-2"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>`
            this.pElem.insertAdjacentHTML("beforeend", html);
        }
    }
}