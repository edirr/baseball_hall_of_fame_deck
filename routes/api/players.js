 const express = require('express');
const router = express.Router();

// @route GET api/players/test
// @desc Tests players route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Players Works' }));

module.exports = router;