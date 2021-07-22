import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import styles from './Rating.module.css';

class Rating extends Component {
  render() {
    const { rating } = this.props;

    return (
      <h6 className="rating">{ rating }</h6>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
