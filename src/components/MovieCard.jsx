import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // linha 10 MovieList
    const { imagePath, title, subtitle, storyline} = movie;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </section>
    );
  }
}

export default MovieCard;
