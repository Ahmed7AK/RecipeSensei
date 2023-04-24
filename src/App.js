import './App.css';
import Navbar from "./Components/Navbar"
import RandomMeal from './Components/RandomMeal';

export default function App({value}) {
  return (
    <div className="App">
      <Navbar />
      <div className='intro'>
        <img src='https://www.tastingtable.com/img/gallery/20-japanese-dishes-you-need-to-try-at-least-once/intro-1664219638.jpg' alt="Japanese dishes"/>
        <p>
        Recipe Sensei is a recipe website that is perfect for anyone who loves to cook or wants to try new and exciting recipes. The site generates random recipes for you to try, taking the hassle out of meal planning and giving you the opportunity to experiment with new flavors and ingredients.
        One of the great things about Recipe Sensei is that it offers a wide variety of recipes from around the world. Whether you are in the mood for a spicy Thai curry, a hearty Italian pasta dish, or a comforting bowl of Japanese ramen, you are sure to find something that will satisfy your cravings.
        </p>
      </div>
      <h2>Our Samples: </h2>
      <div className='samples'>
        <RandomMeal setRecipeValue={value} />
        <RandomMeal setRecipeValue={value} />
        <RandomMeal setRecipeValue={value} />
        <RandomMeal setRecipeValue={value} />
      </div>
      <hr />
      <div className='samples'>
        <RandomMeal setRecipeValue={value} />
        <RandomMeal setRecipeValue={value} />
        <RandomMeal setRecipeValue={value} />
        <RandomMeal setRecipeValue={value} />
      </div>
      <hr />
      <hr />
      <footer>
        <a target={"blank"} href='https://rapidapi.com/forlucas27/api/random-recipes/'>Made using the Random Recipes API on RapidAPI</a>
      </footer>
    </div>
  );
}

