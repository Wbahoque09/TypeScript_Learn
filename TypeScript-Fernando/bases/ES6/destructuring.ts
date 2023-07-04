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

})()