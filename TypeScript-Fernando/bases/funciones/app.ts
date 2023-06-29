// Funciones Básicas
const sumar = ( a:number, b:number ): number => {
  return a + b;
}

const contar = ( heroes: string[] ): number => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar:boolean = true ): void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( personas: string[] ): string => {
  console.log(personas.join(", "));
  return personas.join(", ");
}

const personas = unirheroes(["Batman","Superman","Mujer Maravilla","Flash"]);

// Tipo funcion
const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:string[] ): void => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
console.log(noHaceNadaTampoco(1,"Papagayo",true,["Kevin"]));
