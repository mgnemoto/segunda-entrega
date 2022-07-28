import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true 
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }});

const producto = mongoose.model('productos', productoSchema);

export default producto;

