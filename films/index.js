import { films } from "./films.js";
console.log(films);

// show all films titles
function showTitleFilms() {
  films.forEach((film) => {
    console.log(film.Title);
  });
}
showTitleFilms();

// create new array with imdbRating to number
function changeRatingToNumber() {
  const imbdNumberRating = films.map((film) =>
    isNaN(film.imdbRating) ? film.imdbRating : parseFloat(film.imdbRating)
  );
  console.log(imbdNumberRating);
}
changeRatingToNumber();

// order films by year
function orderFilmsByYear() {
  films.sort(function (a, b) {
    if (a.Year > b.Year) {
      console.log(a.Year, b.Year);
      return 1;
    }
    if (a.Year < b.Year) {
      return -1;
    }
    return 0;
  });
  console.log(films);
}
orderFilmsByYear();

// show comming soon films
function showCommingSoonFilms() {
  const comingSoonFilms = films.filter((film) => film.ComingSoon === true);
  console.log(comingSoonFilms);
}
showCommingSoonFilms();

// find some serie with genere Action
function findSomeSerie() {}
const anActionFilm = films.find((film) => film.Genre.includes("Action"));
console.log(anActionFilm);
findSomeSerie();

// reduce imdbRating and calculate average
function averageRating() {
  const imbdNumberRating = [];
  films.map((film) => {
    if (!isNaN(film.imdbRating))
      imbdNumberRating.push(parseFloat(film.imdbRating));
  });
  console.log(imbdNumberRating);

  const allImbdRates = imbdNumberRating.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  const average = (allImbdRates / imbdNumberRating.length).toFixed(2);
  console.log(average);
}
averageRating();