"use strict";
function showError(mensagem) {
    throw new Error(mensagem);
}
let n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
loopInfinito();
//# sourceMappingURL=never.js.map