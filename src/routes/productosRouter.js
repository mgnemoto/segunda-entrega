import express from 'express';
import {ProductoMongo} from '../daos/productos/productoMongo.js';

const productoRouter = express.Router();

productoRouter.get('/', ProductoMongo.getAll);
productoRouter.get('/:id', ProductoMongo.getById);
productoRouter.post('/', ProductoMongo.addElement);
productoRouter.put('/:id', ProductoMongo.updateElement);
productoRouter.delete('/:id', ProductoMongo.deleteElement);

export {productoRouter};