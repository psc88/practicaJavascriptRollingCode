// while

/*
  while(condicion) {
    codigo a ejecutar si se cumple la condicion
    cambiar condicion
  }
 */

let contador = 1000;
while (contador <= 100){
    document.write('Elemento '+ contador +'<br>');
    contador = contador +1;
}

// do-while hacer ... mientras (se cumpla la condicion)
/* 
do{
    codigo a ejecutar
    cambio la condicion
}while(condicion)
*/

let elemento = 0;

do{
    document.write('Elemento do-while'+ elemento +'<br>');
    elemento--;
} while (elemento >= 1)

//for
/*
    for(crear la variable; condicion; incremento o decremento el valor de la variable){
        codigo a ejecutar
    }
*/

for(let i=1; i<=100; i++){
    document.write('Elemento for'+ i +'<br>');
}