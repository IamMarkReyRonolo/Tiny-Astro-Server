const express = require("express");
const testController = require("../controllers/testController");
const router = express.Router();
const auth = require("../controllers/auth");

// GET
router.get("/all", auth.authenticate, testController.getAllTest);
router.get("/:testid", auth.authenticate, testController.getSpecificTest);

// UPDATE
router.patch("/:testid", auth.authenticate, testController.updateTest);

module.exports = router;
