const jwt = require('jsonwebtoken');
const Auth = require('../../config/auth');

// Models
const User = require('../models/User');

class AuthenticateController {

  async login(req, res) {
    const { email, name } = req.body
    const user = await User.findOne({
      where: { email, name }
    })

    if (!user) {
      return res.status(401).json({ error: 'User not Found' })
    }

    const { id, is_seller } = user
    return res.json({
      user: {
        id,
        name,
        email,
        is_seller
      },
      token: jwt.sign({ id }, Auth.secret, { expiresIn: Auth.expiresIn })
    })
  }
}

module.exports = new AuthenticateController()