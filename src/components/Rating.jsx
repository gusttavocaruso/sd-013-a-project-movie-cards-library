// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    console.log(typeof rating);
    return (<p className="rating">{ rating }</p>);
  }
}

Rating.propTypes = {
  prop: PropTypes.number,
};

Rating.defaultProps = {
  prop: undefined,
};

export default Rating;
