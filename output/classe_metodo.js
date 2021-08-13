"use strict";
class Professor {
    nome;
    idade;
    materia;
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e sou professor de ${this.materia}`;
    }
    dizerNotas(...notas) {
        const notasTotal = notas.reduce((acc, atual) => acc + atual, 0);
        return notasTotal / notas.length;
    }
}
const glauco = new Professor("Glauco Amorim", 35, "DBA");
console.log(glauco.seApresentar());
console.log(glauco.dizerNotas(6, 8, 7, 2, 8, 6).toFixed(1));
//# sourceMappingURL=classe_metodo.js.map