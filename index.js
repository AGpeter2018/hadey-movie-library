"use strict";
const arrows = document.querySelectorAll(".arrow");
const movieItems = document.querySelectorAll(".movie-list-item");
const moviesList = document.querySelectorAll(".movie-list-wrapper");

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

class Movie {
  constructor(title, image, description) {
    this.title = title;
    this.image = image;
    this.description = description;
  }

  renderSpinal() {
    return `
     <div class="spinner hide">
       <i class="fa-solid fa-gear spin"></i>
      </div>
       

    `;
  }
}
const movies = new Movie();

class ActionMovies extends Movie {
  _userRating = null;
  constructor(title, image, description, genre, rating, ratings) {
    super(title, image, description);
    this.genre = genre;
    this.rating = rating;
    this.ratings = ratings;
    this.setUserRating(ratings);
  }

  setUserRating(rating) {
    if (rating) {
      this._userRating = rating;
    }
  }

  getUserRating() {
    return this._userRating ?? "Not rated";
  }

  displayInfo() {
    return `
         
  
              <div class="movie-list-wrapper">
                <div class="movie-list">
                 <div class="movie-list-item">
                <img
                  src="${this.image}"
                  alt=""
                  class="movie-list-item-img"
                />
                <span class="movie-list-item-title">${this.title}</span>
                <span class="ratings">${this.ratings}</span>
                <p class="movie-list-item-desc">
                  ${this.description}
                </p>
                <span class="rating">${this.rating}</span>
                <span class="ratings">${this.getUserRating()}</span>
                <button class="list-item-button">WATCH</button>
              </div>
                </div>
              </div>
        `;
    // const movieListContainer = document.querySelector(".movie-list-container");
    // movieListContainer.insertAdjacentHTML("afterbegin", html);
  }
}

class ComedyMovies extends Movie {
  _userRating = null;
  constructor(title, image, description, genre, rating, ratings) {
    super(title, image, description);
    this.genre = genre;
    this.rating = rating;
    this.ratings = ratings;
    this.setUserRating(ratings);
  }

  setUserRating(rating) {
    if (rating) {
      this._userRating = rating;
    }
  }

  getUserRating() {
    return this._userRating ?? "Not rated";
  }

  displayInfo() {
    return `
          
              <div class="movie-list-wrapper">
                <div class="movie-list ">
                 <div class="movie-list-item ">
                    <img
                     src="${this.image}"
                     alt=""
                     class="movie-list-item-img"
                    />
                    <span class="movie-list-item-title">${this.title}</span>
                    <p class="movie-list-item-desc">
                     ${this.description}
                    </p>
                    <span class="rating">${this.rating}</span>
                    <span class="ratings ">${this.getUserRating()}</span>
                     <button class="list-item-button">WATCH</button>
                 </div>
                </div>
              </div>
        `;
  }
}

class AnimationMovies extends Movie {
  _userRating = null;
  constructor(title, image, description, genre, rating, ratings) {
    super(title, image, description);
    this.genre = genre;
    this.rating = rating;
    this.ratings = ratings;
    this.setUserRating(ratings);
  }

  setUserRating(rating) {
    if (rating) {
      this._userRating = rating;
    }
  }

  getUserRating() {
    return this._userRating ?? "Not rated";
  }

  displayInfo() {
    return `
          
              <div class="movie-list-wrapper">
                <div class="movie-list-animation ">
                 <div class="movie-list-item-animation ">
                    <img
                     src="${this.image}"
                     alt=""
                     class="movie-list-item-img-animation"
                    />
                    <span class="movie-list-item-title">${this.title}</span>
                    <p class="movie-list-item-desc-animation">
                     ${this.description}
                    </p>
                    <span class="rating animation">${this.rating}</span>
                    <span class="ratings animation">${this.getUserRating()}</span>
                     <button class="list-item-button-animation">WATCH</button>
                 </div>
                </div>
              </div>
        `;
  }
}

