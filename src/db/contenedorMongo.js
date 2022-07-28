

class ContenedorMongo{
    constructor(collection){
        this.collection = collection;
    }
    async getAll(){
        try{
            const elementos = await this.collection.find();
            return elementos;
        }
        catch(err){
            console.log(err);
        }
    }   
    
    async addElement(elemento){
        try{
            const producto = new producto(elemento);
            await producto.save();
            console.log('Elemento añadido');
            return producto;
        }
        catch(err){
            console.log(err);
        }
    }

    async updateElement(id, newData){
        try{
            const producto = await producto.findByIdAndUpdate(id, newData);
            console.log('Elemento actualizado');
            return producto;
        }
        catch(err){
            console.log(err);
        }
    }
    
    async deleteElement(id){
        try{
            const producto = await producto.findByIdAndDelete(id);
            console.log('Elemento eliminado');
            return producto;
        }
        catch(err){
            console.log(err);
        }
    }


}

export {ContenedorMongo};