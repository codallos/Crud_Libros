require('./estilos/estilos.css');
import interfaz from './interfaz_usuario';


//import petiArchi from './servicios/archivosServicios';


document.addEventListener('DOMContentLoaded',() => {
    const interfaz2 = new interfaz();
    interfaz2.pintarArchivo();
}); 

document.getElementById("formulario1")
    .addEventListener('submit', e => {
        const titulo  = document.getElementById('titulo').value;
        const autor = document.getElementById('Autor').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const formulrioEnviado = new FormData();
        formulrioEnviado.append('titulo', titulo);
        formulrioEnviado.append('autor', autor);
        formulrioEnviado.append('isbn', isbn);
        formulrioEnviado.append('image', image[0]); //debe de tener el mismo nombre que el input ue lo envia

        //const misPeticiones = new petiArchi();
        //misPeticiones.GuardaLibros(formulrioEnviado);

        const miInterfaz = new interfaz();
        miInterfaz.subirArchivo(formulrioEnviado);
        miInterfaz.pintarMensaje('Subido','verde-ok', 3000)
        e.preventDefault();
        miInterfaz.limpiarFormulario();

        console.log(titulo,autor, isbn,image);
        //console.log(titulo,autor, isbn);

    });
document.getElementById('listado')
    .addEventListener('click', e => {
        //console.log('click')
        if(e.target.classList.contains('x')){
            //console.log('click')
            

            console.log(e.target.getAttribute('id'))
            const capturaId = e.target.getAttribute('id');

            const interfaz3 = new interfaz;
            interfaz3.eliminarArchivo(capturaId);
            interfaz3.pintarMensaje('Eliminado','red-ok',3000);
        }
        e.preventDefault();

    });

/*
document.getElementById('navegacion')
    .addEventListener('click', e =>{
        console.log('ok')
        const pruebasInt = new interfaz;
        pruebasInt.contadorArchivosSeleccionados();
    });*/

//const nodoVisto = document.getElementById('formulario1');
/*const nodoVisto = document.getElementById('image');
const config = {childList:true, subtree:true,CharacterData:true};
const callback = (mutation,oberva)=>{
    
        console.log('image')
  
}
const oberva = new MutationObserver(callback);
oberva.observe(nodoVisto,config);*/

const nodoVistodos = document.getElementById('image')
    .addEventListener('change',()=>{
        console.log(document.getElementById('image'));
        const pruebasOK = new interfaz;
        pruebasOK.contadorArchivosSeleccionados();
        //console.log('desde cambio')
    })
