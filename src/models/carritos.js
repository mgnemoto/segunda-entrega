import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const carritosSchema = new Schema({
    productos:[{
        type: Schema.Types.ObjectId,
        ref: 'productos'
    }],
    nombre: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }});

const carritos = mongoose.model('carritos', carritosSchema);

export default carritos;
