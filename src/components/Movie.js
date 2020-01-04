import React from 'react';
const DEFAULT_PLACEHOLDER_IMAGE = 
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
    const poster = 
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster; 
    
    return(
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>({movie.Year})</p>
        </div>
    );
};

export default Movie; 


//Explanation of code:
/*
- This is a presentational component that renders the movie title, image, & year
- Reason for DEFAULT_PLACEHOLDER_IMAGE = some movies retrieved from API don't 
  images - so we'll render a placeholder image instead of a broken link
*/