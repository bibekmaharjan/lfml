import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

import axios from 'axios';

function MovieList({title, apiLink, genreLink, listGenre}) {

    const [moviesData, setMoviesData] = useState([]);
    const [genreData, setGenreData] = useState([]);

    useEffect(() => {

        //////////FOR MOVIE DATA
        
        axios.get(`${apiLink}${process.env.REACT_APP_MOVIE_API_KEY}`)
            .then((res) => {
                setMoviesData(res.data.results)
            })
            .catch((e) => {
                console.log(e)
            })
        
        //////////FOR GENRE DATA

        axios.get(`${genreLink}${process.env.REACT_APP_MOVIE_API_KEY}`)
            .then((res) => {
                setGenreData(res.data.genres)
            })
            .catch((e) => {
                console.log(e)
            })
    },[])

  return (
      <>
        <div className="movieList">
            <h1 className="text-main mb-lg">{title}</h1>
            <div className="movieList__container">
                {
                    moviesData &&
                    moviesData.map(movieData => (
                        <MovieCard movieData = {movieData} genreData= {genreData} listGenre= {listGenre} />
                    ))
                }
            </div>
        
        </div>
      </>
  );
}

export default MovieList;
