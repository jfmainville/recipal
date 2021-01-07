import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./RecipePanel.module.scss";
import RecipeFilter from "./RecipeFilter/RecipeFilter";

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
				{recipes.map((recipe, index) => (
					<div key={index}>
						<div className={classes.RecipeCardImage}>
							<img alt={recipe.name} width="200px" height="200px" src={`data:image/jpeg;base64,${recipe.image}`}/>
						</div>
						{recipe.name}
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export default RecipePanel;
