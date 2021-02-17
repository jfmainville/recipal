import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./RecipePanel.module.scss";
import RecipeCard from "./RecipeCard/RecipeCard";
import { v4 as uuidv4 } from "uuid";
import RecipeForm from "./RecipeForm/RecipeForm";
import Modal from "../UI/Modal/Modal";

const RecipePanel = () => {
	const recipes = useSelector(state => state.recipe.recipes);
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);
	const [recipeImage, setRecipeImage] = useState("");
	const [recipeNameInput, setRecipeNameInput] = useState("");
	const [recipePreparationTimeInput, setRecipePreparationTimeInput] = useState("");
	const [recipeCookTimeInput, setRecipeCookTimeInput] = useState("");

	const handleShowModal = () => {
		setShowModal(!showModal);
	};

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

	const handleRecipeImageUpload = (data) => {
		setRecipeImage(data);
	};

	const handleRecipeNameInput = (data) => {
		setRecipeNameInput(data);
	};

	const handleRecipePreparationTimeInput = (data) => {
		setRecipePreparationTimeInput(data);
	};

	const handleRecipeCookTimeInput = (data) => {
		setRecipeCookTimeInput(data);
	};

	const handleRecipeCreate = () => {
		let data = {};
		if (recipeImage !== "" && recipeNameInput !== "" && recipePreparationTimeInput !== "" && recipeCookTimeInput !== "") {
			data.id = uuidv4();
			data.name = recipeNameInput;
			data.image = recipeImage;
			data.preparation_time = recipePreparationTimeInput;
			data.cook_time = recipeCookTimeInput;
			dispatch(actions.createRecipe(data));
			setRecipeNameInput(null);
			setRecipePreparationTimeInput(null);
			setRecipeCookTimeInput(null);
			handleShowModal();
		}
	};

	return (
		<React.Fragment>
			{showModal ?
				<Modal
					showModal={showModal}
					handleShowModal={handleShowModal}
				>
					<RecipeForm
						handleRecipeImageUpload={handleRecipeImageUpload}
						handleRecipeNameInput={handleRecipeNameInput}
						recipeNameInput={recipeNameInput}
						handleRecipePreparationTimeInput={handleRecipePreparationTimeInput}
						recipePreparationTimeInput={recipePreparationTimeInput}
						handleRecipeCookTimeInput={handleRecipeCookTimeInput}
						recipeCookTimeInput={recipeCookTimeInput}
						handleRecipeCreate={handleRecipeCreate}
					/>
				</Modal>
				:
				null}
			<div className={classes.RecipeCard}>
				{recipes.map(recipe => (
					<RecipeCard
						key={recipe.id}
						recipe={recipe}
						handleDeleteRecipe={handleDeleteRecipe}
					/>
				))}
				<button
					onClick={handleShowModal}
					className={classes.RecipeAddButton}
				>
					<svg className={classes.RecipeAddIcon}>
						<use xlinkHref="/assets/sprite.svg#icon-plus"/>
					</svg>
				</button>
			</div>
		</React.Fragment>
	);
};

export default RecipePanel;
