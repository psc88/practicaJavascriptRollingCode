// Persona -> nombre, apellido, dni, usuario, pass, comision
// Alumno -> nombre, apellido, dni, usuario, pass, comision, curso, legajo
// Tutor -> nombre, apellido, dni, usuario, pass, comision, id, antiguedad -- tarea

class Persona {
  constructor(nombre, apellido, dni, usuario, pass, comision) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.usuario = usuario;
    this.pass = pass;
    this.comision = comision;
  }

  mostarDatos() {
    document.write(`Nombre: ${this.nombre} 
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Usuario: ${this.usuario}
        <br>Pass: ${this.pass}
        <br>Comision: ${this.comision}`);
  }

  mostrarNombreCompletop() {
    document.write(`Nombre: ${this.nombre} Apellido: ${this.apellido}`);
  }

  //  propiedades conmutadas: getters y setters
  get mostrarUsuario() {
    return this.usuario;
  }

  get mostrarComision() {
    return this.comision;
  }

  set modificarDni(nuevoDni) {
    this.dni = nuevoDni;
  }

  set modificarComision(nuevoComision) {
    this.comision = nuevoComision;
  }
}

class Alumno extends Persona {
  constructor(nombre, apellido, dni, usuario, pass, comision, legajo, curso) {
    super(nombre, apellido, dni, usuario, pass, comision);
    this.legajo = legajo;
    this.curso = curso;
    this.estado = true;
  }

  mostarDatos() {
    document.write(`Nombre: ${this.nombre} 
    <br>Apellido: ${this.apellido}
    <br>DNI: ${this.dni}
    <br>Usuario: ${this.usuario}
    <br>Pass: ${this.pass}
    <br>Comision: ${this.comision}
    <br>Legajo: ${this.legajo}
    <br>Curso: ${this.curso}`);
  }
}

document.write("** Accediendo desde el constructor **<br>");
let lily = new Persona("Lily", "Cerda", 34568501, "lcerda", "jashdf23", "17i");
lily.mostarDatos();

//usar el get
document.write("<br>** Accediendo desde el get **");
document.write("<br>Usuario: " + lily.mostrarUsuario);

///usar el set
let otroDni = 35454751;
lily.modificarDni = otroDni;
document.write("<br>** Mostrando un nuevo DNI**<br>");
lily.mostarDatos();

document.write("<br>** Mostrando datos de un Alumno**<br>");
let jonathan = new Alumno(
  "Jonathan",
  "Singh",
  23564789,
  "jsingh",
  "jkdnsvj54",
  "17i",
  46521,
  "FullStack"
);
jonathan.mostarDatos();
