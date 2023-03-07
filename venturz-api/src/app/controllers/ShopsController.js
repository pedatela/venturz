// Models
const Shop = require('../models/Shop');

class ShopsController {

  async allShops(req, res) {
    const shops = await Shop.findAll();
    res.json({ data: shops })
  }

  async index(req, res) {
    const shops = await Shop.findAll({ where: { user_id: req.userId } });
    res.json({ data: shops })
  }

  async create(req, res) {
    const shopExist = await Shop.findOne({ where: { name: req.body.name, user_id: req.userId } })
    if (shopExist) {
      return res.status(400).json({ type: 'error', msg: 'Shop already exist' })
    }
    const shop = await Shop.create({ ...req.body, user_id: req.userId })
    return res.status(201).json({ type: 'success', data: shop, msg: 'Shop successfuly created' })
  }

  async update(req, res) {
    const shopExist = await Shop.findByPk(req.params.id)
    if (!shopExist) {
      return res.status(404).json({ type: 'error', msg: 'Shop does not exist' })
    }
    const shopUpdated = await shopExist.update(req.body)
    return res.json({ type: 'success', data: shopUpdated, msg: 'Shop successfuly updated' })
  }

  async delete(req, res) {
    const shopExist = await Shop.findByPk(req.params.id)
    if (!shopExist) {
      return res.status(404).json({ type: 'error', msg: 'Shop does not exist' })
    }
    await shopExist.destroy()
    return res.json({ type: 'success', msg: 'Shop successfuly deleted' })
  }

  async show(req, res) {
    const shop = await Shop.findByPk(req.params.id);
    res.json({ data: shop })
  }

}

module.exports = new ShopsController()