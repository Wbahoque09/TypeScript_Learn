"use strict";
const sumar = (a, b) => {
    return a + b;
};
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (personas) => {
    console.log(personas.join(", "));
    return personas.join(", ");
};
const personas = unirheroes(["Batman", "Superman", "Mujer Maravilla", "Flash"]);
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
console.log(noHaceNadaTampoco(1, "Papagayo", true, ["Kevin"]));
//# sourceMappingURL=app.js.map