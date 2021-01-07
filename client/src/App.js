import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.module.scss";
import Layout from "./hoc/Layout/Layout";
import RecipePanel from "./components/RecipePanel/RecipePanel";

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
			</Switch>
		);
	}
}

export default withRouter(App);
