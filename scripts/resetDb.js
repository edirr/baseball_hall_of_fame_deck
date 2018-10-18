const { db } = require('../data/models');


(async () => {
  await db.sync({ force: true });
  db.close();
})();