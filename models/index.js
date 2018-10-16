require('dotenv').config();
/**
 * [1] include the sequalize library
 */
const Sequelize = require('sequelize');

Sequelize.Promise = global.Promise;
/**
 * [2] Init the sequelize lib. be sure to point it to the correct database
 */
const db = new Sequelize(
  process.env.DATABASE_URL, 
{
    underscored: true,
    returning: true,
  });


/**
 * [3] Make a Quote model
 */

const User = db.define('user', {
  email: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
});

const Player = db.define('player', {
  name: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: true,
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});


User.belongsToMany(Player, { through: 'favorite_players' });
Player.belongsToMany(User, { through: 'favorite_players' });

module.exports = {
  User,
  Player,  
  db,
};
