//comentar una linea de codigo

/*
hola 
Soy 
un comentario
con varias lineas de codigo
*/

//alert es un mensajito que me va a mostrar el navegador en forma de alerta
// alert('hola');

//console.log me va a mostrar el mensaje en consola, el atajo para escribirlo es "clg"
console.log('Hola comision 71i');

/**************************  Variables **************************/

// let nombre = 'pepito';

// let edad = 30;

// let provincia = 'Tucuman';

// let pais = 'argentina';

// console.log(nombre);

// console.log(edad);

// console.log(provincia);

// console.log(pais);

//buena forma de llamar variables
const nombreCompleto = 'alejo calandra';

const nombre_completo = 'pepito juarez';

const NombreCompleto = 'marina torres';

const _nombreCompleto = 'martin fernandez';

//no se puede llamar de esta forma

// const !nombre = "pepe";
// const 2nombre = "pepe";
// const nombre completo = "pepe";
// const switch = "pepe";

// VARIABLE LET
//la variable let no es obligatoria que tenga un valor inicial y puede ser re-asignada

let nota;

nota = 10;

nota = 9;

console.log(nota);

let edad = 55;
edad = 56;

//VARIABLE CONST
//Es una variable la cual no puede ser re-asignada y necesita un valor inicial

const pi = 3.14;

const dni = 3250213;

//ejercicio dinmaico de variables

const nombre = prompt('ingrese su nombre');

let edadUsuario = prompt('Ingrese su edad');

let saldoBancario = prompt('ingrese su saldo bancario');

let gastoSemanal = prompt('ingrese su gasto semanal');

let saldoActual = saldoBancario - gastoSemanal;

console.log(nombre);
console.log(edadUsuario);
console.log(saldoBancario);
console.log(gastoSemanal);
console.log(saldoActual);
