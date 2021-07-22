import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return <span className='rating'>{this.props.rating}</span>
  }
}

export default Rating;
