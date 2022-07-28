import express from 'express';
import {CarritoMongo} from '../daos/carrito/carritoMongo.js';

const carritoRouter = express.Router();


carritoRouter.get('/', CarritoMongo.getAll);
carritoRouter.get('/:id', CarritoMongo.getById);
carritoRouter.post('/', CarritoMongo.addElement);
carritoRouter.put('/:id', CarritoMongo.updateElement);
carritoRouter.delete('/:id', CarritoMongo.deleteElement);

export {carritoRouter};