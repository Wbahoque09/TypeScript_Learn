"use strict";
(() => {
    class Avenger {
        static getavAge() {
            return this.name;
        }
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avAge = avgAge;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avAge = 35;
    const antman = new Avenger("Antman", "Capitan", "Scott Lang");
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("El nombre debe ser mayor de 3 letras");
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    wolverine.fullName = "Papagayo";
})();
//# sourceMappingURL=main.js.map