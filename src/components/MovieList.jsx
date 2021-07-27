// implement MovieList component here
import React from 'react'
import MovieCard from 'MovieCard.jsx';

class MovieList extends React.Component {
  render() {
    return (
      movies.map(() => <MovieCard key={this.props.title}/>)
    )
  }
}

export default MovieList;
