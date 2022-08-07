import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, image, _id }) => (
  <>
    <Link to={`/detail/${_id}`}>
      <img src={image} alt={name}/>
    </Link>
    <h2>{name}</h2>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};

export default Character;
