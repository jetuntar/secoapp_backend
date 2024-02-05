const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: 'iyyas250',
  database: 'seco_app',
  host: 'localhost',
  port:5432,
  dialectOptions: {
    ssl: false,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
