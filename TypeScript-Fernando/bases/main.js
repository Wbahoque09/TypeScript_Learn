"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avAge = avgAge;
        }
    }
    Avenger.avAge = 35;
    const antman = new Avenger("Antman", "Capitan", "Scott Lang");
})();
//# sourceMappingURL=main.js.map