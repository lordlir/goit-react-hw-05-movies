import React from 'react';
import { Header } from './Header/Header.jsx/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = props => {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
