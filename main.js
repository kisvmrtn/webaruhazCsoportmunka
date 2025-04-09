import productList from "./ProductList.js";
import { PRODUCTS } from "./myProductsList.js";

let pElem = document.querySelector(".itemList");
new productList(pElem, PRODUCTS)