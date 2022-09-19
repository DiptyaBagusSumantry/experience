const e = require('express');
const model = require('../config/model/index');
const controller = {};

controller.getAll = async (req,res) => {
    try{
        let customer = await model.customer.findAll()
        if(customer.length > 0) {
            res.status(200).json({
                message: "Menampilkan Data Customer",
                data: customer
            })
        } else {
            res.status(200).json({
                message: 'Tidak Ada Data',
                data: []
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
        let customer = await model.customer.findAll({
            where: {
                nomerHp : req.params.nomerHp
            }
        });
        if(customer.length>0){
            res.status(200).json({
                message: "Data Yang Kamu Cari : ",
                data: customer
            })
        }else{
            res.status(200).json({
                message: "Tidak Ada Data",
                data: []
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.create = async (req,res) => {
    try{
        let customer = await model.customer.create({
            nama : req.body.nama,
            nomerHp: req.body.nomerHp,
            tglLahir: req.body.tglLahir,
            jenisKelamin : req.body.jenisKelamin
        })
        res.status(201).json({
            message: "Berhasil Menambahkan Customer ",
            data: customer
        })

    }catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

controller.update = async (req,res) =>{
    try{
        let customer = await model.customer.update({
            nama : req.body.nama,
            tglLahir : req.body.tglLahir,
            jenisKelamin: req.body.jenisKelamin
        },{
            where: {
                nomerHp: req.params.nomerHp
            }
        })
        res.status(200).json({
            message: "Data Berhasil di Edit"
        })

    }catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

controller.delete = async (req,res)=>{
    try{
        let customer =  await model.customer.destroy({
            where: {
                nomerHp: req.params.nomerHp
            }
        })
        res.status(200).json({
            message: "Data Berhasil di Hapus"
        })

    }catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = controller;