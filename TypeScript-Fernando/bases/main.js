"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.54511,
    };
    const printAvenger = (_a) => {
        var { poder } = _a, restAvenger = __rest(_a, ["poder"]);
        console.log(poder, restAvenger);
    };
    const avengersArr = ["Cap. America", "Ironman", "Hulk"];
    const [captain, ironman,] = avengersArr;
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit"
    };
    const captainAmerica = {
        name: "Capitán America",
        weapon: "Shield"
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const avengers = [thor, captainAmerica, ironman];
    for (const iterator of avengers) {
    }
})();
(() => {
    const nombre = "Fernando";
    const getName = () => {
        console.log("viejo getName");
    };
})();
//# sourceMappingURL=main.js.map