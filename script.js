const movieSelector = document.getElementById('movie-selector');
const searchList = document.getElementById('search-list');
const resultList = document.getElementById('result-list');


async function loadMovies(searchTerm){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=643f294a`;
    //trying out that the fecth is working
    /*const URL = `https://www.omdbapi.com/?s=Batman&apikey=643f294a`*/
    const res = await fetch(`${URL}`);
    const data = await res.json();
    /*console.log(data);*/
    if(data.Response == true) displayMovielist(data.Search);
}

/*loadMovies()*/