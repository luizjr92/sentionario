"use strict";
var env = process.env.NODE_ENV || "development";
var Sequelize = require('sequelize');
var config = require('../config/config.json')[env];
var mydb = new Sequelize(config.database, config.username, config.password, config);

module.exports = mydb.define("metadiaria", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dia: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  mes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  votos: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  concluida: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});
