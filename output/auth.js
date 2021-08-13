"use strict";
const novoRegistro = new Autenticacao.LoginRegistro();
const resultadoRegistro = novoRegistro.registro({
    nome: "Anthony",
    email: "anthony@teste.com",
    senha: "12346"
});
console.log(resultadoRegistro);
//# sourceMappingURL=auth.js.map