
(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address; // Aqui se vincula otra interface
        getFullAddress?(id?: string):string; // Metodo o funcion(?)
    }

    interface Address {
        id: number;
        zip?: string;
        city: string;
    }

    const client:Client = {
        name: "Fernando",
        getFullAddress() {
            return "Hola Mundo"
        },
        age: 25,
        address: {
            id: 50600,
            zip: "MD0 AFR",
            city: "Madagascar"
        }
    }

    const client2:Client = {
        age: 20,
        name: "Marcela",
        address:{
            city: "Dakkota N",
            id: 521,
            zip: "YZ0 LAK",
        }
    }

})()