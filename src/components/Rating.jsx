import React, { Component } from 'react';
import { number } from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;

    return (
      <div>
        <p>{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: number,
};
Rating.defaultProps = {
  rating: 0,
};

export default Rating;
