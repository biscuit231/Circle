const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Replys extends Model {}

Replys.init(
  {
    replys_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // allowNull: false,
        primaryKey: true,
        // autoIncrement: true
    },
    reply_author: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'users',
          key: 'users_id',
        },
    },
    reply_body: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    reply_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    
      posts_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'posts',
          key: 'post_id',
    }
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