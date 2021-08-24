import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline } = movie;
    return (
      <section>
        <img
          src={ imagePath }
          alt={ title }
        />
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <div>
            <h6>Classificação:</h6>
          </div>
        </div>
      </section>
    );
  }
}
MovieCard.propTypes = {
  movie: shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    rating: PropTypes.number,
    storyline: PropTypes.string,
  }),
};
MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
