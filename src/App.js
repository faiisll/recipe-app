import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import Search from './Search';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

const App = () => {

  const APP_ID = "c1a5d863";
  const APP_KEY = "c3ec708044c06c8ff663ffc2726ddafc";
  const [recipes, setRecepices] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  
  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const resp = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await resp.json();
    if(data.count > 0){
      setRecepices(data.hits);
    }else{
      alert(`What you serach "${query}" not found`);
    }
    
  }


  return (
    <div className="App">
      <Search
        search={search}
        setQuery={setQuery}
        setSearch={setSearch}
      />

      
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.calories}
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          img={recipe.recipe.image}
          calories={recipe.recipe.calories}  
        />
      ))}
    </div>
  );
}

export default App;
