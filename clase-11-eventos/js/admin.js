const tablaUsuario = document.querySelector('#tablaUsuario');
const formularioProductos = document.querySelector('#formularioProductos');
const tablaProductos = document.querySelector('#tablaProductos');
let usuarios = JSON.parse(localStorage.getItem('usuarios'));

//ejecutar evento submit de crear producto
formularioProductos.addEventListener('submit', crearProducto);

let productos = JSON.parse(localStorage.getItem('productos'));

class Producto {
	constructor(id, nombre, precio, descripcion) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
	}
}

function cargarTablaUsuarios() {
	usuarios.map(function (usuario) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
        `;

		tablaUsuario.appendChild(tr);
	});
}

cargarTablaUsuarios();

function crearProducto(e) {
	e.preventDefault();

	const id = Date.now();
	const nombre = document.querySelector('#nombre').value;
	const precio = document.querySelector('#precio').value;
	const descripcion = document.querySelector('#descripcion').value;

	//aca van las validaciones ej="campos obligatorios, precio mayor a 0"

	//final de validacion

	const newProduct = new Producto(id, nombre, precio, descripcion);

	productos.push(newProduct);

	localStorage.setItem('productos', JSON.stringify(productos));

	formularioProductos.reset();

	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Producto Creado Correctamente',
		showConfirmButton: false,
		timer: 2500,
	});

	cargarTablaProductos();
}

function cargarTablaProductos() {
	productos.map(function (producto) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
			<td>${producto.descripcion}</td>
        `;

		tablaProductos.appendChild(tr);
	});
}

cargarTablaProductos();
