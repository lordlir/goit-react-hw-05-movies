import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { dataSearch } from 'servisApi/api';
import Movies from 'components/pages/Movies';
import { SearchForm } from 'components/SearchForm/SearchForm';

const SearchMovies = props => {
  const [moviesFound, setMovieFound] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const valueParams = searchParams.get('movie');

  const getSearchMovies = async queryValue => {
    try {
      const data = await dataSearch(queryValue);
      setMovieFound(data.results);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    if (valueParams) {
      getSearchMovies(valueParams);
    }
  }, [valueParams]);

  const handlSubmit = e => {
    setSearchParams({ movie: e });
  };

  return (
    <>
      <SearchForm onSubmit={handlSubmit} />
      {moviesFound.length > 0 && <Movies movies={moviesFound} />}
    </>
  );
};

export default SearchMovies;
