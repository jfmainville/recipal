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
	const [recipeId, setRecipeId] = useState(0);
	const [recipeImage, setRecipeImage] = useState("");
	const [recipeNameInput, setRecipeNameInput] = useState("");
	const [recipePreparationTimeInput, setRecipePreparationTimeInput] = useState("");
	const [recipeCookTimeInput, setRecipeCookTimeInput] = useState("");

	const handleShowModal = (recipe) => {
		setShowModal(!showModal);
		if (recipe) {
			setRecipeId(recipe.id);
			setRecipeNameInput(recipe.name);
			setRecipePreparationTimeInput(recipe.preparation_time);
			setRecipeCookTimeInput(recipe.cook_time);
		}
	};

	useEffect(() => {
		dispatch(actions.fetchRecipes());
	}, []);

	const handleRecipeDelete = (recipe) => {
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

	const handleRecipeUpdate = () => {
		let data = {};

		if (recipeId) {
			data.id = recipeId;
			const recipeData = recipes.find(recipe => recipe.id === data.id);

			data.image = recipeImage ? recipeImage : recipeData.image;
			data.name = recipeNameInput ? recipeNameInput : recipeData.name;
			data.preparation_time = recipePreparationTimeInput ? recipePreparationTimeInput : recipeData.preparation_time;
			data.cook_time = recipeCookTimeInput ? recipeCookTimeInput : recipeData.cook_time;

			dispatch(actions.updateRecipe(data));
			setRecipeImage("");
			setRecipeNameInput("");
			setRecipePreparationTimeInput("");
			setRecipeCookTimeInput("");
			handleShowModal();
		}
	};

	const handleRecipeCreate = () => {
		let data = {};
		if (recipeImage !== "" && recipeNameInput !== "" && recipePreparationTimeInput !== "" && recipeCookTimeInput !== "") {
			data.id = uuidv4();
			data.name = recipeNameInput;
			data.image = recipeImage;
			data.preparation_time = recipePreparationTimeInput;
			data.cook_time = recipeCookTimeInput;
			data.ingredients = [];
			dispatch(actions.createRecipe(data));
			setRecipeImage("");
			setRecipeNameInput("");
			setRecipePreparationTimeInput("");
			setRecipeCookTimeInput("");
			handleShowModal();
		}
	};

	return (
		<React.Fragment>
			<div className={classes.RecipeCard}>
				{recipes.map(recipe => (
					<React.Fragment key={recipe.id}>
						{showModal && recipeId === recipe.id ?
							<Modal
								showModal={showModal}
								handleShowModal={handleShowModal}
							>
								<RecipeForm
									recipe={recipe}
									handleRecipeImageUpload={handleRecipeImageUpload}
									handleRecipeNameInput={handleRecipeNameInput}
									recipeNameInput={recipeNameInput}
									handleRecipePreparationTimeInput={handleRecipePreparationTimeInput}
									recipePreparationTimeInput={recipePreparationTimeInput}
									handleRecipeCookTimeInput={handleRecipeCookTimeInput}
									recipeCookTimeInput={recipeCookTimeInput}
									handleRecipeOperation={handleRecipeUpdate}
									recipeButtonName="Update Recipe"
								/>
							</Modal>
							:
							showModal && !recipeId ?
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
										handleRecipeOperation={handleRecipeCreate}
										recipeButtonName="New Recipe"
									/>
								</Modal>
								:
								null}
						<RecipeCard
							key={recipe.id}
							recipe={recipe}
							handleShowModal={handleShowModal}
							handleRecipeDelete={handleRecipeDelete}
						/>
					</React.Fragment>
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
