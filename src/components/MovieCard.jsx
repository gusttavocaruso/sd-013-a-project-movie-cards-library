// implement MovieCard component here
import React from 'react';
// import PropTypes from 'prop-types';

import movies from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <img src={ imagePath } alt={ title } />
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <Rating />
      </div>
    );
  }
}

// MovieCard.PropTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.array,
// };

export default MovieCard;
