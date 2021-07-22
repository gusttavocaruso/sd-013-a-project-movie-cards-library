// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { filme } = this.props;
    return (
      <div>
        <img src={ filme.imagePath } alt="" />
      </div>
    );
  }
}

export default MovieCard;
