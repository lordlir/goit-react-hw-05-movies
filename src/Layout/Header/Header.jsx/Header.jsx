import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import s from './Header.module.css';

export const Header = props => {
  return (
    <header className={s.header}>
      <NavLink
        className={({ isActive }) =>
          isActive ? s.nav_link_active : s.nav_link
        }
        to={routes.HOME}
      >
        HOME
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? s.nav_link_active : s.nav_link
        }
        to={routes.MOVIES}
      >
        MOVIES
      </NavLink>
    </header>
  );
};
