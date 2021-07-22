import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}
Rating.defaultProps = { rating: 0 };

Rating.propTypes = {
  rating: propTypes.number,
};

export default Rating;
