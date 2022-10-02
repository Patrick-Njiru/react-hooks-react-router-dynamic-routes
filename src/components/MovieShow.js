import React from "react";
import { useParams } from "react-router-dom";

const MovieShow = ( { movies } ) => {
    // Cal useParams to access the 'params' from the url
    const params = useParams()
    console.log( "params", params)
    return (
        <div>
            {/* and here we access the 'movieId' stored in 'params' to render info about the selected movie */}
            <h3> {movies[params.movieId].title}</h3>
        </div>
    )
}

export default MovieShow