const Book = require("../models/Book");
const Order = require("../models/Order");
const Shop = require("../models/Shop");

class OrdersController {

  async index(req, res) {
    const orders = await Order.findAll(
      {
        include: [Book],
        where: { user_id: req.userId },
        order: [['created_at', 'ASC']]
      }
    );
    res.json({ data: orders })
  }

  async create(req, res) {
    const orders = req.body
    const { user_id: shop_owner_id } = await Shop.findByPk(orders[0].shop_id)
    orders.forEach(async order => {
      await Order.create({ ...order, user_id: shop_owner_id, status: 'PENDING' })
    });
    return res.status(201).json({ type: 'success', data: orders, msg: 'Orders successfuly created' })
  }

}

module.exports = new OrdersController()