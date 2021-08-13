"use strict";
let endereco;
const produtoDados = {
    nome: "Notebook",
    preco: 2000,
    descricao: "Meu notebook superpotente",
    dataValidade: new Date(2022, 11, 1)
};
const produtoDados2 = {
    nome: "Notebook 2",
    preco: 3000,
    dataValidade: new Date(2022, 11, 1)
};
const curso = {
    titulo: "TypeScript",
    preco: 5000,
    cargaHoraria: 10,
    classificacao: 5
};
curso.preco = 6000;
console.log(curso);
let primeiraSoma;
primeiraSoma = (numero1, numero2) => {
    return numero1 + numero2;
};
let calculadora;
function adicao(a, b) {
    return a + b;
}
calculadora = {
    dividir: (numero1, numero2) => {
        return numero1 / numero2;
    },
    multiplicar: (numero1, numero2) => numero1 * numero2,
    subtrair: function (numero1, numero2) {
        return numero1 - numero2;
    },
    somar: adicao,
};
console.log(calculadora.multiplicar(9, 7));
//# sourceMappingURL=interface.js.map