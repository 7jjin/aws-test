'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델정의
db.User = require('./User')(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
