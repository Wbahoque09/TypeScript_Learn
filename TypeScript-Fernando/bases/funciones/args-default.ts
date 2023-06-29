
(() =>{

    const fullName = ( firtName: string, lastName?: string, upper: boolean = false ): string =>{ // Ademas de especificar el tipo de dato de la funcion, se especifica tambien en los parametros, tambien vemos como un parametro es opcional y no estricto
        
        if (upper) {
            return `${ firtName } ${ lastName || "" }`.toUpperCase();
        }

        return `${ firtName } ${ lastName || "" }`;
        

    }

    const name = fullName("Tony", "Stank", true);

    console.log({ name });

})()

// Typescript recomienda que los parametros opcionales vayan de ultimo