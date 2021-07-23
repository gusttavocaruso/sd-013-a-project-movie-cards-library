import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movInfo) => <MovieCard key={ movInfo.title } movies={ movInfo } />)}
      </div>
    );
  }
}

export default MovieList;
