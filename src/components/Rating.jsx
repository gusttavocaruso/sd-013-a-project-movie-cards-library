// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { prop } = this.props;
    console.log(typeof prop);
    return (<p className="rating">{ prop }</p>);
  }
}

Rating.propTypes = {
  prop: PropTypes.number,
};

Rating.defaultProps = {
  prop: undefined,
};

export default Rating;
