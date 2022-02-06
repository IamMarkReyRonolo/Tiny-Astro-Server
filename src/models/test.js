const mongoose = require("mongoose");

// SCHEMA

const testSchema = new mongoose.Schema(
	{
		userid: {
			type: mongoose.Schema.Types.ObjectId,
		},
		name: {
			type: String,
		},
		status: {
			type: String,
			enum: ["Passed", "Locked", "Failed", "Not Yet"],
			default: "Locked",
		},
		score: {
			type: Number,
		},
	},
	{ timestamps: true }
);

// MONGOOSE MIDDLEWARES

// MODEL

const Lesson = mongoose.model("test", testSchema);

module.exports = Lesson;
