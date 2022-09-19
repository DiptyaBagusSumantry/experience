const Sequelize = require('sequelize');
const db = require('../database/dbConnection');

var produk = db.define('produk',
{
    foto: Sequelize.STRING,
    namaProduk: Sequelize.STRING,
    deskripsi: Sequelize.STRING,
    katagori: Sequelize.STRING
}, { 
    //tablename: "produk",
    freezeTableName: true, //nama table tidak ditambah s
    timestamps: false //biasnya ada tambah update terbaru 
});

//produk.removeAttribute('id'); ====>>> Jika di table database tidak ada id 
module.exports = produk;