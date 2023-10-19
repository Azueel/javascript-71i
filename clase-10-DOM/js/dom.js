//solo trae por id y si llamamos a una clase nos va a retornar NULL
const elemento = document.getElementById('titulo');
console.log(elemento);

//getElementByClassName
//solo trabaja con clases no reconoce ID (nos trae todas las etiquetas que tengan subtitulo como class)
const elementoClase = document.getElementsByClassName('subtitulo');
console.log(elementoClase);

//querySelector
//Trabaja con ID y Class solamente tenemos que declarar
const elementoQuery = document.querySelector('.subtitulo');
console.log(elementoQuery);

//querySelectorAll
//a diferencia de querySelector en las clases que solo te trae el primero, este te va a traer todos los que encuentre
const elementoQueryAll = document.querySelectorAll('.subtitulo');
console.log(elementoQueryAll);
