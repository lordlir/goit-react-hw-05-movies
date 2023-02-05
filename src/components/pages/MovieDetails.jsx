import React, { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { routes } from 'routes';
import { dataDetails } from 'servisApi/api';
import { BiArrowBack } from 'react-icons/bi';

const MovieDetails = props => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  const getDataDetails = async id => {
    try {
      const data = await dataDetails(id);
      setMovie(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getDataDetails(movieId);
  }, [movieId]);

  if (!movie) return null;
  const { original_title, poster_path } = movie;
  const urlImg = 'https://image.tmdb.org/t/p/w1280';

  return (
    <>
      <NavLink to={location.state?.prevLocationPath ?? routes.HOME}>
        <button>
          <BiArrowBack />
          go back
        </button>
      </NavLink>
      {movie && (
        <div>
          <h2>{original_title}</h2>
          <img
            src={`${urlImg + poster_path}`}
            alt={original_title}
            width="250"
          />
        </div>
      )}

      <NavLink to={routes.CAST}>CAST</NavLink>

      <NavLink to={routes.REVIEWS}>REVIEWS</NavLink>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
