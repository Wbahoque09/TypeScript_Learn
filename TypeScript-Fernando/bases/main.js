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
            console.log("Constructor Avenger llamado!");
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado");
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullname());
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    console.log(wolverine);
    wolverine.getFullnameDesdeXmen();
})();
//# sourceMappingURL=main.js.map