"use strict";
// Funciones Básicas
const sumar = (a, b) => {
    return a + b;
};
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"]; // Me falto
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (personas) => {
    console.log(personas.join(", "));
    return personas.join(", ");
};
const personas = unirheroes(["Batman", "Superman", "Mujer Maravilla", "Flash"]);
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco; // Me falto
noHaceNadaTampoco = noHaceNada;
console.log(noHaceNadaTampoco(1, "Papagayo", true, ["Kevin"]));
