class Cadastro {
    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cliente extends Cadastro {
    email: string;
    empresa: string;

    constructor(
        nome:string, 
        nascimento: Date, 
        email: string, 
        empresa: string
    ) {
        super(nome, nascimento); // Tem que ser a primeira coisa no construtor (super())
        this.email = email;
        this.empresa = empresa;
    }
}

const jose = new Cliente("Jose", new Date("2000-01-01"), "jose@teste.com", "Squair");

console.log(jose);