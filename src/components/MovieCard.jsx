import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    console.log(movieInfo);
    return (
      <section className="movie-card">
        <h1>
          { movieInfo.title }
        </h1>
        <p>{ movieInfo.subtitle }</p>
        <p>{ movieInfo.storyline }</p>
        <p>{ movieInfo.rating }</p>
        <img src={ movieInfo.imagePath } alt={ movieInfo.title } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = { movieInfo: {} };

export default MovieCard;
