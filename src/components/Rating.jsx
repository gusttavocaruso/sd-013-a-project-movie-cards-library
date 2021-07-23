import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    // console.log(rating,'<--linha 6 Rating-->',this.props);
    return (

      <p className="movie rating">{ rating }</p>

    );
  }
}
Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = { rating: -1 };
export default Rating;
