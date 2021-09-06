anime = 'Dragon Ball Z';

// crear o inicializar un arreglo []
let series = ['Dragon Ball', 'Naruto', 'Evangelion 3.0+1', anime, 15, true];
// crear un arreglo vacio
let temporadas = [];

// cuando quiero acceder a un elemento del arreglo nombrearreglo[posicion]
document.write('Serie: '+ series[3] );

//agregar un elemento al final del arreglo
series.push('Loky');
series.push('Breaking bad');

console.log(series[6]);

//para saber la cantidad de elemenos 
console.log(series.length)
console.log(temporadas.length)

series.push(prompt('ingrese una serie'));
console.log(series.length);

//mostrar todos los elementos de un arreglo

mostrarSeries();

//modificar un elemento del arreglo
series[4] = 'The office';

document.write('<br>');
mostrarSeries();

//agregar un nuevo elemento en una posicion particular

series.splice(0, 0, 'dr strange')

document.write('<br>');
mostrarSeries();

//agregar otro elemento (posicion, cuantos elementos quiero borrar, elemento a agregar o reemplazar), si veo 3 valores agrego algo
series.splice(3,2,'Sword art online');
mostrarSeries();

//eliminar un elemento(posicion, elementos a borrar), si veo dos valores quiero borrar
series.splice(7,1);
mostrarSeries();

//eliminar todos los elementos a apartir de tal posicion

series.splice(2); // de la posicion 3 en adelante borro
series.splice(0,1); //de la posicion 0 borro un elemento
mostrarSeries();

// crear funcion que muestre los elementos del arreglo
function mostrarSeries(){
    document.write('<br>');
    for(let posicion=0; posicion < series.length; posicion++ ){
        document.write('<br>Serie '+(posicion+1)+': '+series[posicion]);
    }
}




