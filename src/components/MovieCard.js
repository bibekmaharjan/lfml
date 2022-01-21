import React from 'react';

function MovieCard() {
  return (
      <>
        <div className="movieCard">
            <img src="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" alt="Movie Poster" className="movieCard__image" />

            <div className="movieCard__wrapper">
                <p>
                    <span className="text-reg">7.9</span> 
                    <span className="text-sm--mute">/10</span>
                </p>
                <div className="disp-flex flex-align-end mt-sm mb-sm">
                    <p className="text-med mr-sm">Altered Carbon</p>
                    <p className="text-sm--mute">Sci-Fi & Fantasy</p>
                </div>
                <div className="disp-flex mb-tn">
                    <p className="text-med--mute">Playing On: </p>
                    <p className="text-med--mute"> Netflix</p>
                </div>
                <p className="text-sm">Watch Trailer</p>
            </div>
        </div>
      </>
  );
}

export default MovieCard;
