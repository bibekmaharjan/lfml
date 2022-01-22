import React from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

function Home() {

  return (
      <>  
          <Header/>
          <section className="home">
              <MovieList title= "Trending TV Shows" listGenre= "tv" apiLink= "/3/trending/tv/day?api_key=" genreLink= "/3/genre/tv/list?api_key="/>
              <MovieList title= "Trending Movies" listGenre= "movie" apiLink= "/3/trending/movie/day?api_key=" genreLink= "/3/genre/movie/list?api_key="/>
          </section>
      </>
  );
}

export default Home;
