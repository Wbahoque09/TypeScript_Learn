"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let superHeores;
    (function (superHeores) {
        superHeores[superHeores["acuaman"] = 0] = "acuaman";
        superHeores[superHeores["batman"] = 1] = "batman";
        superHeores[superHeores["flash"] = 5] = "flash";
        superHeores[superHeores["superman"] = 100] = "superman";
    })(superHeores || (superHeores = {}));
    const fuerzaFlash = superHeores.flash;
    const fuerzaSuperman = superHeores.superman;
    const fuerzaBatman = superHeores.batman;
    const fuerzaAcuaman = superHeores.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map