import { setProductToLocalStorage, productBag } from "./bagStorage.js";

const specialsSection = document.querySelector(".specials");

// ========================================================================
export const dropDown = () => {
  const dropDownMenu = document.querySelector(".dropdown__sort-menu");
  const dropDownBtn = document.querySelector(".dropdown__button");
  dropDownBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("dropdown__sort-menu--open");
  });
  dropDownMenu.addEventListener("click", function (event) {
    const activeItems = dropDownMenu.querySelectorAll(
      ".dropdown__sort-item--active",
    );
    activeItems.forEach(activeItem => {
      activeItem.classList.remove("dropdown__sort-item--active");
    });
    const item = event.target.closest(".dropdown__sort-item");
    if (!item) return;
    item.classList.add("dropdown__sort-item--active");
    let dropDownBtnText = dropDownBtn.querySelector(".dropdown__button-text");
    dropDownBtnText.textContent = item.textContent;
    dropDownMenu.classList.remove("dropdown__sort-menu--open");
  });
};

// ========================================================================

const cartInnerContainer = document.querySelector(
  ".product-section__new-items",
);

const cartTotals = document.querySelector(".buy-prod__totals");

export const pageSwitch = () => {
  const switchContainer = document.querySelector(".specials__page-switch");
  switchContainer.addEventListener("click", event => {
    const switchBtn = event.target.closest(".page-switch__button");
    const switchStartNum = document.querySelector(".page-num");
    let switchCurrentNum = parseInt(switchStartNum.textContent, 10);
    const switcherType = switchBtn.dataset.switch;
    if (switcherType === "previous" && switchCurrentNum > 1) {
      switchStartNum.innerHTML = --switchCurrentNum;
    } else if (switcherType === "next" && switchCurrentNum < 3) {
      switchStartNum.innerHTML = ++switchCurrentNum;
    }
  });
};

// =======массивчик для локалсторадж===========================================

const specialsProducts = [
  {
    id: "1",
    name: "Фен синий",
    price: "59990",
    quantity: "1",
  },
  {
    id: "2",
    name: "Фен серый",
    price: "47990",
    quantity: "1",
  },
  {
    id: "3",
    name: "Фен фиолетовый",
    price: "46990",
    quantity: "1",
  },
];

// создаю в хтмл и рендерю (геморр)=========================================
const createNewItem = item => {
  const cartInnerItem = document.createElement("div");
  cartInnerItem.classList.add("new-item");
  cartInnerItem.dataset.id = item.id;
  cartInnerItem.innerHTML = `
              <img
                class="product-card__image new-item__image"
                src="./images/specials__image/special-img-${item.id}.jpg"
                alt=""
              />

              <div class="new-item__actions">
                <div class="actions__count-price">
                  <div class="count-price__quantity text__s">Количество: ${item.quantity}</div>
                  <div class="count-price__total-price text__s">Итого: ${item.price}Р</div>
                </div>
                <button class="actions__delete text__s">Удалить</button>
              </div>
            `;

  return cartInnerItem;
};

let cartTotalPriceElem = cartTotals.querySelector(".buy-prod__total-price");
let cartTotalQuantityElem = cartTotals.querySelector(".buy-prod__total-products")

export const renderCart = productBag => {
  cartInnerContainer.innerHTML = "";
  if (!productBag || productBag.length === 0) {
    const bagEmptyText = document.createElement("div");
    bagEmptyText.classList.add("bag__empty");
    bagEmptyText.textContent = "Здесь пока-что пусто";
    cartInnerContainer.prepend(bagEmptyText);
    cartTotalQuantityElem.textContent = `Всего товаров: 0`;
    cartTotalPriceElem.textContent = `Общая стоимость: 0`;
    return;
  }
  productBag.forEach(product => {
    const prodElem = createNewItem(product);
    cartInnerContainer.prepend(prodElem);
  });
  const totalPrice = productBag.reduce((sum, prod) => sum + prod.price, 0);
  const totalQuantity = productBag.reduce((sum, prod) => sum + prod.quantity, 0)
  cartTotalQuantityElem.textContent = `Всего товаров: ${totalQuantity}`
  cartTotalPriceElem.textContent = `Общая стоимость: ${totalPrice}`;
};

// ====добавляю в массив(тоже геморр)==========================================
export const quantityCounter = () =>
  specialsSection.addEventListener("click", function (event) {
    {
      const counterBtn = event.target.closest(".counterButton");
      if (!counterBtn) return;
      const prodCard = counterBtn.closest(".buy-section__quantity");
      const startValue = prodCard.querySelector(".quantity__counter");
      let currentValue = parseInt(startValue.textContent, 10);
      const plusAndMinus = counterBtn.dataset.action;
      if (plusAndMinus === "plus") {
        startValue.innerHTML = ++currentValue;
      } else if (plusAndMinus === "minus") {
        if (currentValue > 1) {
          startValue.innerHTML = --currentValue;
        }
      }
    }
  });

export function addToCart() {
  specialsSection.addEventListener("click", event => {
    const toCartBtn = event.target.closest(".buy-section__to-cart-button");
    if (!toCartBtn) return;
    const prodCard = toCartBtn.closest(".specials__product-card");
    const prodId = prodCard.dataset.id;
    const elemQuantity = prodCard.querySelector(".quantity__counter");
    const changedProdQuantity = elemQuantity
      ? parseInt(elemQuantity.textContent, 10)
      : 1;
    const product = specialsProducts.find(item => item.id === prodId);
    const newProdInArray = {
      id: product.id,
      name: product.name,
      quantity: changedProdQuantity,
      price: parseInt(product.price, 10) * changedProdQuantity,
    };

    const productExisting = productBag.find(
      prod => prod.id === newProdInArray.id,
    );

    if (productExisting) {
      productExisting.quantity += changedProdQuantity;
      productExisting.price = product.price * productExisting.quantity;
    } else {
      productBag.push(newProdInArray);
    }

    renderCart(productBag);
    setProductToLocalStorage(productBag);
  });
}

export function deleteFromCart() {
  const cartContainer = document.querySelector(".product-section__new-items");
  cartContainer.addEventListener("click", function (event) {
    const deleteBtn = event.target.closest(".actions__delete");
    if (!deleteBtn) return;
    const bagCard = deleteBtn.closest(".new-item");
    const bagCardId = bagCard.dataset.id;
    const productExistingId = productBag.findIndex(
      prod => prod.id === bagCardId,
    );
    const product = productBag.find(prod => prod.id === bagCardId);
    const prodInArray = specialsProducts.find(item => item.id === bagCardId);
    const prodPrice = prodInArray.price;
    let prodQuantity = product.quantity;

    let bagElemQuantity = bagCard.querySelector(".count-price__quantity");
    let bagElemPrice = bagCard.querySelector(".count-price__total-price");

    if (prodQuantity === 1) {
      bagCard.remove();
      productBag.splice(productExistingId, 1);
    } else {
      product.quantity = prodQuantity - 1;
      product.price -= prodPrice;
      bagElemQuantity.textContent = `Количество: ${product.quantity}`;
      bagElemPrice.textContent = `Итого: ${product.price}`;
    }
    renderCart(productBag);
    setProductToLocalStorage(productBag);
  });
}

// cartInnerItem.innerHTML = `<span class = "new-item__quantity
//     text__l"></span>`;
