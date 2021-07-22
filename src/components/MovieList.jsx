import React, { Component } from 'react';
import Proptypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <p />
    );
  }
}

MovieList.propTypes = {
  movies: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default MovieList;
