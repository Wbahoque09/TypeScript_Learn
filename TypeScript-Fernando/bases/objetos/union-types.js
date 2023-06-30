"use strict";
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
