const mongoose = require("mongoose");

async function connectToDatabase() {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Connected to Database");
	} catch (error) {
		console.log(error);
	}
}

module.exports = { connectToDatabase };
