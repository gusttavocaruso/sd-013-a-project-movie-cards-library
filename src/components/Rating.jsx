 Fernando-Lima-movie-cards-library
// implement Rating component here


import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
 Fernando-Lima-movie-cards-library
    return <div className="rating">{rating}</div>;

    return (
      <div classeName="movie-card-rating">
        <p className="nota">Nota:</p>
        <p className="rating">{ rating }</p>
      </div>
    );

  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
