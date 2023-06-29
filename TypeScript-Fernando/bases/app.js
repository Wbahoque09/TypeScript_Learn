"use strict";
// Introduccion
// const msg: string = "Hola mundo"; // Declaramos una constante y le damos el tipo de variable que queremos
// const hero = {
//     name: "Iroman",
//     age: 45,
// }
// // hero.age = "50"; Aqui si da error convertir la propiedad del objeto, pero cabe aclarar que si transpila aun habiendo error
// hero.age = 50; // Aqui si me vale la modificacion del objeto porque es el mismo tipo de dato 
// console.log(hero.age + 1);
// Tipo de datos
// let b:string;
// const a:number = 10; Siempre acostumbrarse a declarar el tipo de dato
// function sayHello ( msg: string ){ // msg se enceuntra tipo any, porque no ha sido declarada antes
//     console.log(msg);
// }
(() => {
    const a = 10;
    console.log(a);
})(); // Esta funcion es anonima y autoinvocable
// El objetivo de esta funcion anonima y autoinvocable es para que pueda crear mas archivos en el mismo proyecto y no generrar errores de scope global
