import {CarritoMongo} from './carrito/carritoMongo.js';
import {ProductoMongo} from './producto/productoMongo.js'

const carritoMongo = new CarritoMongo();
const productoMongo = new ProductoMongo();

export {carritoMongo, productoMongo};