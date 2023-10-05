//declarar una funcion

//funcion declarativa
function sumar() {
	console.log(2 + 2);
}

//llamar funcion
sumar();

//funcion de expresion
const sumar2 = function () {
	console.log(3 + 3);
};

sumar2();

// const valor1 = parseInt(prompt('ingrese el primer numero'));
// const valor2 = parseInt(prompt('ingrese el segundo valor'));

// //parametros y argumentos
// function sumar3(num1, num2) {
// 	console.log(num1 + num2);
// }

// sumar3(valor1, valor2);

// parametros por defecto

function usuario(nombre, apellido = '') {
	console.log(`Bienvenido ${nombre} ${apellido}`);
}

usuario('pepe');

//Ejercicio Practico
// const user = prompt('Ingrese su Nombre');
// const password = prompt('ingrese su contraseña');
// const confirmPassword = prompt('Ingrese nuevamente su contraseña');
// const usuariosRegistrados = ['tiago', 'olivia', 'julian'];

// function autenticar(nombre, contraseña, confirmarContraseña) {
// 	//validar los datos del usuario
// 	if (nombre === '' || contraseña === '' || confirmarContraseña === '') {
// 		console.log('todos los campos son obligatorios');
// 	} else if (contraseña.length < 6) {
// 		console.log('la contraseña debe ser mayor a 6 caracteres');
// 	} else if (contraseña !== confirmarContraseña) {
// 		console.log('las contraseñas deben ser iguales');
// 	} else {
// 		console.log('Registrado correctamente');

// 		guardarUsuario(nombre);
// 	}
// }

// autenticar(user, password, confirmPassword);

// function guardarUsuario(usuario) {
// 	usuariosRegistrados.push(nombre);
// 	console.log(usuariosRegistrados);
// }

//scope global y local
const userName = 'Fede';

function scope() {
	const persona = 'juan';
	console.log(persona);
	console.log(userName);
}

scope();

//Bucles en funciones

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
	'primavera',
];

// for (let i = 0; i < meses.length; i++) {
// 	console.log(meses[i]);
// }

meses.forEach(function (mes) {
	console.log(mes);
});

meses.map(function (mes) {
	console.log(mes);
});

const meses2 = meses.map(function (mes) {
	return mes;
});

console.log(meses2);
