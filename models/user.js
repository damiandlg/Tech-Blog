const Sequelize = require('sequelize');
const sequelizeConnect = require('../config/connection');
const bcrypt = require('bcrypt');

const User = sequelizeConnect.define('user', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [3, 26],
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [5, 60]
        }
    }

}, {
    sequelize: sequelizeConnect,
    timestamps: false,
    freezeTableName: true,
    modelName: 'users',
    underscored: true,
});

User.beforeCreate(async user => {
    const dataUser = user.dataValues;
    dataUser.password = await bcrypt.hash(dataUser.password, 10);
});

User.prototype.validatePassword = function (rawPassword) {
    console.log('this user password: ', this.password);
    return bcrypt.compare(rawPassword, this.password);
}

module.exports = User;