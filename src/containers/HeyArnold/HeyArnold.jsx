import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/hey-arnold';
import CharacterList from '../../components/CharacterList/CharacterList';
import Loading from '../../components/Loading/Loading';

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
    <div data-testid="characters" >
      <CharacterList data={data}/>
    </div>
    
  );

};

export default HeyArnold;
