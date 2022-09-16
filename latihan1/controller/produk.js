const model = require('../config/model/index');
const controller = {};

controller.getAll = async (req,res)=> {
    try{
        let produk = await model.produk.findAll()
        if(produk.length > 0){ // jika ada data di database akan ditampilkan semua kolom dan data
            res.status(200).json({
                message: "Menampilkan Produk",
                data: produk
            })
        }else{
            res.status(200).json({
                message: "TIdak Ada Data",
                data: []
            })
        }
    }catch(error){
        res.status(404).json({
            message: error.message
        }) 
    }
}

controller.idProduk = async (req,res)=>{
    try{
        let produk = await model.produk.findAll({
            attributes: ['id','namaProduk']  //atributes digunakan untuk menampilkan bebrapa kolom saja
        })
        if(produk.length > 0 ){
            res.status(200).json({
                message: "Menampilkan id dan Nama produk",
                data : produk
            })
        } else {
            res.status(200).json({
                message: "Tidak Menampilkan Data"
            })
        }
        
    } catch (error) {
            res.status(404).json({
                message: error.message
            })
    }
}

controller.getOne = async (req,res) =>{
    try{
        let produk = await model.produk.findAll({
            where: { // jika pake query ini untuk dicari berdasarkan apa
                katagori: req.params.katagori //params digunakan jika sudah ada datanya dalam database
            }
        })
        if (  produk.length > 0 ){ //jika ada data sesuai dengan katagorinya akan ditampilkan
            res.status(200).json({
                message: "Ini Produk yang Anda Cari",
                data: produk
            })
        }else{
            res.status(200).json({
                message: "Tidak Ada Data",
                data: []
            })
        }
    } catch(error) {
        res.status(200).json({
            message: error.message
        })
    }
}


controller.create = async (req,res) => {
    //console.log(req.body)
    try{
        let produk = await model.produk.create({
            namaProduk: req.body.namaProduk,
            deskripsi: req.body.deskripsi,
            katagori : req.body.katagori
        })
        res.status(201).json({
            message: "Berhasil  Menambahkan Data",
            data: produk
        })
    } catch(error){
        res.status(404).json({
            message: error.message
        })

    }
}

controller.update = async (req,res) => {
    try{
        let produk = await model.produk.update({
            namaProduk: req.body.namaProduk,
            deskripsi: req.body.deskripsi,
            katagori : req.body.katagori
        },{
            where: {
                id: req.params.id 
            }
        })
        res.status(200).json({ 
            message: "Berhasil  Mengubah  Data Produk"
        })
    } catch(error){
        res.status(404).json({
            message: error.message
        })

    }
}

controller.delete = async (req,res) =>{
    try{
        let produk = await model.produk.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: "Data Berhasil di Hapus"
        })
    } catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = controller;