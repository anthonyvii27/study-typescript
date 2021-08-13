"use strict";
class Cadastro {
    nome;
    nascimento;
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    email;
    empresa;
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const jose = new Cliente("Jose", new Date("2000-01-01"), "jose@teste.com", "Squair");
console.log(jose);
//# sourceMappingURL=classe_heranca.js.map