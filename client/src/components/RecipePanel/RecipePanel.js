import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./RecipePanel.module.scss";
import RecipeFilter from "./RecipeFilter/RecipeFilter";
import RecipeCard from "./RecipeCard/RecipeCard";

const RecipePanel = () => {
	const recipes = useSelector(state => state.recipe.recipes);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.fetchRecipes());
	}, []);

	return (
		<React.Fragment>
			<div className={classes.RecipeFilter}>
				<RecipeFilter/>
			</div>
			<div className={classes.RecipeCard}>
				{recipes.map(recipe => (
					<RecipeCard
						key={recipe.id}
						recipe={recipe}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

export default RecipePanel;
