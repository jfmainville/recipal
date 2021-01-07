import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./RecipeDetailsPanel.module.scss";
import { useParams } from "react-router";

const RecipeDetailsPanel = () => {
	const recipe = useSelector(state => state.recipe.recipes);
	const { recipe_id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.fetchRecipeDetails(recipe_id));
	}, []);

	return (
		<React.Fragment>
			{recipe.map(recipe => (
				<div className={classes.RecipeDetailsPanel}>
					<img alt={recipe.name} width="100%" height="300px" src={`data:image/jpeg;base64,${recipe.image}`}/>
					<h1>{recipe.name}</h1>
				</div>
			))}
		</React.Fragment>
	);
};

export default RecipeDetailsPanel;