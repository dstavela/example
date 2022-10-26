const { DataTypes } = require('sequelize');
const { db } = require('../core/database');

const Transaction = db.define(
  'transaction',
  {
    id: {
      type: DataTypes.STRING(72),
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
    paidAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'transactions',
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
);

module.exports = {
  Transaction,
};
