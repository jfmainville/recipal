import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
	recipes: [],
	loading: false,
	error: false
};

const fetchRecipesLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const fetchRecipesSuccess = (state, action) => {
	const recipes = action.recipes;
	return updateObject(state, { recipes: recipes });
};

const fetchRecipesFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const createRecipeLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const createRecipeSuccess = (state, action) => {
	let recipes = [...state.recipes];
	recipes.push(action.createRecipe);
	return updateObject(state, { recipes: recipes });
};

const createRecipeFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const updateRecipeLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const updateRecipeSuccess = (state, action) => {
	const recipes = [...state.recipes];
	const recipeIndex = recipes
		.map(recipe => recipe.id)
		.indexOf(action.updateRecipe.id);
	recipes.splice(recipeIndex, 1, action.updateRecipe);
	return updateObject(state, { recipes: recipes });
};

const updateRecipeFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const deleteRecipeLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const deleteRecipeSuccess = (state, action) => {
	let recipes = [...state.recipes];
	let updatedRecipes = recipes.filter(
		recipe => recipe.id !== action.deleteRecipe
	);
	return updateObject(state, { recipes: updatedRecipes });
};

const deleteRecipeFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const recipeReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_RECIPES_LOAD:
			return fetchRecipesLoad(state, action);
		case actionTypes.FETCH_RECIPES_SUCCESS:
			return fetchRecipesSuccess(state, action);
		case actionTypes.FETCH_RECIPES_FAIL:
			return fetchRecipesFail(state, action);
		case actionTypes.CREATE_RECIPE_LOAD:
			return createRecipeLoad(state, action);
		case actionTypes.CREATE_RECIPE_SUCCESS:
			return createRecipeSuccess(state, action);
		case actionTypes.CREATE_RECIPE_FAIL:
			return createRecipeFail(state, action);
		case actionTypes.UPDATE_RECIPE_LOAD:
			return updateRecipeLoad(state, action);
		case actionTypes.UPDATE_RECIPE_SUCCESS:
			return updateRecipeSuccess(state, action);
		case actionTypes.UPDATE_RECIPE_FAIL:
			return updateRecipeFail(state, action);
		case actionTypes.DELETE_RECIPE_LOAD:
			return deleteRecipeLoad(state, action);
		case actionTypes.DELETE_RECIPE_SUCCESS:
			return deleteRecipeSuccess(state, action);
		case actionTypes.DELETE_RECIPE_FAIL:
			return deleteRecipeFail(state, action);
		default:
			return state;
	}
};

export default recipeReducer;
