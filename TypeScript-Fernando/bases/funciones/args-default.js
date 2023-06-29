"use strict";
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
// Typescript recomienda que los parametros opcionales vayan de ultimo
