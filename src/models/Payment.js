const { DataTypes } = require('sequelize');
const { db } = require('../core/database');

const Payment = db.define(
  'payment',
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
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: 'payments',
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
);

module.exports = {
  Payment,
};
