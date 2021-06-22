import React from "react";
import classes from "./RecipeCard.module.scss";
import { NavLink } from "react-router-dom";

const recipeCard = props => {
	const recipe = props.recipe;
	const handleRecipeDelete = props.handleRecipeDelete;

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
					<div className={classes.RecipeCardInformationButton}>
						<button
							id={recipe.id}
							onClick={() => props.handleShowModal(recipe)}
						>
							Edit
						</button>
						<button
							id={recipe.id}
							onClick={() => handleRecipeDelete(recipe)}
						>
							X
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>

	);
};

export default recipeCard;