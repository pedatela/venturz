const { Sequelize, Model } = require('sequelize')

class Order extends Model {
  static init(sequelize) {
    super.init(
      {

        quantity: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.Book, { foreignKey: 'book_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' })
  }
}

module.exports = Order;