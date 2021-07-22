import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
      </div>
    );
  }
}

export default MovieCard;
