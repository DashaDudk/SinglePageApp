import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');

  const handleSearch = () => {
    onSearch(ingredients);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введіть інгредієнти..."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleSearch}>Шукати</button>
    </div>
  );
};

export default SearchBar;