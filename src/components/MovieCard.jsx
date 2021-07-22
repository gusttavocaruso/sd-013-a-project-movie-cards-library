import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return(
      <li>
        {title}, 
        {subtitle}, 
        {storyline}, 
        {rating}, 
        {imagePath}
      </li>
    );
  }
}

export default MovieCard;
