const mongoose = require("mongoose");

// SCHEMA

const lessonSchema = new mongoose.Schema(
	{
		userid: {
			type: mongoose.Schema.Types.ObjectId,
		},
		name: {
			type: String,
		},
		lesson_number: {
			type: Number,
		},
		status: {
			type: String,
			enum: ["Completed", "Locked", "In Progress"],
			default: "Locked",
		},
		progress: {
			type: Number,
		},
	},
	{ timestamps: true }
);

// MONGOOSE MIDDLEWARES

// MODEL

const Lesson = mongoose.model("lesson", lessonSchema);

module.exports = Lesson;
