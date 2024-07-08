const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const userController = require("../controllers/userController");

// Route for user signup
router.post("/signup", userController.signup);

// Route for user login
router.post("/login", userController.login);

// Route to get all users (protected route)
router.get("/users", verifyToken, userController.getUsers);

// Route to get a welcome message for the authenticated user
router.get("/welcome", verifyToken, userController.getWelcomeMessage);

module.exports = router;
