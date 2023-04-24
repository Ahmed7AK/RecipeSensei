import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RecipeCard from './Components/RecipeCard';
import RandomRecipeCard from './Components/RandomRecipeCard';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://random-recipes.p.rapidapi.com/ai-quotes/1',
  headers: {
    'X-RapidAPI-Key': 'b8cb81fba4msh75ecc988d2553fbp18dfbbjsna162ec706f06',
    'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
  }
}; 

function Index() {
  const [recipeValue, setRecipeValue] = useState("");
  const [randomRecipe, setRandomRecipe] = useState("");

  const generateRandom = () => {
    axios.request(options).then((response) => {
        setRandomRecipe(response.data[0]);
    });
  }
  useEffect(() => {
    generateRandom()    
  }, [])
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App value={setRecipeValue} />}/>
      <Route path='/recipe' element={<RecipeCard value={recipeValue} />}/>
      <Route path='/random' element={
      <div>
        <div>
          <h1 onClick={() => generateRandom()}>Generate Random</h1>
        </div>
        <RandomRecipeCard value={randomRecipe}/>
      </div>
      }/>
      <Route path='/recipes' element={<h1>All Recipes</h1>}/>
    </Routes>
  </BrowserRouter>
  )
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

