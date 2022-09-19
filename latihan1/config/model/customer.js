const Sequelize = require('sequelize');
const db = require('../database/dbConnection');

var customer = db.define('customer',
{
    nama: Sequelize.STRING,
    nomerHp: Sequelize.INTEGER,
    tglLahir: Sequelize.DATE,
    jenisKelamin: Sequelize.STRING
},{
    freezeTableName: true,
    timestamps: false
});
customer.removeAttribute('id');
module.exports = customer;