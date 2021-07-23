import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <section className="">
        <h4>{ movie.title }</h4>
        <h5 className="movie-card-subtitle">
          { movie.subtitle }
        </h5>
        <p className="movie-card-storyline">
          { movie.storyline }
        </p>
        <img src={ movie.imagePath } alt={ movie.title } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieCard.defaultProps = {
  movie: [],
};

export default MovieCard;
