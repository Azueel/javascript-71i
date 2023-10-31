class Usuario {
	constructor(id, nombre, edad, email, password) {
		this.id = id;
		this.nombre = nombre;
		this.edad = edad;
		this.email = email;
		this.password = password;
	}
}

//Traemos la etiqueta del formulario
const validarUsuario = document.getElementById('validarUsuario');

const formError = document.querySelector('#formError');

//Arreglo que inicializa vacio pero se va a encargar de almacenar el arreglo con todos los usuarios previamente registrados
let usuarios = [];
//evento que se ejecuta apenas carga la pagina
document.addEventListener('DOMContentLoaded', function () {
	usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
});

//a la etiqueta form le aplicamos un evento que va a ser submit y va a ejecutar la funcion validarRegistro
validarUsuario.addEventListener('submit', validarRegistro);

//funcion encargada detoda la logica de la validacion
function validarRegistro(e) {
	//preventDefault lo que va a realizar es evitar el refresh de la pagina
	e.preventDefault();

	const id = Date.now();
	const nombre = document.querySelector('#nombre').value;
	const edad = document.querySelector('#edad').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	const confirmPassword = document.querySelector('#confirmPassword').value;

	const validarEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	const resultadoValidacion = validarEmail.test(email);

	//validaciones
	if (
		nombre === '' ||
		edad === '' ||
		email === '' ||
		password === '' ||
		confirmPassword === ''
	) {
		mostrarError('Todos los campos son obligatorios');
		return;
	} else if (!resultadoValidacion) {
		mostrarError('Email invalido');
		return;
	} else if (password.length < 6) {
		mostrarError('La contraseña debe ser mayor a 6 caracteres');
		return;
	} else if (password !== confirmPassword) {
		mostrarError('las contraseñas deben ser iguales');
	}

	//Agarrar el arreglo de usuarios y iterar sobre cada uno de ellos y realizar una comparacion del los email de cada usuario registrado con el email que ingreso el registrante en el caso que encuentre un usuario con el mismo email va a retornar el objeto completo con los datos del usuario, si no encuentra ninguno va a retornar undefined
	const existeEmail = usuarios.find(function (usuario) {
		return usuario.email === email;
	});

	//si no retorna undefined "existeEmail" sinifica que encontro un email igual al que se quiso registrar y atrapa al error a mostrar
	if (existeEmail !== undefined) {
		Swal.fire({
			icon: 'error',
			title: 'Usuario Existente',
			text: 'Lo siento el usuario ingresado ya esta registrado!',
			footer: '<a href="">Why do I have this issue?</a>',
		});
		return;
	}

	// creamos una instancia para guardar los datos del usuario
	const newUser = new Usuario(id, nombre, edad, email, password);

	//en el arreglo usuario donde tenemos todos los usuarios guardados le agregamos el nuevo usuario registrado
	usuarios.push(newUser);

	//guardamos en el localStorage  el arreglo de usuarios que tiene al nuevo usuario registrado
	localStorage.setItem('usuarios', JSON.stringify(usuarios));

	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Usuario registrado correctamente',
		showConfirmButton: false,
		timer: 1500,
	});

	//la variable que se encarga de almacenar la etiqueta del form se le agregar el metodo .reset() lo que hace es limpiar todos los campos de los input
	validarUsuario.reset();
}

function mostrarError(mensaje) {
	formError.textContent = mensaje;
	formError.classList.add(
		'text-white',
		'bg-danger',
		'w-25',
		'fs-3',
		'm-3',
		'p-3',
		'text-center'
	);

	setTimeout(() => {
		//cuerpo de la funcion a ejecutar
		formError.textContent = '';
		formError.classList.remove(
			'text-white',
			'bg-danger',
			'w-25',
			'fs-3',
			'm-3',
			'p-3',
			'text-center'
		);
	}, 5000);
}
