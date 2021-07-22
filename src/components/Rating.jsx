// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css'

class Rating extends Component {
  render() {
    const { rating } = this.props;

    return (
    <div className='movie-card-rating'>
       <div className="rating">
        {rating}
      </div>
    </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default Rating;
