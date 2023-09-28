console.log('conectado');

// let i = 1;

//while ejecuta el cuerpo del bucle solamente cuando la condicion se cumple
// while (i < 20) {
// 	console.log(i);

// 	i++;
// }

//do while al menos ejecuta el cuerpo del bucle una vez luego evalua la condicion
// let x = 31;

// do {
// 	console.log(x);

// 	x++;
// } while (x < 30);

//Bucle For
// for (let y = 1; y <= 20; y++) {
// 	console.log(y);
// }

// const numero = 10;

// for (let i = 1; i <= 40; i++) {
// 	let resultado = numero * i;
// 	console.log(`${numero} x ${i} = ${resultado}`);
// }

// for (let i = 1; i <= 20; i++) {
// 	if (i % 2 === 0) {
// 		console.log(`el numero ${i} es par`);
// 	} else {
// 		console.log(`es numero ${i} impar`);
// 	}
// }

//vamos a evular 150 numeros si el numero es multiplo de 3 mostrar en consola FIZZ, si es multiplo de 5 mostrar Buzz y si es multiplo de ambos mostrar FIZZBUZZ

for (let i = 1; i <= 150; i++) {
	if (i % 15 === 0) {
		console.log(`${i} FIZZBUZZ`);
	} else if (i % 3 === 0) {
		console.log(`${i} FIZZ`);
	} else if (i % 5 === 0) {
		console.log(`${i} BUZZ`);
	}
}
