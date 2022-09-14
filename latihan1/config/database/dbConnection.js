const Sequelize = require('sequelize');
const db = new Sequelize('toko','root','',{
        dialect: 'mysql',
        host: 'localhost'
    });

module.exports = db;


// const mysql = require('mysql');

// const db = mysql.createPool({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database: 'toko'
// });

// exports.db = db; 