const { Sequelize, DataTypes } = require('sequelize');

// Configuração da conexão (suporta Docker e Local)
const sequelize = new Sequelize(
  process.env.DB_NAME || 'todo_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }
);

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = { sequelize, Task };