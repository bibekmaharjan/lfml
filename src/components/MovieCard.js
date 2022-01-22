import axios from 'axios';
import React, { useEffect, useState } from 'react';

function MovieCard({movieData, genreData, listGenre}) {
    const[imdbId, setImdbId] = useState('')
    const[ytId, setYtId] = useState('')
    const [genres, setGenres] = useState('')


    useEffect(() => {
        //Can also be done with axios.all
        //////////FOR IMDB ID
        axios.get(`/3/${listGenre}/${movieData.id}/external_ids?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
        .then((res) => {
            setImdbId(res.data.imdb_id)
        })
        .catch((e) => {
            console.log(e)
        })

        //////////FOR YT ID
        axios.get(`/3/${listGenre}/${movieData.id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
        .then((res) => {
            setYtId(res.data.results.filter(vid => vid.type === "Trailer")[0].key)
        })
        .catch((e) => {
            console.log(e)
        })


        //////////FOR GENRE LISTING
        let tempGenre = []
        movieData.genre_ids &&
        movieData.genre_ids.map((genCode) => (
            genreData.filter(genre => genre.id === genCode).map(gen => tempGenre.push(gen.name))
    
        ))
    
        setGenres(tempGenre.join(" ● "))
    },[])


  return (
      <>
        <div className="movieCard">
            <a href={`https://www.imdb.com/title/${imdbId}/`} target="blank" className="movieCard-imgLink">
                <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt="Movie Poster" className="movieCard__image" />
                <p className="movieCard__caption">IMDB</p>
            </a>

            <div className="movieCard__wrapper">
                <p>
                    <span className="text-reg">{movieData.vote_average}</span> 
                    <span className="text-sm--mute">/10</span>
                </p>
                <div className="disp-flex flex-align-end mt-sm mb-sm">
                    {
                        //Title check because of different values in api data
                        movieData.title ?
                        <a href={`https://www.imdb.com/title/${imdbId}/`} target="blank" className="text-med movieCard-link mr-sm">{movieData.title}</a> 
                        :
                        <a href={`https://www.imdb.com/title/${imdbId}/`} target="blank" className="text-med movieCard-link mr-sm">{movieData.name}</a>
                    }
                    <p className="text-sm--mute">
                    {
                        genres && genres
                    }
                    </p>
                </div>
                <div className="disp-flex mb-tn">
                    <p className="text-med--mute">Playing On: &nbsp;</p>
                    <p className="text-med--mute"> Netflix</p>
                </div>
                <a href= {`https://www.youtube.com/watch?v=${ytId}`} target="blank" className="text-sm movieCard-link">Watch Trailer</a>
            </div>
        </div>
      </>
  );
}

export default MovieCard;
