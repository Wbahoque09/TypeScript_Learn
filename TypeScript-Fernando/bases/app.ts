

const msg: string = "Hola mundo"; // Declaramos una constante y le damos el tipo de variable que queremos

const hero = {
    name: "Iroman",
    age: 45,
}

// hero.age = "50"; Aqui si da error convertir la propiedad del objeto, pero cabe aclarar que si transpila aun habiendo error
hero.age = 50; // Aqui si me vale la modificacion del objeto porque es el mismo tipo de dato 

console.log(hero.age + 1);