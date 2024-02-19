import React from "react";

const MovieCard = (props) => 
{
    const {movie} = props;
    return(
        <div className='movie'>
          <div className="movie-year">
            <p>{movie.Year}</p>
          </div>

          <div className="movie-poster">
            <img  src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
                  alt= {movie.Title} />
          </div>

          <div>
            <span id="movie-type">{movie.Type}</span>
            <h3 id="movie-title">{movie.Title}</h3>
          </div>
        </div>
    );
};

export default MovieCard;