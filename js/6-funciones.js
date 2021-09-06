// funciones sin parametros
function aumentarPrecio(){
    console.log('prueba');
    let disney = 385;
    let inflacion = 150;
    document.write('Valor total del servicio de disney plus $'+(disney + inflacion)+'<br>');
};

// funcion con parametros
function actualizarPrecio(monto, producto, precio){
    let calculo = precio + monto;
    document.write('<br>El producto: '+producto+' precio total $'+calculo)
}

//invocar o llamar funcion
aumentarPrecio();

let coeficienteInflacion = parseInt(prompt('Ingrese el monton total de la inflaccion del mes: '));

actualizarPrecio(coeficienteInflacion, 'Teclado Hyperx', 9000);