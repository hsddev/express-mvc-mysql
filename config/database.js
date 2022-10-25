// Dependencies
const Sequelize = require("sequelize");
const config = require("./index");

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
        logging: false,
        host: config.db.host,
        dialect: config.db.dialect,
    }
);

module.exports = sequelize;
