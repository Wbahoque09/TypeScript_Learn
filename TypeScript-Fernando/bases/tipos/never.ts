
(() => {

    const error = ( message: string ):never => {
        throw new Error(message)
    }

    error("Auxilio");
    console.log("Hola Mundo");
})()

// El tipo never se usa donde el código que lo usa nunca debe ser accesible. Incluso el compilador de verificación de tiempo de ejecucion puede reconocer estos casos inalcanzables. 
// Al final le estas diciendo a typescript explicitamente que esa funcion nunca (never) regresara algo