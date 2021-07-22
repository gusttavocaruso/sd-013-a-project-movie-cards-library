import React from 'react';
import MovieList from './MovieList';
import Rating from './Rating';

class MovieCard extends React.Component {
    render (){
        const { movie: {title, subtitle, imagePath, rating, storyline} } = this.props;
       return(
           <section>
               <img src={imagePath} alt={title} />
               <h4>{title}</h4>
               <h5>{subtitle}</h5>
               <p>{storyline}</p>
           </section>
       )
       
    }
}

export default MovieCard;
