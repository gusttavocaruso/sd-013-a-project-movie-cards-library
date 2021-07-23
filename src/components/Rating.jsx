import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { ratingData } = this.props;

    return (
      <section className="rating">
        {ratingData.map((data) => data.rating)}
      </section>
    );
  }
}

Rating.propTypes = {
  ratingData: PropTypes.arrayOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

Rating.defaultProps = {
  ratingData: [],
};

export default Rating;
