"use strict";
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        constructor() {
            this.name = "";
            this.age = 0;
            this.sexo = "";
            this.estadoCivil = "";
            this.biografia = () => console.log("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta nihil, labore enim repudiandae recusandae repellat illo fuga ipsa facere doloremque aperiam aut voluptatum ratione! Assumenda, aperiam corrupti. Vel, excepturi.");
        }
    }
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
    class Mutant {
        constructor() {
            this.age = 1;
            this.name = "";
            this.realName = "";
        }
        mutantPower(id) {
            if (id !== 1) {
                return true;
            }
            return false;
        }
    }
})();
(() => {
    const client = {
        name: "Fernando",
        getFullAddress() {
            return "Hola Mundo";
        },
        age: 25,
        address: {
            id: 50600,
            zip: "MD0 AFR",
            city: "Madagascar"
        }
    };
    const client2 = {
        age: 20,
        name: "Marcela",
        address: {
            city: "Dakkota N",
            id: 521,
            zip: "YZ0 LAK",
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a * b;
    };
})();
//# sourceMappingURL=main.js.map