
(() =>{

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log("Constructor Avenger llamado!");
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
            console.log("Constructor Xmen llamado");
        }

        getFullnameDesdeXmen() {
            console.log( super.getFullname() )
        }
    }

    const wolverine = new Xmen("Wolverine","Logan", true);
    console.log(wolverine);
    wolverine.getFullnameDesdeXmen();

    // const newAvenger = new Avenger("J","W");
    // newAvenger
    // Protected no puede ser accedido desde aca afuera 

})()