const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Communities extends Model {}

Communities.init(
  {
    Communities_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    com_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    com_owner: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    com_members: {
        type: DataTypes.STRING,
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

module.exports = Communities;