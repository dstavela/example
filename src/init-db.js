const { db } = require('./core/database');
require('./models');

const initDb = async () => {
  await db.sync({ force: true });
};

initDb();
