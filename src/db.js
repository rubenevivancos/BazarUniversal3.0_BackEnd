require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_DEPLOY } = process.env;


const sequelize = new Sequelize(`${DB_DEPLOY}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  define: {
    freezeTableName: true //El valor true hace que el nombre del modelo sea igual al de la tabla
  }
});


module.exports = {
  conn: sequelize     // para importart la conexión { conn } = require('./db.js');
};
