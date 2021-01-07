import React from "react";
import classes from "./RecipeCard.module.scss";

const recipeCard = props => {
	const recipe = props.recipe;

	return (
		<div className={classes.RecipeCard}>
			<img alt={recipe.name} width="200px" height="200px" src={`data:image/jpeg;base64,${recipe.image}`}/>
			<div className={classes.RecipeCardInformation}>
				<p>{recipe.name}</p>
				<button>X</button>
			</div>
		</div>
	);
};

export default recipeCard;