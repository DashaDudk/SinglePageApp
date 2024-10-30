import React from 'react';

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeItem;