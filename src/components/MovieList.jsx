import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movieReturn = movies
      .map((movie) => <MovieCard key={ movie.title } movieInfo={ movie } />);
    return (
      <section>
        { movieReturn }
      </section>
    );
  }
}

export default MovieList;
