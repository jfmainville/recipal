import React from "react";
import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import InputField from "../UI/InputField/InputField";
import Button from "../UI/Button/Button";

const navbar = () => {
	return (
		<React.Fragment>
			<div className={classes.Logo}>
				<NavLink
					activeClassName={classes.NavigationItemLinkActive}
					className={classes.NavigationItemLink}
					to={"/"}
				>
					Recipal
				</NavLink>
			</div>
			<form className={classes.SearchBar}>
				<InputField
					placeHolder="carbonara, steak..."
				/>
				<Button
					buttonText="Search"
				/>
			</form>
			<div className={classes.Navigation}>
				<NavLink
					activeClassName={classes.NavigationItemLinkActive}
					className={classes.NavigationItemLink}
					to={"/login"}
				>
					Logout
				</NavLink>
			</div>
		</React.Fragment>
	);
};

export default navbar;
