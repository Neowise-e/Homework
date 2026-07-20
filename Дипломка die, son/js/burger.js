document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".burger");
  const menu = document.querySelector(".header__menu");
  const pageBody = document.body;

  // Создаем оверлей
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  pageBody.appendChild(overlay);

  // Функция для жесткой отмены любого скролла
  function preventScroll(e) {
    e.preventDefault();
  }

  function toggleMenu() {
    const isOpen = menu.classList.toggle("header__menu--open");
    burgerButton.classList.toggle("burger--open");
    overlay.classList.toggle("menu-overlay--active");

    // Обновляем доступность ARIA
    const isExpanded = burgerButton.getAttribute("aria-expanded") === "true";
    burgerButton.setAttribute("aria-expanded", !isExpanded);

    if (isOpen) {
      pageBody.classList.add("no-scroll");
      // Блокируем тач-скролл на мобильных и колесо мыши на десктопе
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("wheel", preventScroll, { passive: false });
    } else {
      pageBody.classList.remove("no-scroll");
      // Возвращаем скролл обратно
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("wheel", preventScroll);
    }
  }

  if (burgerButton && menu) {
    burgerButton.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    // Сброс при ресайзе экрана больше 1024px
    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    mediaQuery.addEventListener("change", (e) => {
      if (e.matches && menu.classList.contains("header__menu--open")) {
        toggleMenu();
      }
    });
  }
  // Находим все ссылки внутри мобильного меню
  const menuLinks = menu.querySelectorAll("a");

  // Перебираем каждую ссылку и вешаем обработчик события
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Если меню открыто, закрываем его при клике на любую ссылку
      if (menu.classList.contains("header__menu--open")) {
        toggleMenu();
      }
    });
  });
});
