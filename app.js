// Dependencies
const express = require("express");
const path = require("path");
const session = require("express-session");
const SessionStore = require("express-mysql-session");
const config = require("./config");
const sequelize = require("./config/database");
const routes = require("./routes/");
const bodyParser = require("body-parser");

const app = new express();

// Body Parser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const store = new SessionStore(config.db);

// Session
app.use(
    session({
        cookie: { maxAge: config.cookieAge * 1000 * 60 },
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: false,
        store,
    })
);

// Static folder
app.use("/public", express.static("public"));

// Simple route
app.use("/", routes);

sequelize
    .sync({ logging: false })
    .then(() => {
        // Check database
        console.log("Database Synced!");
    })
    .then(() => {
        // Start server
        app.listen(config.httpPort);
        console.log("Server Started!");
    })
    .catch((error) => {
        console.log(error);
    });
