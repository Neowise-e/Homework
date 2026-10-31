import { body, burgerButton, menuOverlay, bagButton, mediaQuery } from "./consts.js";

const menu = document.querySelector(".header__menu");



function burgerActivate() {
  burgerButton.addEventListener("click", () => {
    bagButton.toggleAttribute("disabled");
    menu.classList.toggle("header__menu--open");
    menuOverlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
    burgerButton.classList.toggle("burger--open");
  });
}

function overlayClose() {
  menuOverlay.addEventListener("click", () => {
    bagButton.removeAttribute("disabled");
    body.classList.remove("no-scroll");
    menu.classList.remove("header__menu--open");
    menuOverlay.classList.remove("active");
    burgerButton.classList.remove("burger--open");
  });
}

export const burgerMenu = () => {
  burgerActivate();
  overlayClose();
  mediaQuery.addEventListener("change", event => {
    if (event.matches) {
      bagButton.removeAttribute("disabled");
      body.classList.remove("no-scroll");
      menu.classList.remove("header__menu--open");
      menuOverlay.classList.remove("active");
      burgerButton.classList.remove("burger--open");
    }
  });
};
