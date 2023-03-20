import "./RecipeCard.css";

const RecipeCard = ({value}) => {

    const renderIngredients = value.ingredients.map((item, index) => 
        <p key={index}>&#x2022; {item}</p>
    )
    const renderInstructions = value.instructions.map((item, index) => 
        <p key={index}>{item.text}</p> 
    )
    
    
    
    return (
        <div id="recipe-div">
            <div id="recipe">
                <img src={value.image} alt={"food"} />            
                <p>{value.title}</p>
            </div>
            <h3>Ingredients: </h3>
            {renderIngredients}
            <br/>
            <h3>Instructions: </h3>
            <p>{renderInstructions}</p>
        </div>
    );
};

export default RecipeCard;