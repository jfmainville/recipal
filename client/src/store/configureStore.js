import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createPromise } from "redux-promise-middleware";
import rootReducer from "./reducers";

export default function configureStore (initialState) {
	const promise = createPromise({ types: { fulfilled: "success" } });
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk, promise)
	);
}
