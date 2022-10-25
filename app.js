// Dependencies
const express = require("express");
const PORT = process.env.PORT || 3000;
const path = require("path");
const config = require("./config");

const app = new express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Simple route
app.get("/", (req, res) => {
    res.render("home");
});

// Start server
app.listen(PORT, () => {
    console.log(`Start listening on port ${PORT}`);
});
