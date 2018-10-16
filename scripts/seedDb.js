const { User, Player, db } = require('../models');
const { users, players } = require('../data');

(async () => {
  // Insert users
  await User.bulkCreate(
    users.map(([email, password]) => 
      ({ email, password }))
  );

  // Insert players
  await Player.bulkCreate(
    players.map(([name, year]) => 
      ({ name, year }))
    );

  db.close();
})();
