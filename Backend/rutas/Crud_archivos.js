const { Router } = require('express');

const miRutha = Router(); // Instanciamos el manejador de rutas
const archivos = require('../modelos/archivos'); //Requiero la "tabla" : el esquema para hacer las consultas
const {unlink} = require('fs-extra'); //importamos el metodo unlike para borrar archivos.
const path = require('path'); // para trabajar con rutas

// ###### PETICIONES GET ######

//Las peticiones tipo get a la raiz "/" van a ser respondidas con lo siguiente "nota: en este caso la raiz cambia ya que esta concadenada con el archivo index.js en la siguiente linea miServiorExpress.use('/api/archivos',require('./rutas/Crud_archivos')); "
miRutha.get('/', async (peticion, respuesta)=>{
    /*respuesta.send() //punto y como aqui es opcional*/
    /*respuesta.json(
        {
            text: 'Perro Jason'
        }
    )*/

    const jasonBooks = await archivos.find(); //Es equivalente a SELECT * FRROM de sql, devuelve todos los archivos encontrados
    respuesta.json(jasonBooks);
    console.log(jasonBooks);


});


// ###### PETICIONES POST ######
// El Jason enviado por el cliente debe de coincidir con el del schema 

miRutha.post('/', async (peticion, respuesta) => {
    const {titulo,autor, isbn} = peticion.body;
    const rutaAudio = '/uploads/' +  peticion.file.filename; // De la peticion obtenemos la ruta del archivo.
    const nuevoLibro = new archivos({titulo,autor,isbn,rutaAudio});
    //const nuevoLibro = new archivos({titulo,autor,isbn}); // archivos hace referencia a const archivos = require('../modelos/archivos'); 
    await nuevoLibro.save();

    respuesta.json({
        mensaje: 'Guardado'
    });
});

// ###### PETICIONES DELETE ######

miRutha.delete('/:id', async (peticion, respuesta) => {

    const archivoBorrado = await archivos.findByIdAndDelete(peticion.params.id); // peticion.params.id devuelve el id, esta peticion devuelve el objto eliminado
    unlink(path.resolve('./Backend/public' + archivoBorrado.rutaAudio)); //Eliminamos el archivo de la carpeta uploads rutaAudio es la propiedad del jason
    respuesta.json({
        mensaje: 'Eliminado'
    });
}
);



module.exports = miRutha;