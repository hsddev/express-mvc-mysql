// Not Found Error
const getError404 = (req, res, next) => {
    const error = new Error("Page Not Found!");
    error.status = 404;
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    error.url = fullUrl;
    next(error);
};

// Get error msg
const getErrorMsg = (error, req, res, next) => {
    const errorCode = error.status || 500;
    const errorType = errorCode === 404 ? "errors/notFound" : "errors/unknown";

    if (errorCode === 404) {
        if (error.url) console.log("Error: Not Found: %s", error.url);
    } else {
        console.log(error);
    }
};

// Export module
module.exports = { getError404, getErrorMsg };
