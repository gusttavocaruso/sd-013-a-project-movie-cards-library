import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <section>
        <h4>{ movieInfo.title }</h4>
        <p>{ movieInfo.subtitle }</p>
        <img src={ movieInfo.imagePath } alt={ movieInfo.title } />
      </section>
    );
  }
}

export default MovieList;
