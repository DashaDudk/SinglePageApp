import React, { useState } from 'react';
import './App.css';

function App() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [noResults, setNoResults] = useState(false); 
  
  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSearch = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=cc067f7aaf11451a9f6b9d9c40e00a9e`);
    const data = await response.json();
    setRecipes(data);
    setNoResults(data.length === 0);
  };

  const handleRecipeClick = async (id) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=cc067f7aaf11451a9f6b9d9c40e00a9e`);
    const data = await response.json();
    setSelectedRecipe(data);
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <input 
        type="text" 
        value={ingredient} 
        onChange={handleInputChange} 
        placeholder="Enter ingredients" 
      />
      <button onClick={handleSearch}>Search Recipes</button>
      
      {noResults ? (
        <p className="no-results">No recipes found for these ingredients. Please try again!</p>
      ) : (
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} style={{ width: '100px', height: '100px' }} />
          </li>
        ))}
      </ul>
      )}

      {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.title}</h2>
          <img src={selectedRecipe.image} alt={selectedRecipe.title} />
          <h3>Instructions:</h3>
          <p>{selectedRecipe.instructions}</p>
        </div>
      )}
    </div>
  );
}

export default App;