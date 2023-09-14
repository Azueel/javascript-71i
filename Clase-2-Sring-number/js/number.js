const num1 = 20;
const num2 = 10;
const num3 = 10.45;
const num4 = 0.3245;
const num5 = -20;

let resultado;

//suma
resultado = num1 + num2;
console.log(resultado);

//resta
resultado = num1 - num2;
console.log(resultado);

//multiplicacion
resultado = num1 * num2;
console.log(resultado);

//division
resultado = num1 / num2;
console.log(resultado);

//modulo
resultado = num1 % num2;
console.log(resultado);

//pi
resultado = Math.PI;
console.log(resultado);

//redondear, a partir de .49 redondea hacia abaajo y apartir de 50 para arriba
resultado = Math.round(num3);
resultado = Math.round(10.5);
console.log(resultado);

//redondear hacia arriba
resultado = Math.ceil(2.1);
console.log(resultado);

//redondear hacia abajo
resultado = Math.floor(2.9);
console.log(resultado);

//calcular el numero menor
resultado = Math.min(3, 2, 10, 6, 20);
console.log(resultado);

//calcular el numero mayor
resultado = Math.max(3, 2, 10, 6, 20);
console.log(resultado);

//numero aleatorio
resultado = Math.ceil(Math.random() * 20);
console.log(resultado);

//pasar de un string a un numero
const numero = '10';
const numero2 = '91.2';
const numero3 = 'uno';

console.log(parseInt(numero));
console.log(parseFloat(numero2));
console.log(parseInt(numero3));
