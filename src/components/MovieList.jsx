import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
    render() {
        return (
            <div>
                {movies.map((movies) => <MovieCard key={movies.rating} showInfo={movies}/>)}
            </div>
        );
    }
}

export default MovieList;