import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

export default MovieCard;

// MovieCard.propTypes = {
//   subtitle: PropTypes.string,
//   title: PropTypes.string,
//   imagePath: PropTypes.string,
//   storyline: PropTypes.string,
//   rating: PropTypes.number,
// };

// MovieCard.defaultProps = {
//   subtitle: '',
//   title: '',
//   imagePath: '',
//   storyline: '',
//   rating: 0,
// };
