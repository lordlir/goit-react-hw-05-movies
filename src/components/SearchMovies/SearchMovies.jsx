import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { dataSearch } from 'servisApi/api';
import Movies from 'components/pages/Movies';

const SearchMovies = props => {
  const [moviesFound, setMovieFound] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const valueParams = searchParams.get('movie');

  const getSearchMovies = async queryValue => {
    try {
      const response = await dataSearch(queryValue);

      setMovieFound(response.data.results);
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
    e.preventDefault();

    const value = e.target.input.value.toLowerCase().trim();
    setSearchParams({ movie: value });
  };

  return (
    <>
      <form onSubmit={handlSubmit} action="">
        <input name="input" type="text" />
        <button>search</button>
      </form>

      {moviesFound.length > 0 && <Movies movies={moviesFound} />}
    </>
  );
};

export default SearchMovies;
