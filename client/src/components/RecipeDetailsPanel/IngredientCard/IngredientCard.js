import React from "react";
import classes from "./IngredientCard.module.scss";

const ingredientCard = props => {
	const ingredient = props.ingredient;
	return (
		<div>
			{ingredient.quantity} {ingredient.weight_unit} -> {ingredient.name}
		</div>
	);
};

export default ingredientCard;