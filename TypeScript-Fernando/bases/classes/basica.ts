
(() =>{

    class Avenger { // Creacion de la clase

        private name: string = ""; // Se debe definir tipo de metodo de las propiedades, con el private solo se accede dentro de la clase
        public team: string= "";
        public realName?: string = "";
        static avAge: number = 35; // Las clases static no se pueden modificar y se acceden a ellas mediante nombre de la clase y la propiedad

        constructor(name: string, team: string, realName?:string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    }

    const antman: Avenger = new Avenger("Antman","Capitan");
    // console.log( Avenger.avAge ); 

})()