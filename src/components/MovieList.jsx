import React from 'react';
class MovieList extends React.Component {
  render() {
    const { title, subtitle, storyLine, rating, imagePath } = this.props;

    return (
      <section>
          <h1>Título: { title }</h1>
          <h2>Subtítulo: { subtitle }</h2>
          <p>Sinópse: { storyLine }</p>
          <p>Nota: { rating }</p>
          <img src={ imagePath } alt="Série" />
      </section>
    );
  }
}

export default MovieList;
