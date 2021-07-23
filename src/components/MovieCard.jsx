import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <div>
        <img alt="" src={ movieInfo.imagePath } />
        <h4>{ movieInfo.title }</h4>
        <h5>{ movieInfo.subtitle }</h5>
        <p>{ movieInfo.storyline }</p>
        <Rating />
      </div>
    );
  }
}

export default MovieCard;
