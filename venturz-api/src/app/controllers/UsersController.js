// Models
const User = require('../models/User');

class UsersController {

  async create(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } })
    if (userExist) {
      return res.status(400).json({ error: 'User already exist' })
    }
    const user = await User.create(req.body)
    return res.json(user)
  }

}

module.exports = new UsersController()