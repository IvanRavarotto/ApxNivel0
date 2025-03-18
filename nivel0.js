/* 
1 - Declarar una constante llamada unDulce y almacenar el nombre algún dulce que te guste
2 - Declarar una variable ranking con un valor numérico (dependiendo de cuanto te guste) del 1 al 10
3 - Mostrar ambos datos usando console.log()
4 - Luego, modifica la variable ranking y asígnale otro valor. Otro número.
5 - Imprimí ambos datos otra vez usando console.log()
*/

const unDulce = 'chocolate';
let ranking = 10;

console.log(unDulce, ranking);

ranking = 8;

console.log(unDulce, ranking);


//Ejemplo de un comentario de una unica línea
/*
Ejemplo de un comentario de varias líneas
Ejemplo de un comentario de varias líneas
*/


//Tipos de datos:
//Constantes: son variables que no cambian su valor en el tiempo de ejecución del programa y se declaran con la palabra reservada const
const PI = 3.1416
//Variables: son espacios de memoria que se utilizan para almacenar valores y se declaran con la palabra reservada let o var 
//(let es la forma más moderna de declarar variables)
//String: cadena de texto
let nombre = 'Juan';
//Number: número
let edad = 30;
//Boolean: verdadero o falso
let esMayor = true;
//Null: valor nulo
let nulo = null;
//Undefined: valor indefinido
let indefinido = undefined;
//Symbol: valor único e inmutable
let simbolo = Symbol('simbolo');
//Array: colección de datos
let frutas = ['manzana', 'pera', 'banana'];
//Object: objeto
let persona = {
    nombre: 'Juan',
    edad: 30
};
/*
La diferencia entre let y var es que let tiene un alcance de bloque y var tiene un alcance de función.
*/

//Typeof: operador que devuelve el tipo de dato de una variable
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esMayor);
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof simbolo);
console.log(typeof frutas);
console.log(typeof persona);
/*
Typeoff funciona para todos los tipos de datos, excepto para null, ya que devuelve object.
Se utiliza para validar el tipo de dato de una variable y así evitar errores en el código.
*/