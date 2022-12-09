const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Communities extends Model {}

Communities.init(
  {
    communities_id: {
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
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { 
          model: 'users',
          key: 'users_id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Communities;