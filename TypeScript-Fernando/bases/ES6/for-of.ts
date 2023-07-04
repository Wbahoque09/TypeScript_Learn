
(() =>{

    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironman:Avenger = {
        name: "Ironman",
        weapon: "Armorsuit"
    }

    const captainAmerica:Avenger = {
        name: "Capitán America",
        weapon: "Shield"
    }
    const thor:Avenger = {
        name: "Thor",
        weapon: "Mjolnir"
    }

    const avengers:Avenger[] = [ thor, captainAmerica, ironman ];

    for (const iterator of avengers) {
        // console.log(iterator);
    }

})()

// Vemos como se especifica un array de objetos, y el for of vemos que declaramos una variable interna (iterator), con esta variable accedemos a cada elemnto del array (avengers)