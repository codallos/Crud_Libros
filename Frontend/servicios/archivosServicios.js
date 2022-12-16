// Cramos las clases para hacer las peticiones POST GET DELETE 

class petiArchi {

    constructor(){
        this.DIRECCION = "/api/archivos";
    };

    async obtenLibros(){

        const respuesta = await fetch(this.DIRECCION);
        //const jasonArchivos = await respuesta.jason();
        const jasonArchivos = await respuesta.json();
        return jasonArchivos
        //return respuesta;
    };

    async GuardaLibros(formularioDatos){

        const respuesta = await fetch(this.DIRECCION,{

            method: 'POST',
            body: formularioDatos
           
            
        });

        const jasonRespuesta = await respuesta.json();

        console.log(jasonRespuesta);

    };

    async EliminaLibros(id){

        const respuesta = await fetch(`${this.DIRECCION}/${id}`,{
            headers: {
                'content-type' : 'application/json'
            },
            method: 'DELETE'



        });

        const respuestaJson = await respuesta.json();
        console.log(respuestaJson);

    }


}

module.exports = petiArchi;
