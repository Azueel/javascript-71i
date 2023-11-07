const tablaUsuario = document.querySelector('#tablaUsuario');
const formularioProductos = document.querySelector('#formularioProductos');
const formProductosEditar = document.querySelector('#formProductosEditar');
const tablaProductos = document.querySelector('#tablaProductos');
let usuarios = JSON.parse(localStorage.getItem('usuarios'));

//ejecutar evento submit de crear producto
formularioProductos.addEventListener('submit', crearProducto);
formProductosEditar.addEventListener('submit', editarProductos);

let productos = JSON.parse(localStorage.getItem('productos'));

class Producto {
	constructor(id, nombre, precio, descripcion) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
	}
}

//funcion encargada de cargar la tabla de usuarios
function cargarTablaUsuarios() {
	//iteramos sobre todos los usuarios creados y le generamos una estructyura html a cada uno con sus respectivos datos
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

//funcion encargada de crear Productos
function crearProducto(e) {
	e.preventDefault();

	const id = Date.now();
	const nombre = document.querySelector('#nombre').value;
	const precio = document.querySelector('#precio').value;
	const descripcion = document.querySelector('#descripcion').value;

	//aca van las validaciones ej="campos obligatorios, precio mayor a 0"

	//final de validacion

	//creamos una instancia del producto
	const newProduct = new Producto(id, nombre, precio, descripcion);

	//agregamos el producto a la lista de productos creados
	productos.push(newProduct);

	//guardamos el arreglo de productos con el producto creado en el localStorage
	localStorage.setItem('productos', JSON.stringify(productos));

	//limpiamos los inputs del formulario
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
	//limpiamos el html antes de cargar todos los producto, para evitar repeticiones
	tablaProductos.innerHTML = '';

	productos.map(function (producto) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
			<td>${producto.descripcion}</td>
			<td>
				<button class="btn btn-warning" onclick="mostrarEditarProductoModal(${producto.id})"> <i class="fa-regular fa-pen-to-square"></i></button>
				<button class="btn btn-danger" onclick="borrarProducto(${producto.id})"><i class="fa-solid fa-trash"></i></button>
			</td>
        `;

		tablaProductos.appendChild(tr);
	});
}
cargarTablaProductos();

//editarProducto
function mostrarEditarProductoModal(id) {
	//vamos a agarrar el arreglo con todos los productos y vamos a comparar cada uno de ellos con el id que seleccione en el caso que uno sea igual a el que seleccionamos nos retorna el objeto completo y se almacena en la variable producto
	const producto = productos.find(function (product) {
		return product.id === id;
	});

	//traemos los inputs del formulario editar y remplazamos su valor por los del producto seleccionado
	document.querySelector('#nombreEditar').value = producto.nombre;
	document.querySelector('#precioEditar').value = producto.precio;
	document.querySelector('#descripcionEditar').value = producto.descripcion;

	//creamos un atributo en la etiqueta form llamado data-id y le ponemos de valor el id del producto seleccionado
	formProductosEditar.setAttribute('data-id', id);

	//el modal por defecto tiene un display none el cual permanedce oculto, lo que hacemos es que se muestre con el display block
	document.querySelector('#editProductModal').style.display = 'block';
}

//funcion cuando se ejecuta el submit del modalEditar
function editarProductos(e) {
	e.preventDefault();
	const nombreEditar = document.querySelector('#nombreEditar').value;
	const precioEditar = document.querySelector('#precioEditar').value;
	const descripcionEditar = document.querySelector('#descripcionEditar').value;

	//aca van las validaciones
	//asegurarse que todos los campos sean obligatorios
	//que el precio sea mayor a 0

	//obtener el ID del producto que estamos editando
	const id = formProductosEditar.getAttribute('data-id');

	const productoIndex = productos.findIndex(function (producto) {
		return producto.id === parseInt(id);
	});

	productos[productoIndex].nombre = nombreEditar;
	productos[productoIndex].precio = precioEditar;
	productos[productoIndex].descripcion = descripcionEditar;

	document.querySelector('#editProductModal').style.display = 'none';

	localStorage.setItem('productos', JSON.stringify(productos));

	cargarTablaProductos();
}

//funcion para eliminar los productos
function borrarProducto(id) {
	//ACORDARSE DE PONER UN MODAL DONDE LE PREGUNTE AL USUARIO SI ESTA SEGURO DE REALIZAR LA OPERACION
	productos = productos.filter(function (producto) {
		return producto.id !== id;
	});

	localStorage.setItem('productos', JSON.stringify(productos));

	cargarTablaProductos();
}
