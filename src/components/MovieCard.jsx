// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle, storyline, rating, link } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

// MovieCard.propTypes = {

// }

export default MovieCard;
