
(() => {

    let flash: {name:string, age?:number, powers: string[]} = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad","Viajar en el tiempo"],
    }

    flash = {
        name: "Clark Kent",
        // age: 60,
        powers: ["Super Fuerza"],
        // getNombre(){
        //     return this.name;
        // }
    }

    console.log(flash);

})()

// En los objetos no importa el orden como defines los tipos de valores, en las funciones si importa