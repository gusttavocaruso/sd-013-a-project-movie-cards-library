import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie:{ title, subtitle, storyline, imagePath, rating } } = this.props;
    // const { title } = movies;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{ subtitle }</h5>
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
