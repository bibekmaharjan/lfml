import React from 'react';
import MovieCard from './MovieCard';

function MovieList({title}) {
  return (
      <>
        <div className="movieList">
            <h1 className="text-main">{title}</h1>
            <div className="movieList__container">
                <MovieCard/>
            </div>
        
        </div>
      </>
  );
}

export default MovieList;
