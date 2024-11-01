import React, { useState } from 'react';

function RecipeItem({ recipe, updateRecipe, deleteRecipe, toggleFavorite }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  const handleUpdate = () => {
    updateRecipe({ ...recipe, name, ingredients });
    setIsEditing(false);
  };

  return (
    <div className="recipe-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{recipe.name}</h3>
          <p>{recipe.ingredients}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {recipe.favorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      )}
    </div>
  );
}

export default RecipeItem;
