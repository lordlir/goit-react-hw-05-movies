import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from 'routes';
import { Layout } from 'Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const SearchMovies = lazy(() => import('./SearchMovies/SearchMovies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<SearchMovies />} />
        <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />}>
          <Route path={routes.CAST} element={<Cast />} />
          <Route path={routes.REVIEWS} element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Route>
    </Routes>
  );
};
