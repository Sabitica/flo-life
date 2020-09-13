const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DaySchema = new Schema({
	date: {
		type: Date,
		default: Date.now
	},
	emotions: [{
		type: Schema.Types.ObjectId,
		ref: 'Emotion'
	}]
});

module.exports = Day = mongoose.model('day', DaySchema);