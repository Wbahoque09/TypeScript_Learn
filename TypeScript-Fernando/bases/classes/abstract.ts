
(() => {

    abstract class Mutante { // Para la creacion de la clase abstracta se coloca abstract antes de la palabra reservada class
        constructor(
            public name: string,
            public realName: string,
        ){

        }
    }

    class Xmen extends Mutante{ // Las clases extendidas son permitidas de una clase abstract, y solo se crean funciones y metodos(?)

        salvarMundo(): string{
            return "Mundo a salvo!";
        }

    }
    class Villian extends Mutante{

        conquistarMundo(): string {
            return "Mundo conquistado";
        }

    }

    const wolverine = new Xmen("Wolverine","Logan");
    const magneto = new Villian("Magneto","Magnus");

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = ( character: Mutante ): void => { // funcion creada que recibe un parametro tipo Mutante, solo funciona con las caracteristicas de la clase Mutante
        console.log( character.realName );
    }

    // printName( wolverine );

})()

// Las clases abstractas sirven para crear otras clases o extender de ella a otras clases, las clases abstractas no se instancian