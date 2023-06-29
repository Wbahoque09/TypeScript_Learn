
(() =>{

    const fullName = ( firtName: string, lastName?: string ): string =>{ // Ademas de especificar el tipo de dato de la funcion, se especifica tambien en los parametros, tambien vemos como un parametro es opcional y no estricto
        
        return `${ firtName } ${ lastName || "" }`;

    }

    const name = fullName("Tony", "Stank");

    console.log({ name });

})()