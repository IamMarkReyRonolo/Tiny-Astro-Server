const express = require("express");
const testController = require("../controllers/testController");
const router = express.Router();
const auth = require("../controllers/auth");

// GET
router.get("/all", auth.authenticate, testController.getAllTest);
router.get(
	"/getSpecific/:name",
	auth.authenticate,
	testController.getSpecificTest
);

// UPDATE
router.patch("/:name", auth.authenticate, testController.updateTest);

module.exports = router;
