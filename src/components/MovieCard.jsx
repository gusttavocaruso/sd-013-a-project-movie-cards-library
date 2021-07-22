import React from 'react';
import MovieList from './MovieList';

class MovieCard extends React.Component {
    render (){
        const { movies } = this.props;
        const lista =  movies.map((movie, index )=> <MovieList key={index} movie={movie} />)
       return(
           <div>
            <MovieCard movie={ movie } />
            <p>{lista}</p>
        </div>
       )
       
    }
}

export default MovieCard;
