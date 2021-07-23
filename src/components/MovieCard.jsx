import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { moviesList } = this.props;
    return (
      <section className="">
        <h4>{ moviesList.title }</h4>
        <h5 className="movie-card-subtitle">
          { moviesList.subtitle }
        </h5>
        <p className="movie-card-storyline">
          Sinopse:
          { moviesList.storyline }
        </p>
        <img src={ moviesList.imagePath } alt={ moviesList.title } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieCard.defaultProps = {
  moviesList: [],
};

export default MovieCard;
