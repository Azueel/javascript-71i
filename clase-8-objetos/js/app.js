console.log('conectado');

const auto = {
	marca: 'Fiat',
	color: 'blanco',
	año: '2010',
	puertas: '4',
	modelo: 'uno',
};

const persona = {
	nombre: 'tiago',
	nacionalidad: 'Argentina',
	medida: {
		altura: '179cm',
		peso: '75kg',
	},
};

//acceder a un valor de un objeto
console.log(persona.nombre);

//re-asignar un valor a un objeto
persona.nacionalidad = 'francia';

//agregar un valor a un objeto
persona.edad = 19;

//borrar un elemento de un objeto
delete persona.edad;

console.log(persona);

//bucle
const alumnos = [
	{
		nombre: 'pepito',
		carrera: 'ingenieria',
		promedio: 8.2,
		suspendido: false,
		materias: ['matematica', 'calculo', 'fisica', 'algebra lineal'],
	},
	{
		nombre: 'juanita',
		carrera: 'ingenieria',
		promedio: 9.2,
		suspendido: true,
		materias: [
			'matematica',
			'calculo',
			'fisica',
			'algebra lineal',
			'programacion I',
		],
	},
	{
		nombre: 'nono',
		carrera: 'Veterinaria',
		promedio: 6.7,
		suspendido: false,
		materias: ['contenido'],
	},
];

console.log(alumnos[1].materias[2]);

alumnos.map(function (alumno) {
	console.log(
		`Hola ${alumno.nombre}, tu informacion que disponemos es que estas cursando la carrera de ${alumno.carrera} y tu promedio es de ${alumno.promedio}`
	);
});

const productos = [
	{
		nombre: "TV 50'",
		pio: 450000,
		descripcion: 'televrecisor samsung 4K Alta resolucion',
	},

	{
		nombre: 'Celular Samsung Galaxy S22',
		precio: 300000,
		descripcion:
			'Celular de alta gama con 8gb de ram procesador dragon y pantalla led',
	},
	{
		nombre: 'Heladera LG',
		precio: 200000,
		descripcion: 'heladera grande',
	},
	{
		nombre: 'lavaropa dream',
		precio: 350000,
		descripcion: 'lavado de multiples funciones',
	},
];

productos.map(function (producto) {
	console.log(
		`Aprovechen la siguiente oferta ${producto.nombre} a tan solo $${producto.precio}, ${producto.descripcion}`
	);
});

const ironMan = {
	nombre: 'Tony Stark',
	edad: 54,

	volar() {
		console.log('volando');
	},
};

ironMan.volar();
