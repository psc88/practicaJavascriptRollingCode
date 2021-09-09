// funciones sin parametros
function aumentarPrecio(){
    console.log('prueba');
    let disney = 385;
    let inflacion = 150;
    document.write('Valor total del servicio de disney plus $'+(disney + inflacion)+'<br>');
};

// funcion con parametros
function actualizarPrecio(monto, producto, precio){
    let calculo = monto * precio;
    document.write('<br>El producto: '+producto+' precio total $'+calculo)
}

// funciones que devuelven un valor
    // function convertirDolaresPesos(precioDolar){
    //     let total = precioDolar * 184;
    //     return total;
        //jamas escribimos en esta zona, la linea de return es la ultima que se ejecuta
    // }

// funciones en forma de flecha =>
let convertirDolaresPesos = (precioDolar, dolarBlue) => {
    let total = precioDolar * dolarBlue;
    return total;
}

//invocar o llamar funcion
aumentarPrecio();

let coeficienteInflacion = parseInt(prompt('Ingrese el monton total de la inflaccion del mes: '));

actualizarPrecio(coeficienteInflacion, 'Teclado Hyperx', 9000);
actualizarPrecio(coeficienteInflacion, 'Teclado Logitec', 14000);
actualizarPrecio('mouse logitec',9000, 100);

let dolarBlue = parseInt(prompt('Ingrese el valor del dolar blue a la fecha'));
let iphone = convertirDolaresPesos(1200, dolarBlue);

document.write(`<br> Producto Iphone - precio $ ${iphone} (producto nuevo) `);
document.write('<br> Podructo PS5 - precio $' +convertirDolaresPesos(500, dolarBlue)+'(ultima version)');