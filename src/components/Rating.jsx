// implement Rating component here
import React from 'react';
import PropsTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">
        { rating }
      </p>
    );
  }
}

Rating.propTypes = {
  rating: PropsTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
