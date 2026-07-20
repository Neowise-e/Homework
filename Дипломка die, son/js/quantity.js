document.addEventListener('DOMContentLoaded', () => {
  // Находим все секции покупки на странице
  const buySections = document.querySelectorAll('.product-card__buy-section');

  buySections.forEach(section => {
    // Ищем элементы только внутри текущей секции карточки
    const minusBtn = section.querySelector('.quantity__minus-button');
    const plusBtn = section.querySelector('.quantity__plus-button');
    const counter = section.querySelector('.quantity__counter');

    // Проверяем, что все элементы найдены
    if (minusBtn && plusBtn && counter) {
      
      // Обработчик для кнопки "Плюс"
      plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(counter.textContent, 10) || 0;
        counter.textContent = currentValue + 1;
      });

      // Обработчик для кнопки "Минус"
      minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(counter.textContent, 10) || 0;
        
        // Ограничение: не уходим в минус (минимальное значение — 1)
        if (currentValue > 1) {
          counter.textContent = currentValue - 1;
        }
      });
      
    }
  });
});
