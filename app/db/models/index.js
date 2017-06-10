import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

const env = process.env.NODE_ENV || 'dev'
const config = require(`${__dirname}/../config/config.json`)[env]
const basename = path.basename(module.filename)

const db = {}

const sequelize = new Sequelize(
  config.database, config.username, config.password, config
)

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.connection = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('ˁᵒ͡ˑ̉ᵒˀ DB Connection has been established successfully.')
    })
    .catch(err => {
      console.error('ERROR => Unable to connect to the database: ', err)
    })
}

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
