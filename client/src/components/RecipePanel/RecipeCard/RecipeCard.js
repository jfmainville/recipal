import React from "react";
import classes from "./RecipeCard.module.scss";
import { NavLink } from "react-router-dom";

const recipeCard = props => {
	const recipe = props.recipe;

	return (
		<React.Fragment>
			<div className={classes.RecipeCard}>
				<NavLink
					activeClassName={classes.NavigationItemLinkActive}
					className={classes.NavigationItemLink}
					to={"/" + recipe.id}
				>
					<img alt={recipe.name} width="200px" height="200px" src={`data:image/jpeg;base64,${recipe.image}`}/>
				</NavLink>
				<div className={classes.RecipeCardInformation}>
					<p>{recipe.name}</p>
					<button>X</button>
				</div>
			</div>
		</React.Fragment>

	);
};

export default recipeCard;