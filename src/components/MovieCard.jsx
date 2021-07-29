import React from 'react';
import PropType from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movieInfo;

    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h3>{ title }</h3>
        <h4>{ subtitle }</h4>
        <p>{ storyline }</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string,
  }).isRequired,
};

export default MovieCard;
