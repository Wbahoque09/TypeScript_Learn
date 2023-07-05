
(() => {

  // Crear interfaces

  // Cree una interfaz para validar el auto (el valor enviado por parametro)

  interface Auto {
    encender:boolean;
    velocidadMaxima:number;
    acelerar:()=>void;
  }

  const conducirBatimovil = ( auto:Auto):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  }

  const batimovil:Auto = {
    encender:false,
    velocidadMaxima:0,
    acelerar(){
      console.log("...... gogogo!!!");
    }
  }

  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  interface Joker {
    reir?:boolean;
    comer?:boolean;
    llorar?:boolean;
  }

  const guason:Joker = {
    reir: true,
    comer:true,
    llorar:false
  }

  const reir = ( guason:Joker ):void => {
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
  }


  // Cree una interfaz para la siguiente funcion

  interface cityfunction {
    ( ciudadanos:string[] ):number;
  }

  const ciudadGotica:cityfunction = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  interface Datos {
    name: string;
    age: number;
    sexo: string;
    estadoCivil: string;
    biografia: () => void;
  }

  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
  class Persona implements Datos {
    public name:string = "";
    public age:number = 0;
    public sexo:string = "";
    public estadoCivil: string = "";
    public biografia: () => void = () => console.log("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta nihil, labore enim repudiandae recusandae repellat illo fuga ipsa facere doloremque aperiam aut voluptatum ratione! Assumenda, aperiam corrupti. Vel, excepturi.");
  }

})()
