// console.log("Hola Mundo"); Primer hola mundo en typescript

let mensaje: string = "Hola Mundo"; // se asigna el tipo de variable

// mensaje = 42;
mensaje = "Puerco feliz";

mensaje = "chao mundo";
console.log(mensaje);

// Tipos nativos
/**
 * Tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * Tipos TS
 * any (no usarlo)
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * tipo inferidos
 */

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-rex";
let extintos = true;

let mivariable;
mivariable = "puerco feliz"
mivariable = 42;

function puercoFeliz(config:any) {
    return config;
}

// Parte de arreglos
let animales: string[] = ["Puerco","Feliz","Felipe"];
// let gata: any[] = ["Seba","No",true,"Mon.."];
// let cual: boolean[] = ["kaka",false,true,12]; reto del seba...
let nums: number[] = [1,2,3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// nums.map((x) => x.) // el autocompletado sugiere metodos del tipo de datos

// Tuplas
let tupla = [1,"puerco feliz"]; // En este caso el array toma un tipo de dato, pero no los dos.
let tupla1: [number, string] = [1,"Puerco feliz"]; // Aqui debemos tener cuidado con esta tupla porque solo recibe el numero de deficiones que tenga definido, en este caso dos.
let tupla2: [number, Array<string>] = [1,["puerco feliz"]];
// Notas: Tratar de mantener las tuplas con dos o tres datos, no mas de ahi, si queremos mas datos hay que averiguar otro caso que ayude a representar mejor est tipo de dato.

// Enums
const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";

// PascalCase
enum Talla { Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl" };

const variable1 = Talla.Grande;
console.log(variable1);

const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success;

// Objeto
const objeto = { id:1 } // 1RA FORMA
// 1RA forma de trabajar objetos en typescript
const objeto1: {
    readonly id: number,
    nombre: string,
    // nombre1?: string, // Para que sea opcional y no marque error
    talla: Talla, // Aqui asignamos un enum
} = {
    id: 1,
    nombre: "Hola Mundo",
    talla: Talla.ExtraGrande,
}
// objeto1.id=12; No deja por la propiedad readonly

// 2DA forma de trabajar objetos en typescript
type Direccion = { // Aqui demostramos como seguir trabajando el type dentro de otro type
    numero: number,
    calle: string,
    pais: string
}
type Persona = {
    readonly id: number,
    nombre: string,
    // nombre1?: string, // Para que sea opcional y no marque error
    talla: Talla, // Aqui asignamos un enum
    direccion: Direccion
}

const objeto2: Persona = {
    id:2,
    nombre: "Hola Mundo",
    talla: Talla.Chica,
    direccion: {
        numero: 69,
        calle: "La gata",
        pais: "Colombia"
    }
}

const arr: Persona[] = []; // Arreglo de objetos de persona