import React from 'react';
import MovieList from '../components/MovieList';

function Home() {
  return (
      <>
        <div className="container">
            <MovieList title= "Trending TV Shows"/>
        </div>
      </>
  );
}

export default Home;
