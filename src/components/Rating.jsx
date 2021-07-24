// implement Rating component here

import React from 'react';
import PropType from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rate } = this.props;
    return (
      <div>
        <p>{ rate }</p>
      </div>
    );
  }
}

Rating.propType = {
  rate: PropType.number.isRequired,
};

export default Rating;
