import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.dataMovie;
    return(
      <div>
        <div>
          <img src={imagePath} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <p>{storyline}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;