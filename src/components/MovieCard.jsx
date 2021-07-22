import React, { Component } from 'react';
import movies from '../data';
import Rating from './Rating';

class MovieCard extends Component {



    render() {
        const { showInfo } = this.props;
        return (
            <div className='movie-card'>
                <h4 className='movie-card-title'>{showInfo.title}</h4>
                <img src={showInfo.imagePath} className='movie-card-image'></img>
                <h5>{showInfo.subtitle}</h5>
                <p>{showInfo.storyline}</p>
                <Rating rating={showInfo.rating}></Rating>
            </div>
        );
    }
}

export default MovieCard;