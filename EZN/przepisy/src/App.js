import React, { useState } from 'react';
import './App.css'
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addRecipe = (recipe) => {
    setRecipes([...recipes, { ...recipe, id: Date.now(), favorite: false }]);
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe));
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const toggleFavorite = (id) => {
    setRecipes(
      recipes.map(recipe =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Recipe Manager</h1>
      <input className='search-recipes'
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList
        recipes={filteredRecipes}
        updateRecipe={updateRecipe}
        deleteRecipe={deleteRecipe}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;