import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes, updateRecipe, deleteRecipe, toggleFavorite }) {
  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map(recipe => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          updateRecipe={updateRecipe}
          deleteRecipe={deleteRecipe}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default RecipeList;
