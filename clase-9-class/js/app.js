// // las clases la definimos con la palabra reservada class y el nombre de la clase siempre debe inicializar en mayuscula
// class Persona {
// 	//el constructor serian los parametros donde vamos a almacenar la informacion que me manden
// 	constructor(nombre, apellido, edad, pais) {
// 		(this.nombre = nombre),
// 			(this.apellido = apellido),
// 			(this.edad = edad),
// 			(this.pais = pais);
// 	}

// 	//aca vamos a definir todos los metodos que podemos realizar en esta class
// 	mostrarInfo() {
// 		console.log(
// 			`Tu nombre completo es ${this.nombre} ${this.apellido}, tiene ${this.edad} y es de ${this.pais}`
// 		);
// 	}
// }

// //esto se lo conoce como declarar una instancia donde creamos una variable y es igual a la palabra reservada new seguido del nombre de la class y los datos que esta esperando el constructor
// const usuario = new Persona('pepe', 'argento', 50, 'Argentina');
//llamamos un metodo
// usuario.mostrarInfo();

/////////////////////////////////////////////////////////////////////////////////////
// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta {
	constructor(nombre) {
		this.nombre = nombre;
		this.saldo = 0;
	}

	ingresar(monto) {
		this.saldo = this.saldo + monto;
	}

	extraer(monto) {
		if (this.saldo >= monto) {
			this.saldo = this.saldo - monto;
		} else {
			console.log(`saldo insuficiente`);
		}
	}

	informar() {
		console.log(`La cuenta de ${this.nombre} dispone de un saldo de ${this.saldo}`);
	}
}

const usuarioBanco = new Cuenta('pepe');

usuarioBanco.ingresar(500);
usuarioBanco.ingresar(300);

usuarioBanco.extraer(400);
usuarioBanco.extraer(500);

// usuarioBanco.informar();

// /////////////////////////////////////////////////////////

// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
	constructor(nombre, edad, dni, sexo, peso, altura, fechaNacimiento) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = dni;
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
		this.fechaNacimiento = fechaNacimiento;
	}

	mostrarGeneracion() {
		if (this.fechaNacimiento >= 1930 && this.fechaNacimiento <= 1948) {
			console.log('Sos de la generacion silent generation');
		} else if (this.fechaNacimiento >= 1949 && this.fechaNacimiento <= 1968) {
			console.log('Sos de la generacion Baby Boom');
		} else if (this.fechaNacimiento >= 1969 && this.fechaNacimiento <= 1980) {
			console.log('sos de la generacion X');
		} else if (this.fechaNacimiento >= 1981 && this.fechaNacimiento <= 1993) {
			console.log('Sos de la generacion Y');
		} else if (this.fechaNacimiento >= 1994 && this.fechaNacimiento <= 2010) {
			console.log('sos de la generacion z');
		} else {
			console.log('tu año de nacimiento no dispone de una generacion establecida');
		}
	}

	esMayorEdad() {
		if (this.edad >= 18) {
			console.log('sos mayor de edad');
		} else {
			console.log('sos menor de edad');
		}

		// console.log(
		// 	`sos ${this.edad >= 18 ? 'sos mayor de edad' : 'sos menor de edad'}`
		// );
	}

	mostrarDatos() {
		console.log(
			`Nombre: ${this.nombre}, edad: ${this.edad}, DNI: ${this.dni}, Sexo: ${
				this.sexo === 'H' ? 'hombre' : 'mujer'
			}, Peso: ${this.peso}, Altura: ${this.altura}, Nacimiento: ${
				this.fechaNacimiento
			}`
		);
	}
}

const usuarioGeneracion = new Persona('Alejo', 18, 231719312, 'H', 80, 178, 1999);

usuarioGeneracion.mostrarGeneracion();

usuarioGeneracion.esMayorEdad();

usuarioGeneracion.mostrarDatos();
