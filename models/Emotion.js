const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmotionSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	good: {
		type: Boolean,
		required: true,
		default: true
	}
});

module.exports = Emotion = mongoose.model('emotion', EmotionSchema);