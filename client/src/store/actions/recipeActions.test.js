import * as actions from "./recipeActions";
import * as actionTypes from "./actionTypes";

describe("recipeActions", () => {
	it("should execute the fetchRecipesLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.FETCH_RECIPES_LOAD,
			loading: bool
		};
		expect(actions.fetchRecipesLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the fetchRecipesSuccess action", () => {
		const data = "recipes";
		const expectedAction = {
			type: actionTypes.FETCH_RECIPES_SUCCESS,
			recipes: data
		};
		expect(actions.fetchRecipesSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the fetchRecipesFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.FETCH_RECIPES_FAIL,
			error: bool
		};
		expect(actions.fetchRecipesFail(bool)).toEqual(expectedAction);
	});
	it("should execute the createRecipeLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.CREATE_RECIPE_LOAD,
			loading: bool
		};
		expect(actions.createRecipeLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the createRecipeSuccess action", () => {
		const data = "recipes";
		const expectedAction = {
			type: actionTypes.CREATE_RECIPE_SUCCESS,
			createRecipe: data
		};
		expect(actions.createRecipeSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the createRecipeFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.CREATE_RECIPE_FAIL,
			error: bool
		};
		expect(actions.createRecipeFail(bool)).toEqual(expectedAction);
	});
	it("should execute the updateRecipeLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.UPDATE_RECIPE_LOAD,
			loading: bool
		};
		expect(actions.updateRecipeLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the updateRecipeSuccess action", () => {
		const data = "recipes";
		const expectedAction = {
			type: actionTypes.UPDATE_RECIPE_SUCCESS,
			updateRecipe: data
		};
		expect(actions.updateRecipeSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the updateRecipeFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.UPDATE_RECIPE_FAIL,
			error: bool
		};
		expect(actions.updateRecipeFail(bool)).toEqual(expectedAction);
	});
	it("should execute the deleteRecipeLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.DELETE_RECIPE_LOAD,
			loading: bool
		};
		expect(actions.deleteRecipeLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the deleteRecipeSuccess action", () => {
		const data = "recipes";
		const expectedAction = {
			type: actionTypes.DELETE_RECIPE_SUCCESS,
			deleteRecipe: data
		};
		expect(actions.deleteRecipeSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the deleteRecipeFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.DELETE_RECIPE_FAIL,
			error: bool
		};
		expect(actions.deleteRecipeFail(bool)).toEqual(expectedAction);
	});
});
