const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
  {
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    post_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_files: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    post_author: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id',
        }
    },
    post_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    post_replys: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    post_location: {
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

module.exports = Posts;