document.addEventListener('DOMContentLoaded', () => {
  const starsContainer = document.getElementById('stars-picker');
  const stars = starsContainer.querySelectorAll('.stars__star');
  const ratingNum = document.getElementById('rating-num');
  
  // Начальное значение рейтинга (например, 5)
  let currentRating = 0;

  // Функция для визуального обновления звезд на основе текущей оценки
  function updateStars(rating) {
    stars.forEach(star => {
      const starValue = parseInt(star.getAttribute('data-value'));
      if (starValue <= rating) {
        star.classList.add('stars__star--picked');
      } else {
        star.classList.remove('stars__star--picked');
      }
    });
    // Обновляем текст с цифрой
    ratingNum.textContent = rating;
  }

  // Инициализация (сразу красим 5 звезд)
  updateStars(currentRating);

  // Обработка клика по звезде
  starsContainer.addEventListener('click', (e) => {
    const clickedStar = e.target.closest('.stars__star');
    if (!clickedStar) return;

    // Считываем значение из data-value нажатой звезды
    currentRating = parseInt(clickedStar.getAttribute('data-value'));
    updateStars(currentRating);
  });
});