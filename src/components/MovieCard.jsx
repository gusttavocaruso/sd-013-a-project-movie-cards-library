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
    const { title, subtitle, storyline, imagePath, rating } = movie;

    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
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
