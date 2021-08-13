class Pessoa {
    primeiro_nome: string;
    segundo_nome
    idade: number;
    altura: number;

    constructor(primeiro_nome: string, segundo_nome:string, idade: number, altura: number) {
        this.primeiro_nome = primeiro_nome;
        this.segundo_nome = segundo_nome;
        this.idade = idade;
        this.altura = altura;
    }

    toString() {
        return `A pessoa ${this.primeiro_nome} possui ${this.idade} e ${this.altura} cm de altura`;
    }
}

const ronaldo = new Pessoa("Ronaldo", "Silva", 27, 128);

console.log(ronaldo.primeiro_nome);

ronaldo.primeiro_nome = "Ronaldete";

console.log(ronaldo.primeiro_nome);

console.log(ronaldo.toString());