const fetchMovies = async () => {
  try {
    const KEY = "c5ad3c2d";
    const KEYS = "80a925d7";
    // const TITLE = "Guardians of the galaxy";
    const movieTitles = [
      "Inception",
      "The Matrix",
      "The Dark Knight",
      "Avengers: Endgame",
      "Die Hard",
      " Christmas in Lagos",
      " Something About the Briggs",
      "  The Razz Guy",
      "Everybody Loves Jenifa",
      "The Waiter",
      "The Wedding Party 2: Destination Dubai",
      "Jenifa's Diary: The Movie",
      "The Wedding Party",
      "Chief Daddy",
      "Merry Men: The Real Yoruba Demons",
      "King of Boys: The Return of the King (Drama with comedic elements)",
      "Omo Ghetto: The Saga",
      "KPop Demon Hunters",
      "Smurfs",
      "Elio",
      " The Wild Robot",
      "The Bad Guys",
      "Coyote vs. Acme",
      "Ne Zha II",
      "Spider-Man: Across the Spider-Verse",
      "Flow",
      "Lilo & Stitch",
      "The Incredibles",
      "Moana 2",
      "Zootopia",
      "Ratatouille",
      " Spider-Man: Into the Spider-Verse",
      "Spirited Away",
      " Demon Slayer -Kimetsu no Yaiba- The Movie: Infinity Castle",
      "The Bad Guys 2",
      "Predator: Killer of Killers",
      "Mahavatar Narsimha",
      "How to Train Your Dragon",
    ];
    // https://api.themoviedb.org/3/movie/11?append_to_response=videos,images,{
    //   headers: { Authorization: Bearer ${KEYS}}
    //         }
    for (const TITLE of movieTitles) {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?t=${TITLE}&apikey=${KEYS}`
        );

        const data = await response.json();

        const rottenTomatoes = data.Ratings
          ? data.Ratings.find((rate) => rate.Source === "Rotten Tomatoes")
          : null;
        const rottenValue = rottenTomatoes
          ? rottenTomatoes.Value
          : "No Rotten Tomatoes rating";
        console.log(rottenValue);

        // return data.results;
        // console.log(response, data);
        if (data.Response === "True") {
          const genre = data.Genre;
          const rate = data.Ratings;
          console.log(rate);
          if (genre && genre.includes("Action")) {
            const actionMovies = new ActionMovies(
              data.Title,
              data.Poster,
              data.Plot,
              data.Rated,
              rottenTomatoes
            );
            const movieListContainer = document.querySelector(
              ".movie-list-container"
            );

            movieListContainer.innerHTML += actionMovies.displayInfo();
          } else if (
            (genre && genre.includes("Comedy")) ||
            genre.includes("N/A") ||
            // genre.includes("Drama") ||
            // genre.includes("Romance") ||
            // genre.includes("Adventure") ||
            genre.includes("Action" && "Comedy")
          ) {
            const comedyMovies = new ComedyMovies(
              data.Title,
              data.Poster,
              data.Plot,
              data.Rated,
              rottenTomatoes
            );
            const movieListContainerComedy = document.querySelector(
              ".movie-list-container-comedy"
            );

            movieListContainerComedy.innerHTML += comedyMovies.displayInfo();
          } else if (
            genre &&
            genre.includes("Animation" || "drama" || "adventure" || "comedy")
          ) {
            const animationMovies = new AnimationMovies(
              data.Title,
              data.Poster,
              data.Plot,
              data.Rated,
              rottenTomatoes
            );
            const movieListContainerAnimation = document.querySelector(
              ".movie-list-container-adventure"
            );
            movieListContainerAnimation.innerHTML +=
              animationMovies.displayInfo();
          }
        }

        arrows.forEach((item, index) => {
          const itemNum = moviesList[index].querySelectorAll(
            ".movie-list-item-img"
          ).length;
          let clickCounter = 0;
          item.addEventListener("click", () => {
            clickCounter++;
            if (itemNum - (4 + clickCounter) >= 0) {
              movieItems[index].style.transform = `translateX(${
                movieItems[index].computedStyleMap().get("transform")[0].x
                  .value - 320
              }px)`;
            } else {
              movieItems[index].style.transform = "translate(0)";
              clickCounter = 0;
            }
          });

          console.log(window.innerWidth);
          console.log(document.querySelectorAll(".movie-list-item-img"));
        });
      } catch (error) {
        console.error(`Error fetching movie "${TITLE}":`, error.message);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
};
fetchMovies();

class User {
  constructor(username) {
    this.username = username;
    this.collection = this.collection;
  }

  addMovie(movie) {
    this.collection.push(movie);
  }
}

const user = new User("guest");
