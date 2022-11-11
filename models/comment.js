const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');


const Comment = sequelize.define('comment', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'Post',
            key: 'id'
        }
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'User',
            key: 'id'
        }
    }

},{ 
    sequelize: sequelize,
    timestamps:true,
    freezeTableName: true,
    modelName: 'comments',
    underscored: true
});


module.exports = Comment;