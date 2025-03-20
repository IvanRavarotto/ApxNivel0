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

/*
Crea constantes llamadas nombre y ciudad con tus propios valores. 
Luego, utiliza un template literal para imprimir un mensaje de saludo personalizado que incluya el nombre y la ciudad. 
El mensaje debe tener el siguiente formato:

Hola, [nombre]. ¿Cómo va todo en [ciudad]?
*/

const nombrePersona = "Iván"   //Constante nombre
const ciudadPersona = "Resistencia";  //Constante ciudad

console.log(`Hola ${nombrePersona}. ¿Cómo va todo en ${ciudadPersona}?`);
//Resultado: Hola Iván. ¿Cómo va todo en Resistencia?

//Objetos formatos JSON
//JSON: JavaScript Object Notation
//Es un formato de intercambio de datos que es fácil de leer y escribir para los
//humanos y fácil de interpretar y generar para las máquinas.
//Se utiliza para enviar datos entre un servidor y un cliente.
//Ejemplo de un objeto JSON

let personaJSON = {
    nombre: 'Iván',
    edad: 23,
    ciudad: 'Resistencia',
    correo: 'itravarotto@gmail.com'
};

console.log(personaJSON);
console.log(`Mi nombre es: ${personaJSON.nombre}, tengo ${personaJSON.edad} años y vivo en ${personaJSON.ciudad}.`);

//Para agregar o modificar propiedades de un objeto JSON se utiliza la notación de punto
personaJSON.correo = 'itravarotto@outlook.com';
console.log(personaJSON);
personaJSON.trabajo = 'Desarrollador Web';
console.log(personaJSON);

//Operadores aritméticos
//Suma
let suma = 5 + 3;
console.log(suma);
//Resta
let resta = 5 - 3;
console.log(resta);
//Multiplicación
let multiplicacion = 5 * 3;
console.log(multiplicacion);
//División
let division = 5 / 3;
console.log(division);
//Módulo
let modulo = 5 % 3;
console.log(modulo);
//Incremento
let incremento = 5;
incremento++;
console.log(incremento);
//Decremento
let decremento = 5;
decremento--;
console.log(decremento);


//Operadores de asignación
//Asignación
let x = 5;
console.log(x);
//Suma y asignación
x += 3;
console.log(x);
//Resta y asignación
x -= 3;
console.log(x);
//Multiplicación y asignación
x *= 3;
console.log(x);
//División y asignación
x /= 3;
console.log(x);
//Módulo y asignación
x %= 3;
console.log(x);

//Operadores de comparación
//Igualdad
let igualdad = 5 == 5;
console.log(igualdad);
//Desigualdad
let desigualdad = 5 != 5;
console.log(desigualdad);
//Estrictamente igual
let estrictamenteIgual = 5 === 5;
console.log(estrictamenteIgual);
//Estrictamente desigual
let estrictamenteDesigual = 5 !== 5;
console.log(estrictamenteDesigual);
//Mayor que
let mayorQue = 5 > 3;
console.log(mayorQue);
//Menor que
let menorQue = 5 < 3;
console.log(menorQue);
//Mayor o igual que
let mayorOIgualQue = 5 >= 3;
console.log(mayorOIgualQue);
//Menor o igual que
let menorOIgualQue = 5 <= 3;
console.log(menorOIgualQue);

//Operadores lógicos
//AND
let and = true && true;
console.log(and);
//OR
let or = true || false;
console.log(or);
//NOT
let not = !true;
console.log(not);

//Ejercicio Objeto
/*
Utiliza los siguientes datos para crear un objeto terminator. 
El objeto debe tener 3 propiedades: titulo, estreno y duracionMinutos.
*/
const tituloTerminator2 = "Terminator 2: Judgment Day";
const anoEstrenoTerminator2 = 1991;
const duracionMinutosTerminator2 = 137;

// crea un objeto terminator y asignale los 3 datos
let terminator = {
    titulo: tituloTerminator2,
    estreno: anoEstrenoTerminator2,
    duracionMinutos: duracionMinutosTerminator2
}

console.log(terminator);