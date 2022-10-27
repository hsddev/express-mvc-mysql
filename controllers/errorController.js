// Not Found Error
const getError404 = (req, res, next) => {
    const error = new Error("Page Not Found!");
    error.status = 404;
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    error.url = fullUrl;
    next(error);
};

// Export module
module.exports = { getError404 };
