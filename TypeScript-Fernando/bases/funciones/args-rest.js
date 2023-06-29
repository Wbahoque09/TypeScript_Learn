"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent", "Papagayo");
    console.log({ superman });
})();
// El ...restArgs veo que funciona como los spread operators en JS, adicional se les debe declarar un tipo de operador finalizado con un array
