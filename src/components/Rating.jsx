import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;

    return (
      <section className="movie-card-rating">
        <div>
          <h1>Rating</h1>
        </div>
        <div className="rating">
          {rating}
        </div>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropsTypes.number.isRequired,
};

export default Rating;
