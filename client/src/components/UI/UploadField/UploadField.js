import React from "react";
import classes from "./UploadField.module.scss";

const uploadField = props => {
	const handleUploadData = event => {
		event.preventDefault();
		const file = event.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			props.handleUploadData(reader.result.split(",")[1]);
		};
	};

	const fileTypes = props.fileTypes;

	return (
		<div className={classes.UploadField}>
			<input
				className={classes.UploadFieldInput}
				type="file"
				onChange={(event) => handleUploadData(event)}
				accept={fileTypes}
			/>
		</div>
	);
};

export default uploadField;
