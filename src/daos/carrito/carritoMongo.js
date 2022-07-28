import {ContenedorMongo} from '../../db/contenedorMongo.js';

class CarritoMongo extends ContenedorMongo {
    constructor() {
        super('productos');
    }
};

export {CarritoMongo};