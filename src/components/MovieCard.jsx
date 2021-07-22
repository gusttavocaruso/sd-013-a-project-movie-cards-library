// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
      </section>
    );
  }
}

export default MovieCard;
