"use strict";
(() => {
    const fullName = (firtName, lastName) => {
        return `${firtName} ${lastName || ""}`;
    };
    const name = fullName("Tony", "Stank");
    console.log({ name });
})();
//# sourceMappingURL=args-optionals.js.map