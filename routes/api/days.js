const express = require('express');
const router = express.Router();

// Day model
const Day = require('../../models/Day');

// get all 
// or get day if ?date=2020-01-01 parameter style set
router.get('/', (req, res) => {
	var query = req.query;

	console.log('days all queried');

	if (query.hasOwnProperty("date")) {

		let queriedDate = new Date(query.date);
		let queriedDateMin = new Date(query.date);
		queriedDate.setUTCHours(23);
		queriedDate.setUTCMinutes(59);
		queriedDate.setUTCSeconds(59);
		queriedDate.setUTCMilliseconds(59);

		console.log('day queried');

		Day.find({
			date: {$gte: queriedDateMin, $lte: queriedDate}
		})
		.then(days => res.json(days))
		//.then(days => console.log(days))
		.catch(e => console.log(e));

	} else {
		Day.find()
		.then(days => res.json(days))
		.catch(e => console.log(e));
	}



});

// @route POST api/days
// @desc  Create a day
// @access Public 
router.post('/', (req, res) => {
	const newDay = new Day({
		date: new Date(), 
		emotions: req.body.emotions
	});

	newDay.save().then(day=> res.json(day));
});

// update day function 
// would be good to do like emotions: req.body.emotions || emotionsalreadyhere
// but only unless null is explicitly passed through, don't want 
// previous emotions added too 
router.post('/update/:id', (req, res) => {
	Day.findByIdAndUpdate(req.params.id, {
		date: new Date(req.body.date),
		emotions: req.body.emotions,
		id: req.params.id
	}, (error, data) => {
		if (error) {
			console.log(error);
		} else {
			res.json(data);
			console.log(`Updated ${req.body.date} successfully.`);
		}
	})
})


// find one by ID 
router.get('/:id', (req, res) => {
	Day.findById(req.params.id)
		.then(day => res.json(day));
});


module.exports = router;