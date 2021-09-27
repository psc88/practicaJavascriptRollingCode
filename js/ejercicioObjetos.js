// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// let auto = {
//     color: 'Negro',
//     marca: 'Chevrolet',
//     modelo: 'Corsa Classic',
//     estadoDelVehiculo: true,
// }

// let mostrarAtributos = (auto) => {
//     let clave = Object.keys(auto);
//     for(let i=0; i<clave.length; i++){
//         let propiedad = clave[i]
//         document.write(`<br>${propiedad}: ${auto[propiedad]}`)
//     }
// }

// let encenderApagar = confirm('Encender el vehiculo ?')
//     auto.estadoDelVehiculo = encenderApagar;
//     if(auto.estadoDelVehiculo == true){
//         auto.estadoDelVehiculo = 'Encendido';
//     } else {
//         auto.estadoDelVehiculo = 'Apagado';
//     }
//     mostrarAtributos(auto);

// -----------------------------------------------------------------------------

// Cuenta bancaria
// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// * Una propiedad titular con el valor "Alex".
// * Una propiedad saldo, teniendo como valor inicial 0.
// * Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// * Un método extraer() que permita retirar la cantidad pasada como parámetro.
// * Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// let cuenta = {
//     titular: 'Alex',
//     saldo: 0,
//     ingresar: (importe) => {
//         cuenta.saldo = cuenta.saldo + importe;
//     },
//     extraer: (extraerDinero) => {
//         if(cuenta.saldo > extraerDinero){
//             cuenta.saldo = cuenta.saldo - extraerDinero;
//         } else {
//             alert(`Saldo insuficiente, su saldo actual es: ${cuenta.saldo}`)
//         }
//     },
//     informar: () =>{
//         document.write(`Titular: ${cuenta.titular}, Tiene un saldo de ${cuenta.saldo}`)
//     },
// }

// do{
//     let cuentaBancaria = parseInt(prompt('1: Ingresar dinero 2: Extraer dinero 3: Consulta de saldo actual'));
//     switch(cuentaBancaria){
//         case 1:
//             do{
//                 let importe = parseFloat(prompt('Importe a ingresar en su cuenta bancaria: '));
//                 cuenta.ingresar(importe);
//                 console.log(cuenta.saldo);
//             }while(confirm('¿Ingresar Dinero?'))
//             break;
//         case 2:
//             do{
//                 let extraerDinero = parseFloat(prompt('Importe a retirar de su cuenta bancaria: '));
//                 cuenta.extraer(extraerDinero);
//             }while(confirm('¿Retirar mas dinero?'))
//             break;
//         case 3:
//             cuenta.informar();
//             break;
//         default:
//             console.log('el usuario eligio mal')
//     }
// } while(confirm('Elegir otra opcion'))

// -----------------------------------------------------------------------------

// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

// class Rectangulo {
//     constructor (alto, ancho){
//         this.alto = alto,
//         this.ancho = ancho
//     }

//     get mostrarAlto(){
//         return this.alto;
//     }

//     get mostrarAncho(){
//         return this.ancho;
//     }

//     set modificarAlto(nuevoAlto){
//         this.alto = nuevoAlto;
//     }

//     set modificarAncho(nuevoAncho){
//         this.ancho = nuevoAncho;
//     }

//     mostrarPropiedades(){
//         document.write(`Propiedes del rectangulo<br>
//         Alto: ${this.mostrarAlto}
//         Ancho: ${this.mostrarAncho}.`)
//     }

//     calcularPermietro(){
//         let perimetro = ((this.mostrarAlto*2) + (this.mostrarAncho*2));
//         document.write(`<br>El perimetro del rectangulo es de: ${perimetro}`);
//     }

//     calcularArea(){
//         let area = (this.mostrarAlto * this.mostrarAncho);
//         document.write(`<br>El Area del rectangulo es de: ${area}`);
//     }
// }

// let rectangulo = new Rectangulo(50, 50);
// let rectangulo2 = new Rectangulo(25, 30);
// rectangulo.mostrarPropiedades();
// rectangulo.calcularPermietro();
// rectangulo.calcularArea();
// document.write('<br>********************************<br>')
// rectangulo2.mostrarPropiedades();
// rectangulo2.calcularPermietro();
// rectangulo2.calcularArea();

// -----------------------------------------------------------------------------
// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades. Posteriormente, cree tres instancias de este objeto y guárdalas en un array. Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

// class Producto {
//     constructor(codigo, nombre, precio){
//         this.codigo = codigo,
//         this.nombre = nombre,
//         this.precio = precio
//     }

//     get mostrarCodigo(){
//         return this.codigo;
//     }
//     get mostrarNombre(){
//         return this.nombre;
//     }
//     get mostrarPrecio(){
//         return this.precio;
//     }

