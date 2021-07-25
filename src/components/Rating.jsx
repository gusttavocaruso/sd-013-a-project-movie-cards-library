import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <header>
        <p className="rating">
          {rating}
        </p>
      </header>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number };

Rating.defaultProps = { rating: 24 };
export default Rating;
