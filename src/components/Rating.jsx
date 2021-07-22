// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="move-card-rating">
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

export default Rating;
