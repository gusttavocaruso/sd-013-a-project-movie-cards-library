import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="avaliacao">
        <h6>Avaliação:</h6>
        <p className="rating">{ rating }</p>
      </div>);
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};
Rating.defaultProps = {
  rating: 3,
};

export default Rating;
