// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

// let month = ['January','February','March','April','May','June','July','August','September','October','November','December']

// let count = month.length;

// for (let i=0; i<count; i++){
//     document.write(`<br>Mes ${i+1}: ${month[i]}`)
// }

// ----------------------------------------------------------------------

//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// * Mostrar la longitud del arreglo.
// * Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// * Añade en última posición la ciudad de París.
// * Escribe por pantalla el elemento que ocupa la segunda posición.
// * Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// let town = [];

// do{
//     let addTown = prompt('Ingresar ciudad: ');
//     town.push(addTown);
//     console.log(town);
// } while(confirm('¿Ingresar mas ciudades?'));

// let count = town.length;

// document.write(`-------------------------------------------------------`);
// document.write(`<br>--|  La longitud del arreglo es de ${count}<br>`);
// document.write(`-------------------------------------------------------`);
// document.write(`<br>--|  En la primera posicion esta: ${town[0]}`);
// document.write(`<br>--|  En la tercera posicion esta: ${town[2]}`);
// document.write(`<br>--|  En la ultima posicion esta: ${town[(count)-1]}<br>`);
// document.write(`-------------------------------------------------------`);
// town.splice((count), 0, 'París');
// count = town.length;
// for(let i=0; i<count; i++){
//     document.write(`<br>ciudad :${town[i]}`);
// }
// document.write(`<br>-------------------------------------------------------`);
// document.write(`<br>--|  En la segunda posicion esta: ${town[1]}`);
// document.write(`<br>-------------------------------------------------------`);
// town.splice(1, 1, 'Barcelona');
// for(let i=0; i<count; i++){
//     document.write(`<br>ciudad :${town[i]}`);
// }

// ----------------------------------------------------------------------

// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// let number = 50;
// let accumulator = [];

// while(number > 0){
//     let numberDice1 = Math.floor((Math.random()*7));
//     let numberDice2 = Math.floor((Math.random()*7));
//     let adder = numberDice1 + numberDice2;
//     accumulator.push(adder);
//     number--;
// }

// for(let i=0; i<accumulator.length; i++){
//     document.write(`<br>${i+1}° Numero: ${accumulator[i]}`);
// }

// ----------------------------------------------------------------------

// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let numero = parseInt(prompt('Ingrese un numero: '));

let parImpar = numero => {
    
    if(numero % 2 === 0 ){
        let resultado = document.write('Numero Par');
        return resultado;
    } else {
        let resultado = document.write('Numero Impar');
        return resultado;
    }
}

parImpar();

// ----------------------------------------------------------------------







