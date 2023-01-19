const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
//     created_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     created_by: {
//     type: DataTypes.STRING,
//     allowNull: false,

// },
//     post_id: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },

  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;