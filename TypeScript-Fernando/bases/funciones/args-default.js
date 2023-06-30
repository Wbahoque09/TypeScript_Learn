"use strict";
(() => {
    const fullName = (firtName, lastName, upper = false) => {
        if (upper) {
            return `${firtName} ${lastName || ""}`.toUpperCase();
        }
        return `${firtName} ${lastName || ""}`;
    };
    const name = fullName("Tony", "Stank", true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map