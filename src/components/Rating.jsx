import React from 'react';
import PropsTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p>{rating}</p>
    );
  }
}

Rating.propTypes = {
  rating: PropsTypes.number.isRequired,
};

export default Rating;
