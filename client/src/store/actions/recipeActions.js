import * as actionTypes from "./actionTypes";
import { dummyRecipes } from "../../utils/DummyData";

export function fetchRecipesLoad (bool) {
	return {
		type: actionTypes.FETCH_RECIPES_LOAD,
		loading: bool
	};
}

export function fetchRecipesSuccess (data) {
	return {
		type: actionTypes.FETCH_RECIPES_SUCCESS,
		recipes: data
	};
}

export function fetchRecipesFail (bool) {
	return {
		type: actionTypes.FETCH_RECIPES_FAIL,
		error: bool
	};
}

export function createRecipeLoad (bool) {
	return {
		type: actionTypes.CREATE_RECIPE_LOAD,
		loading: bool
	};
}

export function createRecipeSuccess (data) {
	return {
		type: actionTypes.CREATE_RECIPE_SUCCESS,
		createRecipe: data
	};
}

export function createRecipeFail (bool) {
	return {
		type: actionTypes.CREATE_RECIPE_FAIL,
		error: bool
	};
}

export function updateRecipeLoad (bool) {
	return {
		type: actionTypes.UPDATE_RECIPE_LOAD,
		loading: bool
	};
}

export function updateRecipeSuccess (data) {
	return {
		type: actionTypes.UPDATE_RECIPE_SUCCESS,
		updateRecipe: data
	};
}

export function updateRecipeFail (bool) {
	return {
		type: actionTypes.UPDATE_RECIPE_FAIL,
		error: bool
	};
}

export function deleteRecipeLoad (bool) {
	return {
		type: actionTypes.DELETE_RECIPE_LOAD,
		loading: bool
	};
}

export function deleteRecipeSuccess (data) {
	return {
		type: actionTypes.DELETE_RECIPE_SUCCESS,
		deleteRecipe: data
	};
}

export function deleteRecipeFail (bool) {
	return {
		type: actionTypes.DELETE_RECIPE_FAIL,
		error: bool
	};
}

export function fetchRecipes () {
	return dispatch => {
		dispatch(fetchRecipesSuccess(dummyRecipes));
	};
}

export function updateRecipe (data) {
	return dispatch => {
		dispatch(updateRecipeSuccess(data));
	};
}

export function deleteRecipe (data) {
	return dispatch => {
		dispatch(deleteRecipeSuccess(data));
	};
}

export function createRecipe (data) {
	return dispatch => {
		dispatch(createRecipeSuccess(data));
	};
}
