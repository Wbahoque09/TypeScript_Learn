import powers from '../data/powers';


export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){

    }
    get power():string { // return string
        return powers.find( power => power.id === this.powerId )?.desc || "Not Found";
    }
}

export class Hero1{}
export class Hero2{}
export class Hero3{}

export const variable = 123;
export const texto = "Hola Mundo";

/**
 * NOTAS: Se pueden exportar las clases y cualquier variable siempre y cuando tengan la palabra reservada export
 */