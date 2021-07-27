// implement MovieCard component here
import React from 'react';
import PropType from 'prop-types';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <section className="movie-card-body movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <Rating rating={ rating } />
      </section>
    )
  }