const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    allowNull: true,
  },
  imgUrl: {
  	type: String
  	// required: true
  },
});

module.exports = Player = mongoose.model('players', PlayerSchema)