"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.debug = void 0;
function debug(classe) {
    console.log("A classe foi criada!", classe);
}
exports.debug = debug;
function log(constructor) {
    return class extends constructor {
        created_at = new Date("2020-02-15");
    };
}
exports.log = log;
//# sourceMappingURL=decorators.js.map