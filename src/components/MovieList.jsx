import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import movies from '../data';

class MovieList extends React.Component {
    render() {
        const {movie } = this.props;
       return(
           <main>
                <h2>Best Movie of the Week</h2>
                <div>
                {movies.map((movie, index) => <MovieCard key={index} movie={movie}/>)}
                </div>
           </main>
       )
    }
}

export default MovieList;
