import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Layout.module.scss";

const layout = props => {
	return (
		<div className={classes.Container}>
			<section className={classes.Navbar}>
				<Navbar/>
			</section>
			<div className={classes.Row}>
				<section className={classes.Content}>
					{props.children}
				</section>
			</div>
		</div>

	);
};

export default layout;
