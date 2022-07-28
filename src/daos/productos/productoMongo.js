import {ContenedorMongo} from '../../db/contenedorMongo.js';

class ProductoMongo extends ContenedorMongo {
    constructor() {
        super('productos');
    }
};

export {ProductoMongo};