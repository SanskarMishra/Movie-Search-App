import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/moviesList/MovieList';
import Header from './components/header/Header';
import NotFound from './components/notfound/NotFound';




const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState()
  const [finalSearch, setFinalSearch] = useState('');



  const getAllMovies = async () => {
    const response = await axios.get(`https://sm-movie-search.onrender.com/api/movie/popular-movies`);

    const allMovies = response.data;
    console.log(allMovies)
    setMovies(allMovies);
    setType("Popular Movies")

  }


  useEffect(() => {
    getAllMovies();
  }, []);


  const handleSearch = async (e) => {
    e.preventDefault();

    try {

      let response;
      if (searchQuery === "") {

        response = await axios.get(`https://sm-movie-search.onrender.com/api/movie/popular-movies`);
        setType("Popular Movies")


      }
      else {
        response = await axios.get(`https://sm-movie-search.onrender.com/api/movie/searched-movies?query=${searchQuery}`);

        setType("Searched results")


      }


      setSearchQuery(searchQuery)


      const searchResultsData = response.data;
      setMovies(searchResultsData);

    } catch (error) {
      console.error('Error fetching movie search results:', error);
      // Handle error display

    }
  };

  const handleSearchClick = () => {
    setFinalSearch(searchQuery)
  };



  return (
    <>

      <div className='container-fluid movie-app'>

        <Header />
        <div>
          <div className="search-bar">
            <form onSubmit={handleSearch}>

              <input
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search for movies...'
              ></input>
              <button type="submit" onClick={handleSearchClick} className="search-button">Search</button>

            </form>
          </div>

        </div>


        <div>
          {movies.length > 0 ?
            <div className="container">
              <h2>{type}</h2>
              <div className="grid">

                <MovieList movies={movies} finalSearch={finalSearch} />
              </div>
            </div>
            : (type === "Searched results" ? <NotFound /> : "")}
        </div>
      </div>


    </>
  );

}

export default App;
