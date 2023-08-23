// Import required modules
require("dotenv").config();
const express = require("express");
const indexRoutes = require("./routes/index.js");

// Set up Express app
const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRoutes);

// 404 Route
app.use("*", (req, res) => res.status(404).send("404 Not Found"));

// Start the server
app.listen(port, () => {
	console.log(`App now running and listening on port ${port}`);
});
