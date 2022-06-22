const express = require('express')
const router = express.Router();

const path = require('path')

const multer = require('multer');
const myStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./public/uploads') //para customizar nuestra storage...
        // console.log('my file: ',file)
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now()+'_'+file.fieldname+path.extname(file.originalname))//agrego propiedades para que el archivo se identifique de la mejor manera
    } 
});

const uploads = multer({storage: myStorage})


const controller = require('../controllers/productsController');

// GET - localhost:3001/products/productList
router.get('/productList', controller.browse);

// GET - localhost:3001/products/create *** redirecciona una view en el controller
router.get('/create', controller.create);
// POST - localhost:3001/products
router.post('/', controller.add);


//GET - localhost:3001/products/edit/:id
router.get('/edit/:id', controller.edit);
//PUT - localhost:3001/products/:id
router.put('/:id', controller.update);


// GET - localhost:3001/products/:id
router.get('/:id', controller.read);
//DELETE - localhost:3001/products/:id
router.delete('/:id', controller.delete);



module.exports = router;