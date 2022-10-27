// Dependencies
const express = require("express");
const router = express.Router();
const {
    loginPost,
    loginGet,
    registerGet,
    registerPost,
} = require("../controllers/userController");

// Routes path
router.get("/login", loginGet);
router.post("/login", loginPost);
router.get("/register", registerGet);
router.post("/register", registerPost);

// Export module
module.exports = router;
