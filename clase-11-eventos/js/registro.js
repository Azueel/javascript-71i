//Traemos la etiqueta del formulario
const validarUsuario = document.getElementById('validarUsuario');

const formError = document.querySelector('#formError');

//a la etiqueta form le aplicamos un evento que va a ser submit y va a ejecutar la funcion validarRegistro
validarUsuario.addEventListener('submit', validarRegistro);

//funcion encargada detoda la logica de la validacion
function validarRegistro(e) {
	//preventDefault lo que va a realizar es evitar el refresh de la pagina
	e.preventDefault();

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
	} else {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Usuario Registrado Correctamente',
			showConfirmButton: false,
			timer: 1500,
		});

		//guardar el usuario registrado en la "base de datos"
	}
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
