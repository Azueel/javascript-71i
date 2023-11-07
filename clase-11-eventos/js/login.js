const validarUsuario = document.querySelector('#validarUsuario');

validarUsuario.addEventListener('submit', validarLogin);

let usuarios = JSON.parse(localStorage.getItem('usuarios'));

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

	//comprobar si el email ya esta registrado
	const existeEmail = usuarios.find(function (usuario) {
		return usuario.email === email;
	});

	if (existeEmail !== undefined) {
		if (existeEmail.password === password) {
			//si se cumple el usuario puede loguearse
			if (existeEmail.id == 1698276594011) {
				location.href = 'admin.html';
			} else {
				location.href = 'home.html';
			}
		} else {
			mostrarError('contraseña incorrecta');
		}
	} else {
		mostrarError('correo no existe');
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
