import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <div>
        <p> </p>
      </div>
    );
  }
}

export default MovieCard;
