import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <div>
        
          <p>{ title }</p>
          <p>{ subtitle }</p>
          <p>{ storyline }</p>
          <p>{ imagePath }</p>
          <p>{ rating }</p>
      
      </div>
    );
  }
}

export default MovieCard;
