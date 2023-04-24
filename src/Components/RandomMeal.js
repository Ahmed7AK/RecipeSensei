import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./RandomMeal.css";
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://random-recipes.p.rapidapi.com/ai-quotes/1',
    headers: {
      'X-RapidAPI-Key': 'b8cb81fba4msh75ecc988d2553fbp18dfbbjsna162ec706f06',
      'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
    }
};     

const RandomMeal = ({setRecipeValue}) => {
    let [fullRecipe, setFullRecipe] = useState("");
    let [recipe, setRecipe] = useState("");
    let [image, setImage] = useState("");


    const openRecipe = (recipe) => {
        setRecipeValue(recipe);
    }
 
    let createCard = () => {
        axios.request(options).then((response) => {
            setFullRecipe(response.data[0]);
            setRecipe(response.data[0].title);
            setImage(response.data[0].image);
        });
    }
    // This will run one time after the component mounts
    useEffect(() => {
        createCard();        
    }, []);
    return (
        <div>
            <div onClick={() => openRecipe(fullRecipe)} id="card">
                <Link target="_self" to={"/recipe"}>
                    <img src={image} alt={"food"}/>
                    <p>{recipe}</p>
                </Link>
            </div>
        </div>
    );
    

};

export default RandomMeal;