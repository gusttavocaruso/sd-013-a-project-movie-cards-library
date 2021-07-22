// implement Rating component here
import React from 'react';
// import MovieCard from './MovieCard';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    console.log(rating);
    return (
      <p>{rating}</p>

    );
  }
}
Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
