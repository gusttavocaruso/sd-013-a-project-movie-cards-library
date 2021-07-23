import React from 'react';
import PropTypes from 'prop-types';

// Aonde eu estou organizando os meus dados que la do data: sequencia, oq eu quero de qual forma eu apresento.
class MovieCard extends React.Component {
  render() {
    // desentruturando os dados que esta vindo do elemento pai(MovieList.jsx) e filtrando do jeito que eu quero.
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={ imagePath } alt={ title } />
        <p>{rating}</p>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
