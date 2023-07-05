
(() => {

    class Apocalipsis {

        static intance:Apocalipsis; // Instancia de la clase Apocalipsis para la creacion de instancia

        private constructor( public name: string ){ // Constructor privado que se instancia desde el metodo callApocalipsis

        }

        static callApocalipsis(): Apocalipsis { // Metodo para crear la instancia
            if ( !Apocalipsis.intance ) {
                Apocalipsis.intance = new Apocalipsis("Nombre Creado");
            }

            return Apocalipsis.intance;
        }

        changeName( newName: string ): void {
            this.name = newName;
        }

    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName("Xavier"); // Aqui cambiamos el default de la instancia, (Se cambia en todas las demas instancias)

    // console.log({apocalipsis1,apocalipsis2,apocalipsis3});

})()

// Aqui usamos el patron Singelton