//     set modificarCodigo(nuevoCodigo){
//         this.codigo = nuevoCodigo;
//     }
//     set modificarNombre(nuevoNombre){
//         this.nombre = nuevoNombre;
//     }
//     set modificarPrecio(nuevoPrecio){
//         this.precio = nuevoPrecio;
//     }

//     imprimeDatos(){
//         document.write(`Propiedades del producto<br>
//         Codigo: ${this.mostrarCodigo}<br>
//         Nombre: ${this.mostrarNombre}<br>
//         Precio: ${this.mostrarPrecio}`);
//     }
// }

// let listaDeProductos=[];
// let codigo= 0;

// do{
//     codigo++;
//     let nombre = prompt('Ingrese nombre del producto');
//     let precio = parseFloat(prompt('Ingrese precio del producto'));
//     let producto = new Producto(codigo, nombre, precio);
//     listaDeProductos.push(producto);
// }while(confirm('¿Agregar un producto nuevo?'))

// for(let i=0; i<listaDeProductos.length; i++){
//     console.log(listaDeProductos[i].imprimeDatos())
//     document.write('<br>-------------------<br>')
// }

// -----------------------------------------------------------------------------
// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

// class Persona1 {
//     constructor(nombre, edad, dni, sexo, peso, altura, añoDeNacimiento){
//         this.nombre = nombre,
//         this.edad = edad,
//         this.dni = dni,
//         this.sexo = sexo,
//         this.peso = peso,
//         this.altura = altura,
//         this.aNacimiento = añoDeNacimiento
//     }

//     mostrarGeneracion(){
//         let edad = this.edad;
//         if(edad <=1948){
//             document.write(`${this.nombre} pertenece a la generacion Silent Generation(Los niños de la posguerra)<br>
//             Rango caracteristco: Austeridad`);
//         }else if(edad >= 1949 && edad <=1968) {
//             document.write(`${this.nombre} pertenece a la generacion Baby Boom<br>
//             Rango caracteristco: Ambición`);
//         }else if(edad >= 1969 && edad <=1980){
//             document.write(`${this.nombre} pertenece a la generacion X<br>
//             Rango caracteristco: Obsesión por el exito`);
//         }else if(edad >= 1981 && edad <=1993){
//             document.write(`${this.nombre} pertenece a la generacion Y (millennials)<br>
//             Rango caracteristco: Frustación`);
//         }else {
//             document.write(`${this.nombre} pertenece a la generacion Z<br>
//             Rango caracteristco: Irreverencia`);
//         }
//     }
//     esMayorDeEdad(){
//         let edad = this.edad;
//         if(edad>=18){
//             document.write(`${this.nombre} es mayor de edad`);
//         } else {
//             document.write(`${this.nombre} es menor de edad`);
//         }
//     }
//     mostrarDatos(){
//         document.write(`<br>Nombre: ${this.nombre}<br>
//         Edad: ${this.edad}<br>
//         DNI: ${this.dni}<br>
//         Sexo: ${this.sexo}<br>
//         Peso: ${this.peso}<br>
//         Altura: ${this.altura}<br>
//         Año de nacimiento: ${this.aNacimiento}<br>`)
//     }
//     generarDni(){
//         let numeroAleatorio = Math.floor(Math.random()*100000000)
//         this.dni = numeroAleatorio;
//     }
// }

// let pablo = new Persona1('Pablo', 27, 31456789, 'H', 92, 1.72, 1994);
// pablo.mostrarGeneracion();
// document.write('<br>')
// pablo.esMayorDeEdad();
// pablo.generarDni();
// document.write('<br>****Datos de la Persona****')
// pablo.mostrarDatos();

// -----------------------------------------------------------------------------

// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad.
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

// class Libro {
//   constructor(isbn, titulo, autor, numeroDePagina) {
//     (this.isbn = isbn),
//       (this.titulo = titulo),
//       (this.autor = autor),
//       (this.numeroDePagina = numeroDePagina)
//   }

//   get mostrarIsbn() {
//     return this.isbn;
//   }
//   get mostrarTitulo() {
//     return this.titulo;
//   }
//   get mostrarAutor() {
//     return this.autor;
//   }
//   get mostrarNumeroDePaginas() {
//     return this.numeroDePagina;
//   }
//   set modificarIsbn(nuevoIsbn) {
//     this.isbn = nuevoIsbn;
//   }
//   set modificarTitulo(nuevoTitulo) {
//     this.isbn = nuevoTitulo;
//   }
//   set modificarAutor(nuevoAutor) {
//     this.isbn = nuevoAutor;
//   }
//   set modificarNumeroDePagina(nuevoNumeroDePagina) {
//     this.isbn = nuevoNumeroDePagina;
//   }

