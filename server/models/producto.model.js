const mongoose = require('mongoose');

const EsquemaProducto = new mongoose.Schema({ //los atributos de la colección productos
    nombre: String, 
    precio: Number,
    descripcion: String
}, {timestamps:true,versionKey: false}); 

//timestamps: creando campos de createdAy y updatedAt

const Producto = mongoose.model("productos",EsquemaProducto); //primero va el nombre de la colección

//exporta el objeto producto(linea 11) y usarlo en otro archivo
module.exports = Producto; 
