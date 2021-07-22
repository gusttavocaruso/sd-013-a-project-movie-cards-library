import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        {rating}
      </div>
    );
  }
}

Rating.propTypes = {
  rating: Proptypes.string,
}.isRequired;

export default Rating;
