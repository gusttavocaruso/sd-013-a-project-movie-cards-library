import React from 'react';

class MovieCard extends React.Component {
    render() {
        const {movie} = this.prop
        return (
          <section>
            <p> {movie.tile}</p>
            <p> {movie.subtitle}</p>
          </section>

          
          
        );
    };
}; 

export default MovieCard;

