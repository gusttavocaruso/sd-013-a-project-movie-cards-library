import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;

    return (
      <section>
        <span role="img" aria-label="Star">⭐</span>
        <p className="rating">
          { rating }
        </p>
      </section>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number };

// Refactored based on Project Movie Cards Library Stateful
Rating.defaultProps = { rating: 'undefined' };

export default Rating;
