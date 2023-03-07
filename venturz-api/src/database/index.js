const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const User = require('../app/models/User');
const Shop = require('../app/models/Shop');
const Book = require('../app/models/Book');
const Order = require('../app/models/Order');


const models = [
  User,
  Shop,
  Book,
  Order
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(model => model.associate && model.associate(this.connection.models));
  }

}

module.exports = new Database();