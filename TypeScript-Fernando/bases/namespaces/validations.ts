
namespace Validations { // Los namespace son para identificar donde estamos accediendo, tambien son agrupadores de clases 

    export const validateText = ( text: string ):boolean => { // Con el export podemos ver estas funciones afuera del namespace
        return ( text.length > 3 ) ? true : false ;
    }

    export const validateDate = ( myDate: Date ): boolean => {
        return ( isNaN( myDate.valueOf() ) )
        ? false
        : true;
    }

}

console.log(  Validations.validateText("Papagayo") );
