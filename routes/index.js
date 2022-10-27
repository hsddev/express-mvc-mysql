// Dependencies
const express = require("express");
const router = express.Router();

// Routes
const userRoutes = require("./user");

// Error Controllers
const errors = require("../controllers/errorController");

// Routes path
router.use("/", userRoutes);

// Error Handlers and pages
router.use(errors.getError404);
router.use(errors.getErrorMsg);

// Export module
module.exports = router;
