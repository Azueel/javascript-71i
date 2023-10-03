//podemos en una lista almacenar cualquier tipo de dato
const array = [1, 'texto', true, false, ['hola', 1]];
console.log(array);

//cada valor de un arreglo se le asigna un inidice que arranca de 0
const comision71i = ['franciscos', 'pablo', 'alejandro', 'marcos'];
//                         0          1         2           3

//forma de acceder a un elemento espesifico de un arreglo
console.log(comision71i[3]);

//forma de acceder a un elemento espesifico de un arreglo anidado
console.log(array[4][0]);

//tipos de arreglos
const animal = ['gato', 'perro', 'leon'];

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//agregar un elemento a una lista
comision71i.push('andrea');

//agregar elemento de un array dentro de otro array
array[4].push('chau');

//unshift agrega al principio del arreglo
const frutas = ['banana', 'cereza'];
frutas.unshift('manzana');
console.log(frutas);

//modificar un valor del arreglo
comision71i[0] = 'francisco';

//ordernar alfabeticamente de la a-z
console.log(comision71i.sort());

//odernar de la z-a
console.log(comision71i.reverse());

//buscar un elemento
console.log(numeros.includes(10));

//borrar el primer elemento
numeros.shift();
console.log(numeros);

//borrar el ultimo elemento
numeros.pop();
console.log(numeros);

//bucle lista
const meses = [
	'enero',
	'febrero',
	'marzo',
	'abril',
	'mayo',
	'junio',
	'julio',
	'agosto',
	'septiembre',
	'octubre',
	'noviembre',
	'diciembre',
];

console.log(meses);

for (let i = 0; i < meses.length; i++) {
	console.log(meses[i]);
}
