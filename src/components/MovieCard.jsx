// implement MovieCard component here
import React from 'react';
// import movies from '../data';
import MovieList from './MovieList';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <h1>
          Filme:
          {movie.title}
        </h1>
        {/* <h2>teste</h2> */}

      </section>
    );
  }
}

export default MovieCard;
