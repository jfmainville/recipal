import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./RecipePanel.module.scss";
import RecipeCard from "./RecipeCard/RecipeCard";

const RecipePanel = () => {
	const recipes = useSelector(state => state.recipe.recipes);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.fetchRecipes());
	}, []);

	const handleDeleteRecipe = (recipe) => {
		let data = {};
		if (recipe.id) {
			data = recipe.id;
			dispatch(actions.deleteRecipe(data));
		}
	};

	return (
		<React.Fragment>
			<div className={classes.RecipeCard}>
				{recipes.map(recipe => (
					<RecipeCard
						key={recipe.id}
						recipe={recipe}
						handleDeleteRecipe={handleDeleteRecipe}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

export default RecipePanel;
