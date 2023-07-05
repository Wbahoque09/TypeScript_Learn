"use strict";
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
//# sourceMappingURL=main.js.map