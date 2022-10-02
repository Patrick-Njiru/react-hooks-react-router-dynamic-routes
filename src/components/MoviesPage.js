import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  // use RouteMatch returns a special object with information about the currently matched route
  const match = useRouteMatch()
  console.log('match', match)

  return (
    <div>
      <MoviesList movies={movies} />
      {/* Adding code to show a message to the user to select a movie id they haven't yet */}
      <Route exact path={match.url} >
        <h3> Choose a movie from the list above </h3>
      </Route>
      <Route path={`${match.url}/:movieId`} >
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
