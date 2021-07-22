import PropTypes from 'prop-types';

const movieType = PropTypes.shape(
  {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  },
);

export default movieType;
