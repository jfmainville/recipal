const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 8000;

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
	res.send("Root");
});

app.get("/api/recipe", (req, res) => {
	res.send("Recipe");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});