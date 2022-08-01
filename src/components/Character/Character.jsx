import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <div>
    <img src={image} alt={name}/>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
