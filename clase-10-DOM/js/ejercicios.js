function cambiarColor() {
	// guardamos la etiqueta de trajimos en una vari
	const fondoColor = document.querySelector('#cambiarColor');

	//ClassList se encarga de ver todas las clases que dispone nuestra etiqueta seleccionada
	console.log(fondoColor.classList);
	//contains es un metodo que nos pide que ingreses un nombre y va a evualar si se encuentra en las class retornando true o false
	console.log(fondoColor.classList.contains('dark'));

	if (fondoColor.classList.contains('light')) {
		fondoColor.classList.add('dark');
		fondoColor.classList.remove('light');
	} else {
		fondoColor.classList.add('light');
		fondoColor.classList.remove('dark');
	}
}

//Ejercicio 2
function sumar() {
	//.value nos devuelve el valor que se encuentra en la etiqueta
	const num1 = parseFloat(document.querySelector('#num1').value);
	const num2 = parseFloat(document.querySelector('#num2').value);
	const resultado = num1 + num2;

	const resultadoOperacion = document.getElementById('resultado');
	//textContent lo que hace es agregar el texto en la etiqueta que le asignemos
	resultadoOperacion.textContent = resultado;
}

function restar() {
	const num1 = parseFloat(document.querySelector('#num1').value);
	const num2 = parseFloat(document.querySelector('#num2').value);

	const resultado = num1 - num2;

	const resultadoOperacion = document.getElementById('resultado');
	//textContent lo que hace es agregar el texto en la etiqueta que le asignemos
	resultadoOperacion.textContent = resultado;
}

//Ejericio 3

function publicar() {
	const textoUsuario = document.querySelector('#textoUsuario').value;
	const publicaciones = document.querySelector('#publicaciones');

	//createElement nos permite crear etiquetas HTML
	const nuevaPublicacion = document.createElement('p');

	nuevaPublicacion.textContent = textoUsuario;

	//apend child nos va a permitir a incrustar la etiqueta en el elemento seleccionado
	publicaciones.appendChild(nuevaPublicacion);
}
