// implement MovieCard component here
import React from 'react';
import Rating from './Rating'

class MovieCard extends React.Component {
  render () {
    return (
      <div>
        <img src={this.props.imagePath} alt={this.props.title} />
        <h4>{this.props.title}</h4>
        <h5>{this.props.subtitle}</h5>
        <p>{this.props.storyline}</p>
        <Rating rating = { this.props.rating }/>
      </div>
    )
  }
}

export default MovieCard