import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;

/* Referências: Aula ao vivo 11.2 e vídeo sobre Proptypes disponilzado no Slack pela
especialista Maitê Marques.
Estilo ajustada com a ajuda da aluna Luiza Antiques */
