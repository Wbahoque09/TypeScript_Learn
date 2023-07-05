
(() =>{

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ): boolean;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age: number = 1;
        public name: string = "";
        public realName: string = "";

        mutantPower(id: number): boolean {
            if (id !== 1) {
                return true;
            }
            return false;
        }

    }

})()

// Para implementar interfaces en clases se debe agregar la palabra reservada "implements" despues del nombre de la clase