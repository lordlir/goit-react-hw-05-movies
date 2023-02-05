import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataReviews } from 'servisApi/api';

const Reviews = props => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  const getDataReviews = async id => {
    try {
      const data = await dataReviews(id);
      setReviews(data.results);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getDataReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ author, id }) => (
          <li key={id}>
            <p>{author}</p>
          </li>
        ))
      ) : (
        <p>empty</p>
      )}
    </ul>
  );
};
export default Reviews;
