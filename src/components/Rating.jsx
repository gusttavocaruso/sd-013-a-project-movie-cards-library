// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render () {
    return (
      <h5 className='rating'>{this.props}</h5>
    )
  }
}

export default Rating