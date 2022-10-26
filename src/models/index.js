const { Payment } = require('./Payment');
const { Tag } = require('./Tag');
const { Transaction } = require('./Transaction');

Payment.belongsToMany(Tag, { through: 'payments_tags' });
Tag.belongsToMany(Payment, { through: 'payments_tags' });

Transaction.hasMany(Payment, { onDelete: 'cascade' });

module.exports = {
  Payment,
  Tag,
  Transaction,
};
