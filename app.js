// Dependencies
const express = require("express");
const PORT = process.env.PORT || 3000;
const path = require("path");

const app = new express();

//ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(PORT, () => {
    console.log(`Start listening on port ${PORT}`);
});
