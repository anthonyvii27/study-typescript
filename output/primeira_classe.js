"use strict";
class Pessoa {
    primeiro_nome;
    segundo_nome;
    idade;
    altura;
    constructor(primeiro_nome, segundo_nome, idade, altura) {
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
//# sourceMappingURL=primeira_classe.js.map