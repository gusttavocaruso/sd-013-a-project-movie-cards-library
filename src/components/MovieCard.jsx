import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return(
      <li>
        <img src={imagePath} alt={title} />
        <h4>{title}</h4>
        {subtitle}, 
        {storyline}, 
        {rating}
      </li>
    );
  }
}

export default MovieCard;
