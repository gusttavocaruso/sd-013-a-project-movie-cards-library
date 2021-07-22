// implement MovieList component here
import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>{movies}</div>
    );
  }
}

export default MovieList;
