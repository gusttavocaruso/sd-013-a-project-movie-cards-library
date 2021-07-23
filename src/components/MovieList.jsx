import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movieData } = this.props;

    return (
      <section className="">
        {movieData.map((movie) => <MovieCard key={ movie.title } moviesList={ movie } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movieData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movieData: [],
};

export default MovieList;
