const express = require('express');
const router = express.Router();

// Emotion model 
const Emotion = require('../../models/Emotion');

// @route GET api/emotions
// @desc get all emotions alphabetically  
// @access Public
router.get('/', (req, res) => {
	Emotion.find()
			.sort({ name: 1 })
			.then(emotions => res.json(emotions))
});

// @route POST api/emotions
// @desc create an emotion
// @access public 
router.post('/', (req, res) => {
	const newEmotion = new Emotion({
		name: req.body.name,
		good: req.body.good
	});

	newEmotion.save().then(emotion => res.json(emotion));
});

// @route DELETE api/emotion/:id
// @desc delete an emotion
// @access public 
router.delete('/:id', (req, res) => {
	Emotion.findById(req.params.id)
			.then(emotion => emotion.remove().then(() => res.json({ success: true})))
			.catch(err => res.status(404).json({ success: false }))
})

module.exports = router;