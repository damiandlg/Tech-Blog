const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');


const Post = sequelize.define('post', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false
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
    modelName: 'posts',
    underscored: true
});


module.exports = Post;