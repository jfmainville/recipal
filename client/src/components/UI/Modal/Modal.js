import React, { useState } from "react";
import classes from "./Modal.module.scss";

const Modal = props => {
	return (
		<div className={classes.Modal}>
			<div className={classes.TransparentBackgroundWrapper}>
				<div
					onClick={props.handleShowModal}
					className={classes.TransparentBackground}
				/>
				<div className={classes.Container}>
					<div>
						<button onClick={props.handleShowModal}>X</button>
					</div>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
