import React from 'react';
// import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
      </section>
    );
  }
}

// MovieCard.propTypes = {
// };

export default MovieCard;
