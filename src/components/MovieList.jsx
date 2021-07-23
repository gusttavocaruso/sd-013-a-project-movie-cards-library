import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <section className="movie-list">
        <h4>{ movieInfo.title }</h4>
        <p>{ movieInfo.subtitle }</p>
        <img src={ movieInfo.imagePath } alt={ movieInfo.title } />
      </section>
    );
  }
}

MovieList.propTypes = {
  movieInfo: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movieInfo: [],
};

export default MovieList;
