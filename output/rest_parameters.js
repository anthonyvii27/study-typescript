"use strict";
function somarRenda(...meses) {
    return meses.reduce((total, atual) => total + atual, 0);
}
console.log(somarRenda(500, 100, 250));
//# sourceMappingURL=rest_parameters.js.map