(() => {

    // let avengers; Se hizo para demostrar el error en el if
    let avengers: number = 10;
    console.log(avengers);

    const villians: number = 20;

    if (avengers < villians) {
        console.log("Estamos en problemas")
    } else {
        console.log("Nos salvamos")
    }

})()