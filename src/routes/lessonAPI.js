const express = require("express");
const LessonController = require("../controllers/LessonController");
const router = express.Router();
const auth = require("../controllers/auth");

// GET
router.get("/all", auth.authenticate, LessonController.getAllLessons);
router.get("/:lessonid", auth.authenticate, LessonController.getSpecificLesson);
// // POST
router.post("/generate", auth.authenticate, LessonController.generateLessons);

// UPDATE

router.patch("/:lessonName", auth.authenticate, LessonController.updateLesson);

module.exports = router;
