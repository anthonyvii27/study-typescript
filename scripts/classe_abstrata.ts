// É UMA CLASSE NÃO INSTANCIADA, UMA IDÉIA
// É um modelo, onde você usa para se basear, mas não para criar algo com ele

interface IEmail {
    nome: string;
    email: string;
}

interface INotificacao {
    enviar(usuario: MeuUsuario): boolean;
}

interface MeuUsuario {
    nome: string;
    email: string;
    telefone: string;
}

abstract class Notificacao implements INotificacao {
    abstract enviar(usuario: MeuUsuario): boolean; // Não pode ter corpo caso seja abstract
}

// new Notificacao();   // ERRO! NÃO PODE INSTANCIAR UMA CLASSE ABSTRATA

class Email extends Notificacao implements IEmail {
    nome: string;
    email: string;

    constructor(usuario: MeuUsuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }

    enviar(): boolean {
        console.log(`Enviando e-mail para o usuário ${this.email}...`);
        return true;
    }
}

class SMS extends Notificacao {
    enviar(usuario: MeuUsuario): boolean {
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