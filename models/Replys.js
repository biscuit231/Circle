const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Replys extends Model {}

Replys.init(
  {
    replys_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    reply_author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reply_body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reply_date: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Replys;