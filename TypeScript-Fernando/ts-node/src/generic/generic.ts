
export const printObject = ( argument: any ) => {
    console.log( argument );
}

export const genericFunctionarrow = <T>( argument: T ) => { // Manera de como se implementa la funcion generica con flecha
    return argument;
}

export function genericFunction<T>( argument: T ) { // Manera de como se implementa la funcion generica en una funcion tradicional
    return argument;
}
