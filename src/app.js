const path =  require('path');
const express = require('express');
const mainRouter = require('./router/mainRouter');
const productsRoutes = require('./router/productsRoutes');
// const methodOverride = require('method-override');

const app = express();

// app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

const PORT = 3001;
app.listen(PORT, ()=>{
    console.log('Server corriendo en port: ', PORT);
})

app.use(express.static(path.join(__dirname, '../public')));

// set up del req.body
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//ruta home
app.use(mainRouter);
app.use('/products', productsRoutes);