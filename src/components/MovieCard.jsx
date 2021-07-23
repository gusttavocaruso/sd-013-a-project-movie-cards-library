import React from 'react';
//import Rating from './components/Rating';

class MovieCard extends React.Component {
    render() {
      const { movie }= this.props; 
      const { title, subtitle, storyline, rating, imagePath } = movie;
        return (
          <section>
            <img src={imagePath} alt={title} />
            <h4>{title}</h4> 
            <h5>{subtitle}</h5>
            <p>{storyline}</p>
            { <Rating rating = {rating} /> }
         </section>       
        )
    }
} 

 export default MovieCard;

