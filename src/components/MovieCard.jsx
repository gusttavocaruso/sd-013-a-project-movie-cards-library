import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt={ title }/>
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subttile">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
      </div>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
