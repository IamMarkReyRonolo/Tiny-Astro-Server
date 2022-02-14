const Lesson = require("../models/lesson");
module.exports = {
	getAllLessons,
	getSpecificLesson,
	generateLessons,
	updateLesson,
};

async function getAllLessons(req, res, next) {
	try {
		const result = await Lesson.find({ userid: req.user }).lean();
		res.status(200).json({ count: result.length, lessons: result });
	} catch (error) {
		next(error);
	}
}

async function getSpecificLesson(req, res, next) {
	try {
		const result = await Lesson.findById(req.params.lessonid).lean();
		res.status(200).json({ count: result.length, lessons: result });
	} catch (error) {
		next(error);
	}
}

async function generateLessons(req, res, next) {
	try {
		const lesson1 = new Lesson({
			userid: req.user,
			name: "Solar System",
			lesson_number: 1,
			progress: 0,
		});

		const lesson2 = new Lesson({
			userid: req.user,
			name: "Motions of the Earth",
			lesson_number: 2,
			progress: 0,
		});

		const lessons = [lesson1, lesson2];
		const docs = await Lesson.insertMany(lessons);
	} catch (error) {
		next(error);
	}
}

async function updateLesson(req, res, next) {
	try {
		console.log(req.params.lessonName);
		const updated = await Lesson.findOneAndUpdate(
			{ userid: req.user, name: req.params.lessonName },
			{ status: req.body.status, progress: req.body.progress },
			{ new: true }
		);
		if (updated) {
			res.status(201).json({ message: "Update succesful", updated });
		} else {
			error = new Error("Not Found");
			error.status = 404;
			next(error);
		}
	} catch (error) {
		next(error);
	}
}
