import React from "react";
import { Link }from "react-router-dom";

const MoviesList = ( {movies} ) => {

    // console.log(Object.keys(movies)) // {'1', '2', '3'}
    const renderMovies = Object.keys(movies).map(movieID => (
        <li key={movieID}>
            <Link to={`/movies/${movieID}`}>
                {movies[movieID].title}
            </Link>
        </li>
    ))

return <ul>{renderMovies}</ul>
}

export default MoviesList