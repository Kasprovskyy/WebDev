import React, { useState } from 'react';

function RecipeForm({ addRecipe }) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ name, ingredients });
    setName('');
    setIngredients('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new recipe</h2>
      <input className='add-recipe-name'
        type="text"
        placeholder="Recipe name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br/>
      <textarea className='ingredients'
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <br/>
      <button className='add-button' type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
