
(() => {

    const addNumbers = ( a: number, b: number ): number => a + b;
    const greet = ( name: string ): string => `Hola ${ name }`;
    const saveTheWorld = (): string => `El mundo esta salvado`;

    let myFunction;
    // let myFunction: () => string; Definicion tipo funcion de flecha con tipo de dato que retorna la funcion
    // let myFunction: (a:number,b:number) => number; Tipo de funcion que se le declara tipo de datos en los argumentos (OBLIGATORIO)

    myFunction = 10;
    console.log(myFunction);

    myFunction = addNumbers;
    console.log( myFunction(1,2) );

    myFunction = greet;
    console.log( myFunction("Fernando"));
    
    myFunction = saveTheWorld;
    console.log( myFunction() );

})()