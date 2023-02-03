import { useEffect, useState } from 'react';
import { dataMovies } from 'servisApi/api';
import Movies from './Movies';

const Home = props => {
  const [moviesTop, setMoviesTop] = useState([]);

  useEffect(() => {
    getTopMovies();
  }, []);

  const getTopMovies = async () => {
    try {
      const response = await dataMovies();
      setMoviesTop(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <>
      <div className="box">
        <h2>Trending today</h2>
        {moviesTop.length > 0 && <Movies movies={moviesTop} />}
      </div>
    </>
  );
};

export default Home;
