
(() => {

    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    // Las tres maneras anteriores son maneras diferentes de declarar strings en typescript

    console.log(`I'm ${batman}`);
    console.log( batman.toLocaleUpperCase() );
    console.log( batman[10]?.toLocaleUpperCase() || "No esta presente" );
})()