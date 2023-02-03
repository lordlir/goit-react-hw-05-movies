import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from 'routes';

const Movies = ({ movies }) => {
  const { pathname, search } = useLocation();
  const urlImg = 'https://image.tmdb.org/t/p/w300';

  return (
    <ul>
      {movies.map(({ original_title, id, poster_path }) => (
        <li key={id}>
          <NavLink
            to={`${routes.MOVIES}/${id}`}
            state={{ prevLocationPath: pathname + search }}
          >
            <img src={`${urlImg + poster_path}`} width="50" />
            {original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Movies;
