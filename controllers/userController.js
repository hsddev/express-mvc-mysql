// Dependencies
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

// login post
const loginPost = (req, res) => {
    const { username, password } = req.body;

    User.findOne({ where: { username } }).then((user) => {
        if (user) {
            const hash = user.dataValues.password;
            const userId = user.dataValues.id;
            return bcrypt.compare(password, hash, (err, isTrue) => {
                if (isTrue) {
                    req.session.userId = userId;
                    return res.redirect("/");
                }
                console.log("Username or Password is incorrect!");
                return res.redirect("/login");
            });
        }
        console.log("Username or Password is incorrect!");
        return res.redirect("/login");
    });
};

// login get
const loginGet = (req, res) => res.render("login");

// register get
const registerGet = (req, res) => res.render("register");

// register post
const registerPost = (req, res) => {
    const { email, password, username, fullname } = req.body;

    // Check if the user exist, if not create it
    User.findOrCreate({
        where: { [Op.or]: [{ email }, { username }] },
        defaults: {
            username: username,
            password: password,
            email: email,
            fullname: fullname,
        },
    }).then(([user, created]) => {
        if (!created) {
            if (user.dataValues.username == username) {
                console.log("Username already exist !");
            }
            if (user.dataValues.email == email) {
                console.log("Email already exist !");
            }
            res.redirect("/register");
        }
        return res.redirect("/");
    });

    return res.redirect("/");
};

module.exports = { loginPost, loginGet, registerGet, registerPost };
