import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [query, setMovie] = useState('');

  const handleChange = e => {
    setMovie(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit(query);
  };
  return (
    <form onSubmit={handleSubmit} action="">
      <input name="input" type="text" value={query} onChange={handleChange} />
      <button>search</button>
    </form>
  );
};
