import {
  body,
  burgerButton,
  menuOverlay,
  bagButton,
  mediaQuery,
} from "./consts.js";

const closeModalBtn = document.querySelector(".bag__closeBtn");
const bagModal = document.querySelector(".bag__modal");
const menuLinks = document.querySelectorAll(".menu__link");

export const bagControls = () => {
  bagButton.addEventListener(
    "click",
    () => {
      burgerButton.setAttribute("disabled", "true");
      bagModal.classList.add("bag__modal--active");
      body.classList.add("no-scroll");
      menuOverlay.classList.add("active");
      menuOverlay.style.zIndex = "var(--zIndex-tertia)";
      bagButton.setAttribute("disabled", "true");
      menuLinks.forEach(link => link.classList.toggle("disabled"));
    },

    closeModalBtn.addEventListener("click", () => {
      burgerButton.removeAttribute("disabled");
      bagModal.classList.remove("bag__modal--active");
      body.classList.remove("no-scroll");
      menuOverlay.classList.remove("active");
      bagButton.removeAttribute("disabled");
      menuLinks.forEach(link => link.classList.remove("disabled"));
    }),

    menuOverlay.addEventListener("click", () => {
      burgerButton.removeAttribute("disabled");
      bagModal.classList.remove("bag__modal--active");
      body.classList.remove("no-scroll");
      menuOverlay.classList.remove("active");
      bagButton.removeAttribute("disabled");
      menuLinks.forEach(link => link.classList.remove("disabled"));
    }),
    mediaQuery.addEventListener("change", event => {
        burgerButton.removeAttribute("disabled");
        bagModal.classList.remove("bag__modal--active");
        body.classList.remove("no-scroll");
        menuOverlay.classList.remove("active");
        bagButton.removeAttribute("disabled");
        menuLinks.forEach(link => link.classList.remove("disabled"));
    }),
  );
};

