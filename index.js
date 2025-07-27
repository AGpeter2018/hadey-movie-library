"use strict";
const arrow = document.querySelectorAll(".arrow");
const movieItems = document.querySelectorAll(".movie-list-item");
const moviesList = document.querySelectorAll(".movie-list");

// arrow.addEventListener("click", () => {
//   console.log("clicked");
// });

arrow.forEach((item, index) => {
  const itemNum = moviesList[index].querySelectorAll("img").length;
  let clickCounter = 0;
  item.addEventListener("click", () => {
    clickCounter++;
    if (itemNum - (4 + clickCounter) >= 0) {
      moviesList[index].style.transform = `translateX(${
        moviesList[index].computedStyleMap().get("transform")[0].x.value - 320
      }px)`;
    } else {
      moviesList[index].style.transform = "translate(0)";
      clickCounter = 0;
    }
  });
  console.log(moviesList[index].querySelectorAll("img").length);
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .movie-list-title, .navbar-container, .menu-item a, .profile-container, .sidebar, .left-menu-icon, .toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
