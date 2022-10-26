const Config = require('config');
const { Sequelize } = require('sequelize');

const db = new Sequelize(Config.get('database.uri'), {
  logging: Config.get('database.logging'),
});

module.exports = {
  db,
};
