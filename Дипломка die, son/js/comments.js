const stars = document.querySelectorAll(".stars__star");
const ratingValue = document.getElementById("rating-num");

let currentRatingValue = 0;

export function highlightStars(rating) {
  stars.forEach(star => {
    const starValue = parseInt(star.getAttribute("data-value"));
    if (starValue <= rating) {
      star.classList.add("stars__star--picked");
      console.log(`звезда номер: ${starValue}`);
    } else {
      star.classList.remove("stars__star--picked");
    }
  });
}

stars.forEach(star => {
  star.addEventListener("click", () => {
    currentRatingValue = parseInt(star.getAttribute("data-value"));
    ratingValue.textContent = currentRatingValue;
    highlightStars(currentRatingValue);
  });
});
