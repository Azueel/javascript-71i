const contenedorCard = document.querySelector('#contenedorCard');

const productos = JSON.parse(localStorage.getItem('productos'));

function cargarCardProductos() {
	productos.map(function (producto) {
		let div = document.createElement('div');

		div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title estilosTitulo">${producto.nombre}</h5>
                <p class="card-text">Precio: ${producto.precio}</p>
                <p class="card-text">${producto.descripcion}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
			
        `;

		contenedorCard.appendChild(div);
	});
}

cargarCardProductos();
