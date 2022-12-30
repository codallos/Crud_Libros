import petiArchi from "./servicios/archivosServicios";
const peticion = new petiArchi();
import { format } from "timeago.js";

class interfaz {
    async pintarArchivo() {
        const jasonConListadoArchivos = await peticion.obtenLibros();
        console.log(jasonConListadoArchivos);

        const contenedorListado = document.getElementById("listado");
        contenedorListado.innerHTML = ""; // Vaciamos el contenbedor

        jasonConListadoArchivos.forEach((jsonArchivo) => {
            const div = document.createElement("div");
            div.className = "tarjeta";
            div.innerHTML = `
            

                <div class="general-info">
                    <div class="imagen-libro">
                        <img src="${
                            jsonArchivo.rutaAudio
                        }" alt="mi imagen" class="final-imagen" loading="lazy">
                    </div>
                    <div class="informacion">
                        <div class="titulo"> ${jsonArchivo.titulo}</div>
                        <div class="autor-ok">${jsonArchivo.autor}</div>
                    </div>
                        
                </div>
                <div class="parte-baja-contenedor">
                    <div class="tiempo-atras">
                        ${format(jsonArchivo.fechaCreacion)}
                    </div>
                        
                    <div class="boton-eliminar-contenedor">  
                        <a href="#" class="x" id="${
                            jsonArchivo._id
                        }">Eliminar</a>
                    </div>
                </div>
            
            
            `;

            contenedorListado.appendChild(div); //agregamos los div crados;

            /* if (jasonConListadoArchivos.length === 0) {

                console.log("Vacio");
                contenedorListado.className += " oculto"
                
    
            }*/
        });

        //console.log(contenedorListado);
    }

    async subirArchivo(formularioVirtual) {
        const respuesta = await peticion.GuardaLibros(formularioVirtual);
        // this.limpiarFormulario();
        this.pintarArchivo();
        this.limpiarFormulario();
    }

    limpiarFormulario() {
        document.getElementById("formulario1").reset();
        document.getElementById("select-archivi").innerHTML = 'Escoge una imagen';
    }

    async eliminarArchivo(id) {
        await peticion.EliminaLibros(id);
        this.pintarArchivo();
    }

    pintarMensaje(mensaje, color, tiemmpo) {
        const div = document.createElement("div"); // elemento div ue se va a insertar
        div.className = `${color} mensaje-script`;

        div.appendChild(document.createTextNode(mensaje)); //agrega un texto al contenedor div creado

        const contenedor = document.querySelector("#formulario1"); //elemento padre del contenedor ue se va a insertar
        const formularioOk = document.querySelector(".formulario"); //elemento donde antes del cual se va a insertar

        contenedor.insertBefore(div, formularioOk);

        setTimeout(() => {
            document.querySelector(".mensaje-script").remove();
        }, tiemmpo);
    }

    contadorArchivosSeleccionados() {
        //const resultado = document.getElementById('image').files[0]
        const resultado = document.getElementById("image");
        resultado.addEventListener("change", () => {
            const resultado = document.getElementById("image").files[0];
            const nombreArchivoOk = resultado.name;


            document.getElementById("select-archivi").innerHTML = nombreArchivoOk;

            

            

            console.log(resultado.name);
        });

        /* if (console.log(resultado !== undefined)){
            document.getElementById('select-archivi').innerHTML = "OK seleccionado"
        }; //cuando se tiene algo seleccionado */
    }
}

export default interfaz;
