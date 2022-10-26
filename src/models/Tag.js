const { DataTypes } = require('sequelize');
const { db } = require('../core/database');

const Tag = db.define(
  'tag',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(72),
      allowNull: false,
    },
  },
  {
    tableName: 'tags',
    timestamps: true,
    underscored: true,
  },
);

module.exports = {
  Tag,
};
