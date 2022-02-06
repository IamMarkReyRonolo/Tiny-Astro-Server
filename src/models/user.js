const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// SCHEMA

const userSchema = new mongoose.Schema(
	{
		_id: {
			type: mongoose.Schema.Types.ObjectId,
		},
		name: {
			firstName: {
				type: String,
				required: [true, "First Name is required"],
			},
			lastName: {
				type: String,
				required: [true, "Last Name is required"],
			},
		},
		learningLevel: {
			type: String,
			required: [true, "Learning Level is required"],
		},
		email: {
			type: String,
			unique: true,
			lowercase: true,
			required: [true, "Email is required"],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
		},
	},
	{ timestamps: true }
);

// MONGOOSE MIDDLEWARES

userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

// userSchema.post("save", (doc, next) => {
// 	next();
// });

// MODEL

const User = mongoose.model("user", userSchema);

module.exports = User;
