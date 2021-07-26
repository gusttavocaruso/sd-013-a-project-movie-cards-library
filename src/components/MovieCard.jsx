import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;
    return (
      <section className="container-movie-card">
        <div className="card-movie">
          <img src={ imagePath } alt={ title } />
          <h4>{ title }</h4>
          <h5>{ subtitle}</h5>
          <p>{ storyline }</p>
        </div>
      </section>
    );
  }
}

// Os conhecimentos de props foram adquiridos em um video a parte que a professora Maitê nos forneceu,fora da aula ao vivo repassado via Slack.

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

// MovieCard.defaultProps = {
//   film: {},
// };

export default MovieCard;
