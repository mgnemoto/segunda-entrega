import express from 'express';
import {carritoRouter, productoRouter} from './src/routes/index.js'
import './src/config/mongodb.js';

const app=express();

app.use(express.json());

app.use('/api/productos', productoRouter)
app.use('/api/carrito', carritoRouter)

app.listen(3000,()=>{
    console.log('Server running on port 3000');
});