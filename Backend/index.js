if (process.env.NODE_ENV !== 'production'){

    require('dotenv').config() //modulo para acceder a las variables de entorno
} 

// nodulo para permitir la comunicación entre servidores
const express = require('express'); // para crear el servidor
const peticionesMorgan = require('morgan'); // Para ver las peticiones por consola
const procesaImagenesMulter = require('multer'); // Modulo para procesar imagenes
const { join } = require('path');
const ruta = require('path'); //Modulo para trabajar con rutas
const cors = require('cors');
//const miRutha = require('./rutas/Crud_archivos');

// inicializaciones
const miServiorExpress = express();
require('./db');
//Configuraciones 
miServiorExpress.set('port', process.env.PORT || 3000); // Se asigna el puerto ue se va a ocupar, por defecto usara el que se encuentra definido en las variables de entorno "archivo . env" de lo contrario utilizara el puerto 3000


//Intermediarios
miServiorExpress.use(peticionesMorgan('dev')); // Cada peticion que haga el cliente va a pasar por esta funcion y devolvera los logs por consola

const configuracionAlmacenamiento = procesaImagenesMulter.diskStorage(
    {
        destination: ruta.join(__dirname, '/public/uploads'), //__dirname te da la ruta de donde se encuentra el archivo
        
        filename(peticion, archivo, cb){
            cb(null, new Date().getTime() + ruta.extname(archivo.originalname)); //null para el error, concadenamos la fecha actual con la extension del archivo, de tal modo que se renombra el archivo.
        }
 }
);

/////IMPORTANTE IMPORTANTE 
miServiorExpress.use(procesaImagenesMulter({storage : configuracionAlmacenamiento}).single('image')); //Subir una imagen con la configuracion de Multer 'image' hace referencia al input del frontend que se tendra que estar escuchando y supervisando

miServiorExpress.use(express.urlencoded({extended: false})); // Nos sirve para interpretar lo que se envia de un formulario y extraer lo que se envia a traves de ese Jason
miServiorExpress.use(express.json()); //Me permite entender el formato Jason
miServiorExpress.use(cors()); // Se usa el modulo cors para permitir la conexion entre servidores

//Rutas

miServiorExpress.use('/api/archivos',require('./rutas/Crud_archivos')); // Seleccionar el archivo que procesara las peticiones del usuario, tipo REST IP: Solo enviara y recibira Jasons

//Archivos estaticos
miServiorExpress.use(express.static(ruta.join(__dirname,'/public'))); // Seleccionamos la carpeta ue va a ser publica, solo son accesibles los archivos dentro de la misma, aqui se puede crear la pagina directamente

// Arrancar el servidor
miServiorExpress.listen(miServiorExpress.get('port'),
    () => {
        console.log("Servidor en puerto", miServiorExpress.get('port'));

        }
);

