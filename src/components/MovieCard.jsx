import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie:{ title, subtitle, storyline, imagePath, rating } } = this.props;
    // const { title } = movies;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ imagePath }</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

export default MovieCard;
