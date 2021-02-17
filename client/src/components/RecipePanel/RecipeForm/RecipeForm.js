import React from "react";
import classes from "./RecipeForm.module.scss";
import UploadField from "../../UI/UploadField/UploadField";
import InputField from "../../UI/InputField/InputField";
import Button from "../../UI/Button/Button";

const RecipeForm = (props) => {
	const handleRecipeImageUpload = props.handleRecipeImageUpload;
	const handleRecipeNameInput = props.handleRecipeNameInput;
	const recipeNameInput = props.recipeNameInput;
	const handleRecipePreparationTimeInput = props.handleRecipePreparationTimeInput;
	const recipePreparationTimeInput = props.recipePreparationTimeInput;
	const handleRecipeCookTimeInput = props.handleRecipeCookTimeInput;
	const recipeCookTimeInput = props.recipeCookTimeInput;
	const handleRecipeCreate = props.handleRecipeCreate;

	return (
		<div className={classes.NewRecipePanel}>
			<h1>New Recipe</h1>
			<form>
				<UploadField
					handleUploadData={(event) => handleRecipeImageUpload(event)}
					fileTypes="image/*"
				/>
				<InputField
					handleInputSelection={handleRecipeNameInput}
					inputType="text"
					inputData={recipeNameInput}
					placeHolder="Recipe Name"
				/>
				<InputField
					handleInputSelection={handleRecipePreparationTimeInput}
					inputType="number"
					inputData={recipePreparationTimeInput}
					placeHolder="Preparation Time (minutes)"
				/>
				<InputField
					handleInputSelection={handleRecipeCookTimeInput}
					inputType="number"
					inputData={recipeCookTimeInput}
					placeHolder="Cook Time (minutes)"
				/>
			</form>
			<Button
				buttonText="New Recipe"
				handleButton={handleRecipeCreate}
			>
				New Recipe
			</Button>
		</div>
	);
};

export default RecipeForm;
