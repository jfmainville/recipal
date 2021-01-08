import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./RecipeDetailsPanel.module.scss";
import IngredientCard from "./IngredientCard/IngredientCard";
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
					<p>Preparation Time: {recipe.preparation_time}</p>
					<p>Cooking Time: {recipe.cook_time}</p>
					<div>
						<h1>Ingredients</h1>
						{recipe.ingredients.map(ingredient =>
							<IngredientCard
								ingredient={ingredient}
							/>
						)}
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default RecipeDetailsPanel;