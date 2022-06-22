const {json}= require('express');
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../data/products.json');
const productArray =  JSON.parse(fs.readFileSync(filePath));

console.log('array de productos----->',productArray);

const controller = {
    browse: (req, res)=>{
        res.send('Estamos en productos')

    },
    read: (req, res)=>{
        const productId = req.params.id
        res.send('Estamos en productos'+productId)
    },
    create: (req, res)=>{
        res.render('create')
    },
    edit: (req, res)=>{
        const productId = req.params.id
        res.send('formulario para EDITAR un producto'+productId);
    },
    add: (req, res)=>{
        console.log('request body-------->',req.body);

        //Se guarda
        productArray.push(
            {
            pdtName: req.body.pdtName,
            pdtPrice: req.body.pdtPrice
            // imageFile: req.file? req.file.filename :''
            }
        )
        fs.readFileSync(path.resolve(__dirname, '../data/products.json'), JSON.stringify(productArray, null, 4),{
            encoding:'utf-8'  
        })
        console.log('se guardo el dato okey')
        
        // Y Se redirecciona
        res.redirect('/products?saved=true')
    },
    update: (req, res)=>{
        const productId = req.params.id
        res.send('actualizar info en un producto'+productId)
    },
    delete: (req, res)=>{
        const productId = req.params.id
        res.send('Estoy en el formulario para ELIMInAR un producto'+productId)
    }
}

module.exports = controller;