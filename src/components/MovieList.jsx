import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

// Feito com a ajuda do video complementar adicionado no slack pela Maitê
// https://trybecourse.slack.com/archives/C0219LZPB9N/p1626904651348500?thread_ts=1626904498.344600&cid=C0219LZPB9N
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
