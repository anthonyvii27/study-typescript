"use strict";
let admin = true;
admin = false;
console.log(admin);
admin = Boolean(1);
console.log(admin);
admin = Boolean("1");
console.log(admin);
admin = Boolean(null);
console.log(admin);
let senha = "1234";
let senhaSegura;
senhaSegura = senha.length > 8;
console.log(senhaSegura);
//# sourceMappingURL=boolean.js.map