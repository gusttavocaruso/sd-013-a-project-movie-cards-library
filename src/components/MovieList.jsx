// implement MovieList component here
import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie) => <h1>movie</h1>)}
      </div>
    );
  }
}

export default MovieList;
