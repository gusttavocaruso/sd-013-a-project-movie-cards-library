// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends Component {
    render() {
        const { movie: { title, subtitle, storyline, rating, imagePath }} = this.props;

        return(
            <div>
                <div>
                    <img src = {imagePath} alt={title} />
                    <h4>{ title }</h4>
                    <h5>{ subtitle }</h5>
                    <p>{ storyline }</p> 
                    <Rating rating = { rating } />
                </div>
            </div>
        )
    }
}

MovieCard.prototype = {
    movie: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string
    })).isRequired,
};

MovieCard.defaultProps = {
    movie: {},
}
export default MovieCard;
