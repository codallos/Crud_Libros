const mongo = require('mongoose');

const rutaConexion = process.env.MONGODB_RUTA;



mongo.connect(rutaConexion, {
    useNewUrlParser:true // esta linea es un requerimiento del modulo mongoose
})
    .then( // si la conexion es satisfactoria se devuelve un objeto llamado okdb
        okdb => console.log('esta es una conexion')
    )
    .catch(

        miError => console.error(miError)

    );