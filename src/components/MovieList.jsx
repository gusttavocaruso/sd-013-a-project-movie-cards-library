import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((info) => <MovieCard key={ info.title } movie={ info } />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.string.isRequired };

export default MovieList;
