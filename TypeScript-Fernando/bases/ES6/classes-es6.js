
(()=>{

    class Avenger { // Se crea la clase
        name; // Se le asignan propiedades
        power;

        constructor( name = "No name", power = 0 ){ // Se crea el constructor y se le pasan las propiedades para que las lea
            this.name = name; // Aqui actualiza la proiedad 
            this.power = power;
        }

    }

    class FlyingAvenger extends Avenger { // Se crea una nueva clase extendiendo de la anterior
        flying;

        constructor(name, power) {
            super(name, power) // Se declara super porque se esta extendiendo de otra clase y esto indica el constructor padre (Obligatotio ponerlo)
            this.flying = true;
        }
    }

    const hulk = new Avenger("Hulk", 9001); // Aca se invoca la clase y se le pasa las propiedades a mostrar(?)
    const falcon = new FlyingAvenger("Falcon", 50);

    console.log(hulk);
    console.log(falcon);

})()