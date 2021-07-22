// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    // const { title, imagePath, subtitle, storyline, rating } = movieData;
    return (
      <section>
        <p className="rating">{ rating }</p>
      </section>
    );
  }
}

export default Rating;
