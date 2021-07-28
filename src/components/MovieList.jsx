import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <div>
        <MovieCard
          key={ title }
          title={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          rating={ rating }
          imagePath={ imagePath }
        />
      </div>
    );
  }
}

// Eduardo me ajudou a concertar meu prop-types
MovieList.propTypes = {
  title: PropTypes.arrayOf(PropTypes.object).isRequired,
  subtitle: PropTypes.arrayOf(PropTypes.object).isRequired,
  storyline: PropTypes.arrayOf(PropTypes.object).isRequired,
  rating: PropTypes.arrayOf(PropTypes.object).isRequired,
  imagePath: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
