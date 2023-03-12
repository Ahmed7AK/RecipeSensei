import { useState } from "react";
import "./RecipeCard.css";
import axios from "axios";

const RecipeCard = () => {
    let [recipe, setRecipe] = useState("");
    let [image, setImage] = useState("");

    const options = {
        method: 'GET',
        url: 'https://random-recipes.p.rapidapi.com/ai-quotes/1',
        headers: {
          'X-RapidAPI-Key': 'b8cb81fba4msh75ecc988d2553fbp18dfbbjsna162ec706f06',
          'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
        }
      };      
    let createCard = () => {
        axios.request(options).then((response) => {
            setRecipe(response.data[0].title);
            setImage(response.data[0].image);
        });
    }
   

    return (
        <div>
            <button onClick={() => createCard()}>Click Me!</button>
            <div id="card">
                <img src={image} alt={"food"}/>
                <p>{recipe}</p>

            </div>
            
        </div>
    );
};

export default RecipeCard;