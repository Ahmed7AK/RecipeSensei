import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RecipeCard from './Components/RecipeCard';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function Index() {
  const [recipeValue, setRecipeValue] = useState("")


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App value={setRecipeValue} />}/>
      <Route path='/recipe' element={<RecipeCard value={recipeValue} />}/>
      <Route path='/random' element={<h1>Random Recipes</h1>}/>
      <Route path='/recipes' element={<h1>All Recipes</h1>}/>
      <Route path='/saved' element={<h1>Saved Recipes</h1>}/>
    </Routes>
  </BrowserRouter>
  )
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

