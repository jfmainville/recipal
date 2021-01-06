import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.module.scss";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
	render () {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<Layout/>
					)}
				/>
			</Switch>
		);
	}
}

export default withRouter(App);
