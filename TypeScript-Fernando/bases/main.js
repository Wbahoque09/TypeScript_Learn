"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
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
(() => {
    const fullName = (firtName, lastName, upper = false) => {
        if (upper) {
            return `${firtName} ${lastName || ""}`.toUpperCase();
        }
        return `${firtName} ${lastName || ""}`;
    };
    const name = fullName("Tony", "Stank", true);
    console.log({ name });
})();
(() => {
    const fullName = (firtName, lastName) => {
        return `${firtName} ${lastName || ""}`;
    };
    const name = fullName("Tony", "Stank");
    console.log({ name });
})();
(() => {
    const fullName = (firtName, lastName) => {
        return `${firtName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent", "Papagayo");
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction("Fernando"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = "Flash";
    const returnName = () => {
        return hero;
    };
    console.log(typeof (returnName));
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
console.log("Pase por aqui");
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log("Pase por aca");
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    flash = {
        name: "Clark Kent",
        powers: ["Super Fuerza"],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Fuerza"],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = "CursoTS";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 35,
        powers: ["Ninguno"]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr. Strange";
    console.log(avenger.charAt(0));
    avenger = 150.2325415;
    console.log(avenger.toFixed(2));
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let superHeores;
    (function (superHeores) {
        superHeores[superHeores["acuaman"] = 0] = "acuaman";
        superHeores[superHeores["batman"] = 1] = "batman";
        superHeores[superHeores["flash"] = 5] = "flash";
        superHeores[superHeores["superman"] = 100] = "superman";
    })(superHeores || (superHeores = {}));
    const fuerzaFlash = superHeores.flash;
    const fuerzaSuperman = superHeores.superman;
    const fuerzaBatman = superHeores.batman;
    const fuerzaAcuaman = superHeores.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villian = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villian.forEach(v => console.log(v.toUpperCase));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error("Auxilio");
    console.log("Hola Mundo");
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toLocaleUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || "No esta presente");
})();
(() => {
    const hero = ['Dr. Strange', 100];
    hero[0] = 'Ironman';
    hero[1] = 50;
    console.log(hero);
})();
(() => {
    function callBatman() {
    }
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map