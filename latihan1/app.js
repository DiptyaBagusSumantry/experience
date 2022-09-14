const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database/dbConnection'); // take dbConnection.js
const controller = require('./controller/index');


const app = express();


// app.use(bodyParser.urlencoded({extends : false}));
// app.use(bodyParser.json());

app.get('/', controller.produk.getAll);

// app.get('/index.html', (req,res)=>{ //search index.html
//     res.sendFile(__dirname+ "/"+ "index.html");
// });

// // //read
// // app.get('/tampilData', (req,res)=>{ //see data in phpmyadmin
// //     const sqlQuery = "SELECT * FROM produk";
// //     db.query(sqlQuery, (err, result) => {
// //         if(err){ console.log(err);
// //         } else { res.send(result);
// //         console.log(result);}

// //     });
// // });

// app.get('/tampilData/:katagori',(req,res)=>{ // see data based on katagori
//     const katagoriProduk = req.params.katagori; // create obejk katagoriProduk and request data katagori

//     const sqlQuery = " SELECT * FROM produk WHERE katagori = ? "; //no data show 
//     db.query(sqlQuery, katagoriProduk, (err, result) => { // show result error or no
//         if(err) throw err;
//         if(result.length > 0 ){  
//             res.status(200).json({
//                 message : 'Katagori Ditemukan', // respon message
//                 data : result //show data from database
//             })
//         } else { 
//             res.status(200).json({
//                 message : ' Katagori Tidak Ditemukan',
                
//             })
//         }

//     });
// });

// app.get('/*', (req,res)=>{ // 404 NOT FOUND
//     res.send("404 NOT FOUND");
// });

// app.post('/tambahProduk', (req,res)=>{ //add data
//        const namaProduk = req.body.namaProduk;
//        const deskripsi = req.body.deskripsi;
//        const katagori = req.body.katagori;

//     const sqlQuery = "INSERT INTO produk (namaProduk, deskripsi, katagori) VALUE (?,?,?)";
//     db.query(sqlQuery, [namaProduk, deskripsi, katagori], (err, result) => {
//         if(err){ console.log(err);
//         } else { res.send(result);
//         console.log(result);}

//     });
// });

// //update data
// app.put('/editData', (req,res)=>{
//     const id = req.body.id;
//     const namaProduk = req.body.namaProduk;
//     const deskripsi = req.body.deskripsi;
//     const katagori = req.body.katagori;

//     const sqlQuery = "UPDATE produk SET  namaProduk = ?, deskripsi = ?, katagori =? WHERE id = ?";
//     db.query(sqlQuery, [namaProduk,deskripsi,katagori,id], (err,result)=>{
//         if(err){console.log(err);
//         }else {res.send(result);
//         console.log(result);}
//     });
// });

// //delete
// app.delete('/hapusData', (req,res)=>{
//     const id= req.body.id;
//     const sqlQuery = "DELETE FROM produk WHERE id = ?";

//     db.query(sqlQuery, id,(err,result)=>{
//         if(err){ console.log(err);
//         } else { 
//             res.send(result);
//             console.log(result);
//         };
//     });
// });

app.listen(3000, ()=>{
    console.log("berjalan di port 3000");
})
 