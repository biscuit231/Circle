const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
  {
    post_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // allowNull: false,
        primaryKey: true,
        // autoIncrement: true
    },
    post_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // post_files: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },

    post_author: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'users_id',
        }
    },
    post_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    // post_replys: {
    //     type: DataTypes.UUID,
    //     allowNull: true,
    //     references: {
    //       model: 'replys',
    //       key: 'replys_id',
    //     }
    // },
    // post_location: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Posts;