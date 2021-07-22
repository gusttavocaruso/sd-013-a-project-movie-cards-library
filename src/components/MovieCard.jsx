import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, imagePath } } = this.props; // https://stackoverflow.com/questions/53712796/must-use-destructuring-props-assignment
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: [],
  title: 'filme',
  subtitle: 'subtitle',
  storyline: 'storyline',
  imagePath: 'thumbnail',
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string), // https://stackoverflow.com/questions/41771217/react-linter-airbnb-proptypes-array
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
};

export default MovieList;
