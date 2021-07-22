import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{ rating }</p>
      </div>
    );
  }
}

// Rating.propTypes = {
//   rating: PropTypes.shape({}).isRequired,
// };

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
