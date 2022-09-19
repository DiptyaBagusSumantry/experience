const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database/dbConnection'); // take dbConnection.js
const controller = require('./controller/index');
const multer  = require('multer'); // multer untuk upload gambar ke database
const morgan = require('morgan'); //morgan untuk menampilkan history post,get,put,delete di cmd
const basicAuth = require('express-basic-auth'); // untuk auth yitu memasukan username dan password
const helmet = require('helmet');

const app = express();

app.use(helmet()); // untuk mengamankan

app.use(basicAuth({  //basic auth untuk login yaitu memasukan username dan password
    users: {'admin' : '1234'}, // username admin and password 1234
    unauthorizedResponse : basicAuthResponse
}));

function basicAuthResponse(req){
    return req.basicAuth
    ?('Credentials'+ req.auth.user + ':' + req.auth.password+ 'rejected')
    : 'Unauthorized' //respon 
}

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extends : false}));
app.use(bodyParser.json());

app.use('/assets', express.static('assets')); 

const storage = multer.diskStorage({  //
    destination: function(req, file, cb) {
        cb(null,'./assets/');
    },
    filename: function(req,file,cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage}); //untuk upload gambar menggunakan multer



//Produk
app.get('/tampilProduk', controller.produk.getAll);
app.get('/idNamaProduk', controller.produk.idProduk); //menampilkan data id dan namaProduk
app.get('/tampilProduk/:katagori', controller.produk.getOne);
// app.post('/tambahProduk', controller.produk.create);
app.post('/tambahProduk', upload.single('foto'), controller.produk.create);
app.put('/editProduk/:id', controller.produk.update);
app.delete('/hapusProduk/:id', controller.produk.delete);

//Customers
app.get('/tampilCustomer', controller.customer.getAll);
app.get('/tampilCustomer/:nomerHp', controller.customer.getOne);
app.post('/tambahCustomer', controller.customer.create);
app.put('/editCustomer/:nomerHp', controller.customer.update);
app.delete('/hapusCustomer/:nomerHp', controller.customer.delete);

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
 