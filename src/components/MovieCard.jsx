import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <div>
          <img src={ imagePath } alt={ title } />
        </div>
        <div>
          <h3>{ title }</h3>
          <h4>{ subtitle }</h4>
          <p>{ storyline }</p>
          <p>{ rating }</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'Filmezinho',
    subtitle: 'Filmezinho top',
    storyline: 'filminho bom demais',
    rating: 5,
    imagePath: 'https://pics.me.me/steven-seagal-steven-seagull-steven-seagull-19223227.png',
  },
};

export default MovieCard;
