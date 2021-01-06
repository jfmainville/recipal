import reducer from "./recipeReducer";

describe("recipeReducer", () => {
	it("should return the reducer initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			recipes: [],
			loading: false,
			error: false,
			rowId: null
		});
	});
});
