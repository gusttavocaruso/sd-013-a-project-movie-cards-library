import React from 'react';

class MovieList extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { movies } = this.props;
    console.log(movies);
    return <h2>olá</h2>;
  }
}
export default MovieList;
