function printToConsole( constructor: Function ) { // Funcion que ejecuta decorador
    console.log(constructor)
}

const printToConsoleConditional = ( print: boolean = false ):Function => { // Se recibe un parametro tipo boolean
    if ( print ) { // Se verifica el parametro recibido 
        return printToConsole;
    }
    return () => {}
}

const bloquarPropotipo:Function = function( constructor: Function ) { // Funcion que tiene metodos seal para impedir modificar el prototype del objeto
    Object.seal( constructor )
    Object.seal( constructor.prototype );
}

function CheckValidPokemonId(): Function { // Funcion que retorna otra funcion
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ){ // Funcion que tiene argumentos para validar informacion, esta funcion decoradora sirve para metodos solamente
        
        const originalMethod = descriptor.value;

        descriptor.value = ( id:number ) => { // Se evalua el descriptor por medio de una funcion que recibe el id de la funcion savePokemon y retorna un console error en caso que del id no este en los limites establecidos
            if ( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe de estar entre 1 y 800');
            }
            return originalMethod(id);
        }


    }
}

function readonly( isWritable: boolean = true ):Function { // Esta funcion decoradora sirve solo para proiedades
    return function(target: any, propertyKey: string ){
        
        const descriptor: PropertyDescriptor = {
            get() {
                console.log( this );
                return 'Fernando';
            },
            set( this, val ){
                // console.log(this, val );
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        
        return descriptor;
    }
}

@bloquarPropotipo
@printToConsoleConditional( false ) // decorador, para su creacion se pone el arroba y se escribe el nombre de la funcion decoradora
export class Pokemon {

    @readonly()
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ){

    }

    @CheckValidPokemonId() // Decorador creado que valida que el id sea correcto
    savePokemonToDB( id: number ) {
        console.log(`Pokemon guardado en DB ${id}`);
    }

}