const express = require('express');
const router = express.Router();

// Day model
const Day = require('../../models/Day');

// get all 
router.get('/', (req, res) => {
	var query = req.query;

	if query.hasOwnProperty("date") {
		
	}

	Day.find()
		.then(days => res.json(days));
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

// // find by date param 
// // https://stackoverflow.com/questions/32977339/node-express-mongodb-get-with-param
// router.get('/', (req, res, next) => {



// 	Day.find()
// 		.then(days => res.json(days));
// });


module.exports = router;