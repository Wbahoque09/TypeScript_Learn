
(() =>{

    class Avenger { // Creacion de la clase

        // private name: string = ""; // Se debe definir tipo de metodo de las propiedades, con el private solo se accede dentro de la clase
        // public team: string= "";
        // public realName?: string = "";
        static avAge: number = 35; // Las clases static no se pueden modificar y se acceden a ellas mediante nombre de la clase y la propiedad

        constructor(
            private name: string, // Nueva forma de declarar las propiedades con su tipo de metodo
            private team: string, 
            public realName?:string,
            avgAge: number = 55,
            ) {
                Avenger.avAge = avgAge;
            // this.name = name;
            // this.team = team;
            // this.realName = realName; Forma tradicional
        }

    }

    const antman: Avenger = new Avenger("Antman","Capitan","Scott Lang");
    // console.log(antman);
    // console.log( Avenger.avAge ); 

})()