const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max, // max number of connections in the pool
    min: dbConfig.pool.min, // min number of connections in the pool
    acquire: dbConfig.pool.acquire, // max time, in milliseconds, that a pool will try to get connection before throwing error
    idle: dbConfig.pool.idle, // max time, in milliseconds, that a connection can be idle before being released
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;



db.users = require("./users.model.js")(sequelize, Sequelize);




module.exports = db;
