// Dependencies
const process = require("process");

const env = process.env.NODE_ENV;

// Container for all environments
let environments = {};

// Staging environment (default)
environments.staging = {
    db: {
        host: "localhost",
        user: "hsddev",
        password: "test@123",
        database: "jashrb",
        dialect: "mysql",
    },
    httpPort: 3000,
    sessionSecret: "r00tboy539jasp7r",
    cookieAge: 12, // in hours
    resetPasswordTokenAge: 12, // in hours
    envName: "staging",
};

// Production environment
environments.production = {
    db: {
        host: "localhost",
        user: "DB_User",
        password: "DB_Pass",
        database: "jashrb",
        dialect: "mysql",
    },
    httpPort: process.env.PORT,
    sessionSecret: "r00tboy539jasp7r",
    cookieAge: 12, // in hours
    resetPasswordTokenAge: 12, // in hours
    envName: "production",
};

// Get the chosen environment that was passed as a command-line
const currentEnvironment = typeof env === "string" ? env.toLowerCase() : "";

// Check if the current Environment is one of the above environments
const environmentToExport =
    typeof environments[currentEnvironment] === "object"
        ? environments[currentEnvironment]
        : environments.staging;

// Export the module
module.exports = environmentToExport;
