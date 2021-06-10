const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
	res.send("Backend Server");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});