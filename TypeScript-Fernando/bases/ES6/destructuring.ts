(() =>{ 

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.54511,
    }

    // const { poder, vision } = avengers;
    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ( { poder, ...restAvenger }:Avengers ):void =>{
        console.log(poder, restAvenger);
    }

    // printAvenger( avengers );

    // Desustructuracion Arrays

    const avengersArr: string[] = ["Cap. America", "Ironman", "Hulk"];

    const [ captain, ironman,  ] = avengersArr;

    // console.log({ironman, captain});

})()

// En la desestructuracion de objetos se desustructura por la poriedad (obligatoriamente)
// En la desestructuracion de arrays se puede poner cualquier nombre porque se desestructura por numero indice