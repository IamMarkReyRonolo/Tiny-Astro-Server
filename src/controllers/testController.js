const Test = require("../models/test");

module.exports = {
	getAllTest,
	getSpecificTest,
	generateTests,
	updateTest,
};

async function getAllTest(req, res, next) {
	try {
		const result = await Test.find({ userid: req.user }).lean();
		res.status(200).json({ count: result.length, tests: result });
	} catch (error) {
		next(error);
	}
}

async function getSpecificTest(req, res, next) {
	try {
		const result = await Test.findById(req.params.testid).lean();
		res.status(200).json({ count: result.length, test: result });
	} catch (error) {
		next(error);
	}
}

async function generateTests(req, res, next) {
	try {
		const test1 = new Test({
			userid: req.user,
			name: "Pre-Evaluation Test",
			status: "Not Yet",
			score: 0,
		});

		const test2 = new Test({
			userid: req.user,
			name: "Solar System Test",
			status: "Locked",
			score: 0,
		});

		const test3 = new Test({
			userid: req.user,
			name: "Motions of the Earth Test",
			status: "Locked",
			score: 0,
		});

		const test4 = new Test({
			userid: req.user,
			name: "Post-Evaluation Test",
			status: "Locked",
			score: 0,
		});

		const tests = [test1, test2, test3, test4];
		console.log("yow");
		const docs = await Test.insertMany(tests);
		console.log("sup");
	} catch (error) {
		next(error);
	}
}

async function updateTest(req, res, next) {
	try {
		const updated = await Test.findOneAndUpdate(
			{ _id: req.params.testid },
			{ status: req.body.status, score: req.body.score },
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
