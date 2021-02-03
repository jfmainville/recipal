import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.module.scss";
import Layout from "./hoc/Layout/Layout";
import RecipePanel from "./components/RecipePanel/RecipePanel";
import RecipeDetailsPanel from "./components/RecipeDetailsPanel/RecipeDetailsPanel";
import NewRecipePanel from "./components/NewRecipePanel/NewRecipePanel";

class App extends Component {
	render () {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<Layout>
							<RecipePanel/>
						</Layout>
					)}
				/>
				<Route
					exact
					path="/new"
					render={() => (
						<Layout>
							<NewRecipePanel/>
						</Layout>
					)}
				/>
				<Route
					path="/:recipe_id"
					render={() => (
						<Layout>
							<RecipeDetailsPanel/>
						</Layout>
					)}
				/>

			</Switch>
		);
	}
}

export default withRouter(App);
