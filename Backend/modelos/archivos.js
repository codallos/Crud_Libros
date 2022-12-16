const { Schema, model} = require('mongoose');


//Se crea el esquema de los datos a guardar "los campos", es el equivalente a la tabla
const archivosEsquema = new Schema({
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    isbn: {type: String, required: true},
    rutaAudio: {type:String},
    fechaCreacion: {type: Date, default: Date.now}

}
)

module.exports= model('Book',archivosEsquema); // Exportamos el modelo como un parametro, el primer parametro es el nombre que le queremos dar, el segundo es el esquema que creamos