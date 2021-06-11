const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 8000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Backend Server");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});