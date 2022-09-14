const Sequelize = require('sequelize');
const db = require('../database/dbConnection');

var produk = db.define('produk',
{
    namaProduk: Sequelize.STRING,
    deskripsi: Sequelize.STRING,
    katagori: Sequelize.STRING
}, {
    //tablename: "produk",
    freezeTableName: true,
    timestamps: false
});

//produk.removeAttribute('id');
module.exports = produk;