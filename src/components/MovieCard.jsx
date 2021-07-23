// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { objct } = this.props;
    return (
      <div>
        <img src={ objct.imagePath } alt={ objct.title } />
        <h4>{ objct.title }</h4>
        <h5>{ objct.subtitle }</h5>
        <p>{ objct.storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
