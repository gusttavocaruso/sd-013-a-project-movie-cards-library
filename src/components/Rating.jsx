import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="rating">
        {rating.map((movie) => movie.rating)}
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

Rating.defaultProps = {
  rating: [],
};

export default Rating;
