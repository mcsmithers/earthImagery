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
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: 'Incorrect login information'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'Incorrect login information'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred while trying to log in'
      })
    }
  }
}
