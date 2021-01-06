import React from "react";
import classes from "./Button.module.scss";

const button = props => {
	const item = props.item;
	const buttonText = props.buttonText;
	return (
		<button
			className={classes.Button}
			onClick={() => props.handleButton(item)}
		>
			{buttonText}
		</button>
	);
};

export default button;