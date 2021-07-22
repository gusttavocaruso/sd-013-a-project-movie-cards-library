import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return(
      <div>
        <div>
          <img src={movies.imagePath} alt={movies.title} />
        </div>
        <div>
          <h3>{movies.title}</h3>
          <h4>{movies.subtitle}</h4>
          <p>{movies.storyline}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;