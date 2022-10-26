// Dependencies
const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const User = sequelize.define("user", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    },
    fullname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = User;
