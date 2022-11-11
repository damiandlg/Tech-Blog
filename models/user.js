const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bycypt = require('bcrypt');

const User = sequelize.define('user', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 30]
        }
     }

},{ 
    sequelize: sequelize,
    timestamps:false,
    freezeTableName: true,
    modelName: 'users',
    underscored: true
});

User.beforeCreate(async user => {
    user.password = await bycypt.hash(user.password, 8);
})

module.exports = User;
















