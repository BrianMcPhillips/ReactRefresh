import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import CharacterList from '../../components/CharacterList/CharacterList';
import Loading from '../../components/Loading/Loading';

const HeyArnold = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <Loading />;
  return (
    <CharacterList data={data}/>
  );

};

export default HeyArnold;
