const { Sequelize, Model } = require('sequelize')

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        stock_count: Sequelize.INTEGER,
        image: Sequelize.BLOB,
        price: Sequelize.DECIMAL
      },
      {
        sequelize,
      }
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.Shop, { foreignKey: 'shop_id' })
    this.hasMany(models.Order)
  }
}

module.exports = Book;