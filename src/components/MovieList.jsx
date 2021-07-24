// implement MovieList component here
// https://pt-br.reactjs.org/docs/components-and-props.html
import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      { movies }
    );
  }
}

export default MovieList;