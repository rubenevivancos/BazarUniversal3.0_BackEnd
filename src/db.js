require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_DEPLOY, CA_CERTIFICATE } = process.env;
const pg = require('pg');

// Configuración para Sequelize para utilizar el cliente de PostgreSQL de pg
pg.defaults.ssl = {
    require: true,
    rejectUnauthorized: true,
    ca: CA_CERTIFICATE
};


const sequelize = new Sequelize(`${DB_DEPLOY}`, {
  dialect: 'postgres', // Especifica que estamos utilizando PostgreSQL
  dialectModule: pg, // Utiliza el cliente de PostgreSQL de pg
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  define: {
    freezeTableName: true //El valor true hace que el nombre del modelo sea igual al de la tabla
  }
});


module.exports = {
  conn: sequelize     // para importar la conexión { conn } = require('./db.js');
};
