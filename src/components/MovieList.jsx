import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
};

MovieList.defaultProps = {
  movies: [
    {
      title: 'teste',
      subtitle: 'teste',
      storyline: 'Steven Seagall',
      rating: 4.5,
      imagePath: 'https://pics.me.me/steven-seagal-steven-seagull-steven-seagull-19223227.png',
    },
  ],
};

export default MovieList;
