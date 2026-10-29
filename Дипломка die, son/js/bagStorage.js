export const setProductToLocalStorage = productBag => {
    localStorage.setItem("productBag", JSON.stringify(productBag))
  }
const getProductFromLocalStorage = productBag => {
  return JSON.parse(localStorage.getItem("productBag"))
}

export const productBag = getProductFromLocalStorage() || [];