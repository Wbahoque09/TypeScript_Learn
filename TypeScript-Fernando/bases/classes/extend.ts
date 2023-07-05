
(() =>{

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log("Constructor Avenger llamado!");
        }

        protected getFullname() { // Nuevo tipo de metodo, el protected permite acceder desde clases hijas a la clase padre
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger { // clase hija creada extiende de Avenger(Padre) 
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean // Propiedad de la clase hija
        ){
            super( name, realName );
            // console.log("Constructor Xmen llamado");
        }

        // get es un metodo, debe retornar algo obligatoriamente, no recibe ningun argumento
        get fullName() { 
            return `${ this.name } - ${ this.realName }`;
        }

        // set es otro metodo, recibe un argumento(obligatoriamente), puede tener mismo nombre de un get, no retorna nada
        set fullName( name: string ) {

            if (name.length < 3) {
                throw new Error("El nombre debe ser mayor de 3 letras");
            }

            this.name = name;
        } 

        getFullnameDesdeXmen() {
            // console.log( super.getFullname() );
        }
    }

    const wolverine = new Xmen("Wolverine","Logan", true);

    wolverine.fullName = "Papagayo";

    // console.log(wolverine.fullName);
    // wolverine.getFullnameDesdeXmen();

    // const newAvenger = new Avenger("J","W");
    // newAvenger
    // Protected no puede ser accedido desde aca afuera 

})()