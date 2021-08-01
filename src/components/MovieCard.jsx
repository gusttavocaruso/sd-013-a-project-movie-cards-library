import React, { Component } from 'react';

class MovieCard extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     title: '',
  //     subtitle: '',
  //     storyline: '',
  //     imagePath: '',
  //     rating: '',
  //   };
  // }

  render() {
    const { movie } = this.props;

    return (
      <section>
        <img src={ movie.imagePath } alt={ movie.title } />
      </section>
    );
  }
}

export default MovieCard;

// MovieCard.propTypes = {
//   subtitle: PropTypes.string,
//   title: PropTypes.string,
//   imagePath: PropTypes.string,
//   storyline: PropTypes.string,
//   rating: PropTypes.number,
// };

// MovieCard.defaultProps = {
//   subtitle: '',
//   title: '',
//   imagePath: '',
//   storyline: '',
//   rating: 0,
// };
