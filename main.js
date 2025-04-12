import productList from "./ProductList.js";
import { PRODUCTS } from "./myProductsList.js";
import { CARTLIST } from "./myCartList.js";
import Cart from "./Cart.js";

let pElem = document.querySelector(".itemList");
new productList(pElem, PRODUCTS);
new Cart(CARTLIST, pElem);
