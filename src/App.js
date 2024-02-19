import React from 'react';
import searchIcon from './searchIcon.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';
import "./App.css";


const API_URL = 'http://www.omdbapi.com?apikey=a971413a';
const movie = 
{
  
  "Title": "The Incredible Hulk",
  "Year": "2008",
  "imdbID": "tt0800080",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"

}

const App = () =>
{
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const searchMovies = async (title) =>
  {
    try
    {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    }
    catch(Error){console.error(Error)}
    
  }
  useEffect(() =>
  {
    searchMovies('Hulk');
  }, []);
  return (
    <div className='app'>
      <h1>IncredibleMovies</h1>
      <div className='searchInput'>
        <input  type='text' 
                placeholder='Search movies' 
                value={searchInput} 
                onChange={(event) => {setSearchInput(event.target.value)}}
                onKeyDown={(event) => {if(event.key === 'Enter'){searchMovies(searchInput)}}}
        />
        <img
          src= {searchIcon}
          alt='search'
          onClick={() => {searchMovies(searchInput)}}
        />
      </div>

      {
        movies?.length > 0? (
          <section className='container'>
            {
              movies.map((movie) => 
              (
                <MovieCard movie = {movie}/>
              )
              )
            }
            
          </section>) :
          (
            <div className='empty'>
              <h2>No Movies Found</h2>  
            </div>
          )
      }


      
    </div>
  );
};

export default App;