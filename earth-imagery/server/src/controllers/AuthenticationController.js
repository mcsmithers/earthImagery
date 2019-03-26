const { User } = require('../models')
// What we want is to get the email passed in the payload and the new user record gets created when this register endpoint gets hit
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email is already in use'
      })
    }
  }
}
