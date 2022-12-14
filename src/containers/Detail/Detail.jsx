import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';
import Loading from '../../components/Loading/Loading';
import { fetchSingleCharacter } from '../../services/hey-arnold';

const Detail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams(); 
  
  useEffect(() => {
    fetchSingleCharacter(id)
      .then(data => setData(data))
      .finally(setLoading(false));
  }, []);

  if(loading) return <Loading />;
  return (
    <div>
      <CharacterDetail {...data} />
    </div>
  );
};

export default Detail;
