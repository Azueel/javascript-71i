const edad = 18;

if (edad >= 18) {
	console.log('Usuario mayor de edad');
} else {
	console.log('usuario es menor de edad');
}

// const password = prompt('ingrese una contraseña');

// if (password.length < 6) {
// 	console.log('la contraseña debe ser mayor a 6 caracteres');
// } else {
// 	console.log('contraseña valida');
// }

// const nota = prompt('ingrese la nota');

// if (nota == 10) {
// 	console.log('Excelente');
// } else if (nota >= 8 && nota <= 9) {
// 	console.log('Muy Bien');
// } else if (nota == 7 || nota == 6) {
// 	console.log('Bien');
// } else if (nota <= 5 && nota >= 1) {
// 	console.log('regular');
// } else {
// 	console.log('Nota no valida, la nota debe ser entre 1 y 10');
// }

// const nombre = prompt('ingrese su nombre');

// const edadUsuario = prompt('ingrese su edad');

// const password = prompt('ingrese su contraseña');

// const confirmPassword = prompt('ingrese nuevamente su contraseña');

// if (nombre == '' || edadUsuario == '' || password == '' || confirmPassword == '') {
// 	console.log('todos los campos son obligatorios');
// } else if (edadUsuario < 18) {
// 	console.log('el usuario debe ser mayor a 18 años');
// } else if (password.length < 10) {
// 	console.log('la contraseña debe ser mayor o igual a 10 caracteres');
// } else if (password != confirmPassword) {
// 	console.log('las contraseñas deben ser iguales');
// } else {
// 	console.log('usuario registrado correctamente');
// }

//Tarea
// Tarea 3 - Números con condicionales
// ● Ingresan dos números
// ● Si el primero es mayor que el segundo mostrar en consola
// ● la suma de ambos
// ● Si el primero es menor que el segundo mostrar en consola
// ● la resta del segundo menos el primero.
// ● Si son iguales mostrar en consola la multiplicación de ambos.
// ● ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es
// igual a 3
// Solicitar al usuario que ingrese dos números

// const num1 = parseInt(prompt('ingrese el primer numero'));
// const num2 = parseInt(prompt('ingrese el segundo valor'));

// if (num1 > num2) {
// 	console.log(num1 + num2);
// } else if (num1 < num2) {
// 	console.log(num2 - num1);
// } else if (num1 == num2) {
// 	console.log(num1 * num2);
// }

//pedir al usuario que ingrese su estacion favorita
const estacion = prompt('Ingrese su estacion favorita');

//la estructura condicional Switch

switch (estacion) {
	case 'verano':
		console.log('te gusta el verano');
		break;

	case 'invierno':
		console.log('te gusta el invierno');
		break;

	case 'otoño':
		console.log('Te gusta el otoño');
		break;

	case 'primavera':
		console.log('te gusta la primavera');
		break;

	default:
		console.log('Estacion ingresada es incorrecta');
		break;
}

// if (estacion == 'verano') {
// 	console.log('te gusta el verano');
// } else if (estacion == 'invierno') {
// 	console.log('te gusta el invierno');
// } else if (estacion == 'otoño') {
// 	console.log('te gusta el otoño');
// } else if (estacion == 'primavera') {
// 	console.log('te gusta la primavera');
// } else {
// 	console.log('estacion ingresada no es valida');
// }

// const ruleta = Math.ceil(Math.random() * 5);

// const dineroJugador = 10000;
// let resultado;
// console.log(ruleta);

// switch (ruleta) {
// 	case 1:
// 		resultado = dineroJugador - 3000;
// 		console.log(`Uy No hay asado tu saldo actual es de ${resultado}`);
// 		break;

// 	case 2:
// 		resultado = dineroJugador * 15;
// 		console.log(
// 			`Felicidades Ganaste el premio maximo tu saldo actual es de ${resultado}`
// 		);
// 		break;

// 	case 3:
// 		resultado = dineroJugador;
// 		console.log(`ni fu ni fa tu saldo se mantiene en ${resultado}`);
// 		break;

// 	case 4:
// 		resultado = dineroJugador - 30000;
// 		console.log(
// 			`El casino no es lo tuyo tu saldo es de ${resultado} fijate como nos vas a pagar`
// 		);
// 		break;

// 	case 5:
// 		resultado = dineroJugador + 10000;
// 		console.log(
// 			`Felicidades anda cambiando de maquina tu saldo actual es de ${resultado}`
// 		);
// 		break;

// 	default:
// 		console.log('numero recibido no valido, por favor contactarse con soporte');
// 		break;
// }
