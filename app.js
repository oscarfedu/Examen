/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require ("fs");
let tareasporhacer= JSON.parse(fs.readFileSync("tareas.json", "utf-8"));

exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
    return tareasporhacer;
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
    tareasporhacer.push(tarea);
    let formatoJazon= JSON.stringify(tareasporhacer);
    fs.writeFileSync('./tareas.json', formatoJazon);
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
    return tareasporhacer.filter(function(x){
       return x.status===estado;
   } );
   
}
