import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {

  render() {
    
    const { movieData } = this.props;
    console.log("linha 11",movieData);
    return (
      <div className='movie-list'>
       { movieData.map((movie, index) => <MovieCard key=  {index} movieInfo= { movie }/>) }
       </div>
    );
  }
}

MovieList.PropTypes = {
  movieData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
}

MovieList.defaultProps = { movieData: [] }
export default MovieList;