import React from 'react';
import PropTypes from 'prop-types';
// import MovieCard from './MovieCard';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    console.log(rating);
    return (
      <p>
        {rating}
      </p>
    );
  }
}
Rating.propTypes = {
  rating: PropTypes.isRequired,
};

export default Rating;
