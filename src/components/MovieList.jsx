// implement MovieList component here
import React, { Component } from 'react';
import MovieCards from './MovieCard'
import PropTypes from 'prop-types';


class MovieList extends Component {
    render() {
        const { movies } = this.props;

        return(
            <div>
              {movies.map(movie => <MovieCards key={movie.title} movie={movie} />)}  
            </div>
        );
    }
}
MovieList.propTypes = {
    movies:PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string
    }).isRequired,
}
export default MovieList;