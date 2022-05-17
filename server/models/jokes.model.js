const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type:String,
		required:[true, "Setup is required"],
		minlength:[1, "Setup must be at least 1 character"]
	},
	punchline: {
		type:String,
		required:[true, "Punchline is required"],
		minlength:[1, "Punchline must be at least 1 character"]
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;