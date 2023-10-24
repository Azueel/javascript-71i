const validarUsuario = document.querySelector('#validarUsuario');

validarUsuario.addEventListener('submit', validarLogin);

function validarLogin(e) {
	e.preventDefault();

	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	const validarEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	const resultadoValidacion = validarEmail.test(email);

	//validaciones
	if (!email || !password) {
		mostrarError('todos los campos son obligatorios');
	} else if (!resultadoValidacion) {
		mostrarError('Email invalido');
	}

	//analizar si el email ingresado existe en la "base de datos"
	//si existe ver si el email encontrado coincide con la contraseña ingresada
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
