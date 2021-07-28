// implement MovieList component here
import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    // const { movies } = this.props;
    // movies = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

// MovieList.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.number,
//     imagePath: PropTypes.string,
//   }).isRequired,
// };

// MovieList.defautProps = {
//   movies: [],
// };

// MovieList.protoType = {
//   movie: PropTypes.arrayOf(PropTypes.object),
// };

// MovieList.defautProps = {
//   movies: [],
// };

export default MovieList;
