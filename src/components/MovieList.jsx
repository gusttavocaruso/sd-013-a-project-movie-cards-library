import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { xablau } = this.props;
    return (
      <div className="movie-list">
        { xablau.map((banana) => <MovieCard key={ banana.title } xumbrega={ banana } />) }
        <h1>Rei</h1>
      </div>
    );
  }
}

MovieList.propTypes = {
  filmes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  filmes: [],
};

export default MovieList;
