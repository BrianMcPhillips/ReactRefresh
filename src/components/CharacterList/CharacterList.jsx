import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';

const CharacterList = ({ data }) => {
  const characterStuff = data.map(character => (
    <li key={character._id}>
      <Character {...character}/>
    </li>
  ));

  return (
    <ul>
      {characterStuff}
    </ul>
  );
};

CharacterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
