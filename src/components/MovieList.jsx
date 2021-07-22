import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { catalogMovies } = this.props;

    return (
      <div>
        {catalogMovies
          .map((movie) => <MovieCard key={ catalogMovies.title } movieInfos={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  catalogMovies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  catalogMovies: [],
};

export default MovieList;
