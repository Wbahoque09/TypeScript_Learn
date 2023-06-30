
(()=> {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = "CursoTS";
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: "Bruce",
        age: 35,
        powers: ["Ninguno"]
    }
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})()