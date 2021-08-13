"use strict";
class Notificacao {
}
class Email extends Notificacao {
    nome;
    email;
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar() {
        console.log(`Enviando e-mail para o usuário ${this.email}...`);
        return true;
    }
}
class SMS extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando SMS para o usuário ${usuario.email}...`);
        return true;
    }
}
const email = new Email({
    nome: "Joao",
    email: "joao@teste.com",
    telefone: "1234-5678"
});
email.enviar();
new SMS().enviar({
    nome: "Joao",
    email: "joao@teste.com",
    telefone: "1234-5678"
});
//# sourceMappingURL=classe_abstrata.js.map