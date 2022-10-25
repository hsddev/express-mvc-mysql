// Dependencies
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = new express();

app.get("/", (req, res) => {
    res.end("Hello world!");
});

app.listen(PORT, () => {
    console.log(`Start listening on port ${PORT}`);
});
