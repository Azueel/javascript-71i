const opcionJugador = prompt('escribe su selecion: piedra, papel o tijera');
let resultadoMaquina;

function opcionMaquina() {
	const seleccionMaquina = Math.floor(Math.random() * 3);

	switch (seleccionMaquina) {
		case 0:
			resultadoMaquina = 'piedra';
			break;

		case 1:
			resultadoMaquina = 'papel';
			break;

		case 2:
			resultadoMaquina = 'tijera';
			break;
	}

	calcularResultado(opcionJugador, resultadoMaquina);
}

function calcularResultado(opcionJugador, opcionMaquina) {
	console.log(opcionJugador);
	console.log(opcionMaquina);

	if (opcionJugador === opcionMaquina) {
		console.log('empate');
	} else if (opcionJugador === 'piedra') {
		if (opcionMaquina === 'papel') {
			console.log('perdiste');
		} else {
			console.log('ganaste');
		}
	} else if (opcionJugador === 'papel') {
		if (opcionMaquina === 'tijera') {
			console.log('perdiste');
		} else {
			console.log('ganaste');
		}
	} else if (opcionJugador === 'tijera') {
		if (opcionMaquina === 'papel') {
			console.log('ganaste');
		} else {
			console.log('perdiste');
		}
	}
}

opcionMaquina();
