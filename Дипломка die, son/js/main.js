import { burgerMenu } from "./burger.js";
import { quantityCounter, addToCart, dropDown, pageSwitch, deleteFromCart, renderCart} from "./specials.js";
import { bagControls } from "./shopBag.js";
import { productBag } from "./bagStorage.js";

const header = document.querySelector(".header");
const headerFixed = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("header--fixed");
    } else {
      header.classList.remove("header--fixed");
    }
  });
};



burgerMenu();
headerFixed();
bagControls();
quantityCounter();
pageSwitch()
addToCart();
deleteFromCart(productBag);
dropDown();
renderCart(productBag)