//formas de escribir String
const marca = 'adidas'; //es la forma recomendada
const marca2 = String('nike'); //opcion no recomendada

//.length conoce la cantidad de caracteres que tiene la cadena de texto (prioridad para aprender)
const password = 'abc12345';
console.log(password.length);

//includes nos va a retornar si el dato que esta en includes es igual a la variable me retorna true en el caso contrario me retorna false
const celular = 'samsung';
console.log(celular.includes('samsung'));

//concatenacion
const nombre = 'Pepe';
let edad = 50;
const provincia = 'Tucuman';

//primera forma
console.log(nombre.concat(edad));

//segunda forma
console.log(
	'Bienvenido ' + nombre + ' de ' + edad + ' de la provincia de ' + provincia
);

//Tercera forma y la mas utilizada (propiridad a aprender)
console.log(`Bienvenido ${nombre} de ${edad} años de la provincia de ${provincia}`);

//cortar espacios en blanco (prioridad para aprender)
const passwordUsuario = '       12345          ';

console.log(passwordUsuario.trim());

//cortar una letra o numero en espesifico
console.log(nombre.charAt(0));

//pasar un texto a mayuscula
const texto = 'Argentina';
console.log(texto.toUpperCase());

//pasar un texto a minuscula (este es prioridad para aprender)
const texto2 = 'COMIDA';
console.log(texto2.toLowerCase());
