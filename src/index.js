import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/random' element={<h1>Random Recipes</h1>}/>
      <Route path='/recipes' element={<h1>All Recipes</h1>}/>
      <Route path='/saved' element={<h1>Saved Recipes</h1>}/>
    </Routes>
  </BrowserRouter>
);

