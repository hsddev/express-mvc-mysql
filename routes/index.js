// Dependencies
const express = require("express");
const router = express.Router();

// Routes
const userRoutes = require("./user");

// Error Controllers
const errors = require("../controllers/errorController");

// Routes path
router.use("/", userRoutes);

// Error Handler and pages
router.use(errors.getError404);

// Export module
module.exports = router;