//   mostrarLibro() {
//     document.write(
//       `El libro ${this.mostrarTitulo} con ISBN ${this.mostrarIsbn}, creado por el autor ${this.mostrarAutor} tiene ${this.mostrarNumeroDePaginas} páginas`
//     );
//   }
// }

// let libro1 = new Libro(123, "El diario de Ana Frank", "Ana Frank", 190);
// let libro2 = new Libro(321, "El gran libro de los sueños", "Emilio Salas", 400);
// let libros = [libro1, libro2];
// let numero = 0;

// document.write("**** Libro 1 ****<br>");
// libro1.mostrarLibro();
// document.write("<br>**** Libro 2 ****<br>");
// libro2.mostrarLibro();

// document.write("<br>");
// for (let i = 0; i < 2; i++) {
//   let cantidadDePaginas = libros[i].mostrarNumeroDePaginas;
//   if(cantidadDePaginas > numero){
//       numero =  cantidadDePaginas;
//   }
// }
// document.write(`El libro con mayores paginas tiene ${numero}`);

// -----------------------------------------------------------------------------

// Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicándole nosotros el tamaño o con un tamaño por defecto (10).
// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.
class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  mostrarDatos() {
    document.write(`Nombre: ${this.nombre} Telefono: ${this.telefono}`);
  }

  get obtenerNombre() {
    return this.nombre;
  }

  get obtenerTelefono() {
    return this.telefono;
  }

  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  set modificarTelefono(nuevoTelefono) {
    this.telefono = nuevoTelefono;
  }
}

class Agenda {
  constructor(tamanio) {
    this.contacto = [];
    this.tamanio = tamanio;
  }

  set mofificarTamanio(nuevoTamanio) {
    this.tamanio = nuevoTamanio;
  }

  anadirContacto() {
    if (!this.existeContacto(contacto)) {
      console.log("El contacto ya existe no se puede agregar");
    } else {
      if (!this.AgendaLlena()) {
        this.contacto.push(contacto);
        console.log("contacto añadido");
        this.listarContacto();
      }
    }
  }

  existeContacto(contacto) {
    const exist = this.contactos.find(
      (contactoExistente) => contactoExistente.nombre === contacto.nombre
    );
    // console.log('dentro de existeContacto ' + exist);
    if (exist) {
      return true;
    } else {
      return false;
    }
  }

  listarContactos() {
    for (let i = 0; i < this.contactos.length; i++) {
      console.log(
        `Contacto: ${this.contactos[i].obtenerNombre} Telefono: ${this.contactos[i].obtenerTelefono}`
      );
    }
  }

  buscarContacto(contacto) {
    const encontrado = this.contactos.find(
      (existentes) => existentes.nombre === contacto
    );
    if (encontrado) {
      console.log("contacto encontrado ");
    } else {
      console.log("Este contacto no existe");
    }
  }

  eliminarContacto(contacto) {
    let contactosFiltrados = this.contactos.filter(
      (contactoExistente) => contactoExistente.nombre != contacto.nombre
    );
    console.log("contactos que deberian quedar" + contactosFiltrados);
  }

  agendaLlena() {
    if (this.contactos.length === this.tamanio) {
      console.log("agenda llena");
      return true;
    } else {
      console.log("queda espacio");
      return false;
    }
  }

  huecosLibres() {
    let cantidadEspacios = this.tamanio - this.contactos.length2;
    console.log("Cantidad de espacio disponible " + cantidadEspacios);
  }
}

let agendaPrueba = new Agenda(10);

do {
  let opcion = parseInt(
    prompt(
      "Seleccione una opcion: 1- agregar contacto, 2- cambiar tamaño de agenda, 3- listar contactos, 4- buscar contacto"
    )
  );

  switch (opcion) {
    case 1:
      // agregar contacto solo si la agenda tiene huecos libres

      agendaPrueba.huecosLibres();

      let nombre = prompt("ingrese un nombre");
      let telefono = prompt("ingrese un telefono");
      let nuevoContacto = new Contacto(nombre, telefono);

      agendaPrueba.agregarContacto(nuevoContacto);
      break;
    case 2:
      // cambiar tamaño
      let nuevoTamanio = parseInt(
        prompt("ingrese la cantidad de contactos que desea tener")
      );
      agendaPrueba.modificarTamanio = nuevoTamanio;
      console.log(
        "Tamaño de agenda modificado, cantidad actual: " + nuevoTamanio
      );

      break;
    case 3:
        // listar contactos
        agendaPrueba.listarContactos();
        break;
    case 4:
        // buscar contacto
        let contactoBuscado = prompt('ingrese el nombre que busca');
        agendaPrueba.buscarContacto(contactoBuscado);
        break;
    default:
      document.write("Ingreso una opcion invalida");
  }
} while (confirm("quiere realizar otra operacion?"));