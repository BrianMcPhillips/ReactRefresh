import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, image }) => (
  <>
    <img src={image} alt={name} />
    <h2>{name}</h2>
  </>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CharacterDetail;
