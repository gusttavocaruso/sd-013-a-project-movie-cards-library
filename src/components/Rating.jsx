import React from 'react';

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

export default Rating;
