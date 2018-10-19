const express = require('express');
const router = express.Router();

// @route GET api/players/test
// @desc Tests players route
// @access Public

const Player = require('../../models/Player');

router.get('/test', (req, res) => res.json({ msg: 'Players Works' }));

router.get('/all', (req, res) => {
	Player.find()
		.then(players => res.json(players))
		.catch(err => res.status(404).json({ noplayersfound: 'No players found' }));
});

router.get('/:id', (req, res) => {
	Player.findById(req.params.id)
		.then(post => res.json(post))
		.catch(err =>
			res.status(404).json({ noplayersfound: 'No players found with that ID' })
		);
});

module.exports = router;
