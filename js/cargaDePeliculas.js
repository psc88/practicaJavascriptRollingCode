// Crear un script donde el usuario pueda cargar Películas hasta que presione el botón cancelar, almacenar las series en un arreglo y luego mostrarlas con este formato:

// Arreglo de Películas:

// Peli 1: ....
// Peli 2: ....
// Peli 3: ....
// Peli 4: ....

let listaDePeliculas = [];

do{
    let pelicula = prompt('Ingresar peli para agregar a la lista: ');
    listaDePeliculas.push(pelicula);
}while(confirm('¿Ingresar mas peliculas?'))

let cantidadDePeliculas = listaDePeliculas.length;
for(let i=0; i<cantidadDePeliculas; i++){
    document.write('Peli 1: ',listaDePeliculas[i]+'<br>');
}