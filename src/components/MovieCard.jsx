import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;
        const {title, subtitle, storyline, imagePath, rating } = movie;
        return (
            <section>
            <h4>{ title }</h4>
            <h5>{ subtitle }</h5>
            <p>{ storyline }</p>
            <img src={ imagePath } alt={ title } />
            <div><Rating rating={ rating }/></div>
            </section>
        );
    }
}
export default MovieCard;
