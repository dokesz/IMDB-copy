const movieID = localStorage.getItem("movieID");
const resultList = document.getElementById("result-list");

async function movieData(movieID) {
  const result = await fetch(
    `http://www.omdbapi.com/?i=${movieID}&apikey=643f294a`
  ); //Base URL
  const movieDetails = await result.json();
  displayMovieDetails(movieDetails);
  console.log(movieID);
}

function displayMovieDetails(details) {
    resultList.innerHTML = `<div class="movie-poster">
    <img src="${
      details.Poster != "N/A" ? details.Poster : "../img-not-found.png"
    }" alt="movie-poster">
    </div>
        <div class="movie-info">
            <h3 class="movie-title">${details.Title}</h3>
        <ul class="movie-misc-info">
            <li class="year">Year: ${details.Year}</li>
            <li class="rated">Ratings: ${details.Rated}</li>
            <li class="released">Released: ${details.Released}</li>
        </ul>
        <p class="genre"><b>Genre: </b>${details.Genre}</p>
        <p class="writer"><b>Writer: </b> ${details.Writer}</p>
        <p class="actors"><b>Actors: </b> ${details.Actors}</p>
        <p class="plot"><b>Plot: </b> ${details.Plot}</p>
        <p class="language"><b>Language: </b> ${details.Language}</p>
        <p class="awards"><b>Awards: <i class="fa-solid fa-award"></i></b> ${details.Awards}</p>
</div>`;
}

movieData(movieID);
