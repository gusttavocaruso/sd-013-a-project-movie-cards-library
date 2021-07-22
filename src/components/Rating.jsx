// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';
// import MovieCard from './MovieCard';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    console.log(rating);
    return (
      <h3>
        {rating}
      </h3>

    );
  }
}
Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
