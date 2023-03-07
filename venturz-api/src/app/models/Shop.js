const { Sequelize, Model } = require('sequelize')

class Shop extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
    return this
  }

  static associate(models) {
    this.hasMany(models.Book);
    this.belongsTo(models.User, { foreignKey: 'user_id' })
  }
}

module.exports = Shop;