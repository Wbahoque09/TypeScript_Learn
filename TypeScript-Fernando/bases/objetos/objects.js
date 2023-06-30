"use strict";
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
//# sourceMappingURL=objects.js.map