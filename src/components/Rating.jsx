// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <h5 className="rating">{ rating }</h5>
    );
  }
}

export default Rating;
