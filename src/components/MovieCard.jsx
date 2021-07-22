// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, rating } = movie;
    return (
      <div>
        <section>
          <img src={ imagePath } alt={ title } />
        </section>
      </div>
    );
  }
}

export default MovieCard;
