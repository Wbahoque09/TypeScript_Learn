
(() =>{

    const fullName = ( firtName: string, lastName: string ): string =>{ // Ademas de especificar el tipo de dato de la funcion, se especifica tambien en los parametros
        
        return `${ firtName } ${ lastName }`;

    }

    const name = fullName("Tony","Stark");

    console.log({ name });

})()