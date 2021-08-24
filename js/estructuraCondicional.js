/*
if (condicion logica) {
    codigo a ejecutar si se cumple la condicion
}
*/

let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));

if (numero1 > numero2) {
  document.write("La variable numero1 es mayor " + numero1);
} else if (numero2 > numero1) {
  document.write("La variable numero2 es mayor " + numero2);
} else {
  document.write("Los numeros son iguales");
}
