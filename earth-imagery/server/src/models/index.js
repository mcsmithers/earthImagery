// Access to file system needed
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

// Setting up for the db
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password, {
    dialect: 'sqlite',
    storage: './earthimagery.sqlite' // This is now required for sequelize
  },
  config.db.options
)

// Accessing through the filesystem and allows us to add as many models as we need
fs
  .readdirSync(__dirname)
  .filter((file) =>
  // We want every other model file but index
    file !== 'index.js')
  // For the ones we find and want, it gets a full path and used
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

// Making sure we have access to the sequelize object and models
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
