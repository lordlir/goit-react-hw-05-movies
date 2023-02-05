import React, { useEffect, useState } from 'react';
import { dataCast } from 'servisApi/api';
import { useParams } from 'react-router-dom';

const Cast = props => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getDataCast(movieId);
  }, [movieId]);

  const getDataCast = async id => {
    try {
      const data = await dataCast(id);
      setMovieCast(data.cast);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <ul>
      {movieCast.length > 0 &&
        movieCast.map(({ original_name, credit_id }) => (
          <li key={credit_id}>
            <p>{original_name}</p>
          </li>
        ))}
    </ul>
  );
};
export default Cast;
