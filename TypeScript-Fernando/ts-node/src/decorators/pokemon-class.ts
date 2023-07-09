function printToConsole( constructor: Function ) { // Funcion que ejecuta decorador
    console.log(constructor)
}

const printToConsoleConditional = ( print: boolean = false ):Function => { // Se recibe un parametro tipo boolean
    if ( print ) { // Se verifica el parametro recibido 
        return printToConsole;
    }
    return () => {}
}

const bloquarPropotipo = function( constructor: Function ) { // Funcion que tiene metodos seal para impedir modificar el prototype del objeto
    Object.seal( constructor )
    Object.seal( constructor.prototype );
}

@bloquarPropotipo
@printToConsoleConditional( true ) // decorador, para su creacion se pone el arroba y se escribe el nombre de la funcion decoradora
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ){

    }

}