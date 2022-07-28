import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/27017/mongo', { 
    useNewUrlParser: true,
    useUnifiedTopology: true });

export default mongoose;