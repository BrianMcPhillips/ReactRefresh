import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import CharacterList from '../../components/CharacterList/CharacterList';
import Loading from '../../components/Loading/Loading';
import { fetchCharacters } from '../../services/hey-arnold';

const HeyArnold = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <Loading />;
  return (
    <CharacterList data={data}/>
  );

};

export default HeyArnold;
