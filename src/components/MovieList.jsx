import React from 'react';
import App from '../App';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
    render (){
        const {movies : {title, subtitle, storyline, rating, imagePath} } = this.props;
       return(
           <div>
              <MovieCard />
              <p>{ title }</p>
             <p>{ subtitle }</p>
             <p>
               {`Rating: ${rating}`}
             </p>
             <img src={ imagePath } alt={title} />
           </div>
          
       )
    }
}

export default MovieList;
